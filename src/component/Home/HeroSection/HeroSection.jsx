import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import backgroundImage from "../../../assets/Rectangle 1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Loader/Loader";
const HeroSection = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
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
  return (
    <div>
      <div
        className="relative h-[400px] md:h-[625px]  bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative z-10 p-2 flex flex-col items-center justify-center h-full">
          <div className="text-white text-center text-[20px] md:text-[30px] font-bold">
            <p>Soluciones inteligentes para un futuro mejor</p>
            <p className="text-red-600">Aprende, crea e innova con la IA</p>
            <p className="text-[16px] md:w-[552px]">
              Despierta tu potencial con ClassTools.io: la inteligencia
              artificial al alcance de todos, en el directorio de IA más
              completo.
            </p>
          </div>
          <div className="flex items-center justify-center mt-12   text-black ">
            <div className="flex items-center max-w-3xl bg-white p-3 h-[65px] md:w-[827px] shadow rounded-full overflow-hidden">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FiSearch className="text-gray-400 w-[15px] h-[15px] mt-1" />
                </div>
                <input
                  type="text"
                  className="text-center w-full text-[15px] pl-10 pr-4 py-3 rounded-full border-none focus:outline-none"
                  placeholder="What are you looking for?"
                />
              </div>
              <div className="flex items-center px-4 border-l  border-gray-300">
                <HiOutlineMenuAlt2 className="text-gray-400 w-[15px] " />
                <select className="ml-2 cursor-pointer text-[15px] bg-transparent border-none text-gray-600 focus:outline-none">
                  <option>All categories</option>
                  {categories.map((category, index) => (
                    <option key={index}>{category.title}</option>
                  ))}
                </select>
              </div>
              <button className="bg-orange-500 text-[14px]  text-white px-[27px] py-[15px] rounded-full hover:bg-orange-600">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
