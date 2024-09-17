import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl/BaseUrl";

const AiCategory = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // const response = await axios.get(`${BaseUrl}/categories`);
        const response = await axios.get("/categories.json");
        setCategories(response.data.categories);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch categories");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    // <div className=" absolute w-full bg-white rounded-t-[40px] mt-[-40px] ">
    <div className=" w-full bg-white  ">
      <div className="container  mx-auto px-4 py-8 mt-10">
        <div className="grid justify-items-center  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link
              to={"tools"}
              key={index}
              className="flex flex-col w-[180px] h-[130px] items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="w-[44px] h-[44px] mx-2">
                <img src={category.icon} alt="" />
              </div>
              <h3 className="text-sm font-semibold text-gray-700">
                {category.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiCategory;
