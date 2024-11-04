import { useEffect, useState ,useCallback} from "react";
import { sanityClient } from "../sanity";
import InfoCard from "../components/Cards/InfoCards";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const query = `*[_type == "category"]{
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

  const handleButtonClick = useCallback((slug) => {
    navigate(`/${slug}`);
  }, [navigate]);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories?.map((item) => (
        <InfoCard
          key={item.id}
          image={item?.imageUrl}
          title={item?.title}
          description={item?.description}
          buttonText={"Explore"}
          onButtonClick={() => handleButtonClick(item?.slug?.current)}
        />
      ))}
    </div>
  );
};

export default Home;
