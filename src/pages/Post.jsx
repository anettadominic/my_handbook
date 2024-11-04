import { useParams } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { useState, useEffect } from "react";
import { sanityClient } from "../sanity";
import PortableTextComponent from "../components/PortableText/PortableText";
import '../assets/css/post.css'

const Post = () => {
  const { id } = useParams();
  const { setSidebarContent } = useSidebar();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

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
          setSidebarContent(postData.sidebarContent);
        } else {
          setError("Post not found.");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("An error occurred while fetching the post.");
      }
    };

    fetchPost();
  }, [id, setSidebarContent]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    post && (
      <>
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl text-center font-bold text-gray-800 mb-4">
            {post?.title}
          </h1>

          <div className="w-full overflow-hidden rounded-lg mb-6">
            <img
              src={post?.mainImage}
              alt="main-image"
              className="w-full object-cover"
              style={{ height: "15vh", maxHeight: "20vh" }} 
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
