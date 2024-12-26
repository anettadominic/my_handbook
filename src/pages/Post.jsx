import { useParams, useNavigate } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { useState, useEffect } from "react";
import { sanityClient } from "../sanity";
import PortableTextComponent from "../components/PortableText/PortableText";
import "../assets/css/post.css";
import { urlFor } from "../sanity";
import Header from "../components/Header/Header";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setSidebarContent } = useSidebar();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const query = `*[_type == "category"] | order(sortOrder asc) {
          _id,
          title,
          description,
          slug,
          "imageUrl": image.asset->url
        }`;

        const results = await sanityClient.fetch(query);
        setCategories(results);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug]{
          _id,
          title,
          description,
          slug,
          sidebarContent,
          "mainImage": mainImage.asset->url,
          body[]{
            ...,
            _type == "image" => {
              ...,
              "url": asset->url
            }
          }
        }`;

        const params = { slug: id };
        const results = await sanityClient.fetch(query, params);

        if (results && results.length > 0) {
          const postData = results[0];
          setPost(postData);
          setSidebarContent(postData?.sidebarContent);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setError(true);
      }
    };

    fetchPost();
  }, [id, setSidebarContent]);

  if (error) {
    navigate("/not-found");
    return null;
  }

  return (
    post && (
      <>
        <Header headData={categories} />
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl text-center font-bold text-gray-800 mb-4">
            {post?.title}
          </h1>

          <div className="w-full overflow-hidden rounded-lg mb-6">
            <img
              src={urlFor(post?.mainImage).quality().url()}
              alt="main-image"
              className="w-full object-cover"
              style={{ maxHeight: "20vh" }}
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 post-potable-text">
            <PortableTextComponent content={post?.body} />
          </div>
        </div>
      </>
    )
  );
};

export default Post;
