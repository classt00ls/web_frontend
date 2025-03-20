import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { TagApi } from "../../../api/TagApi";
import { useDispatch } from "react-redux";
import ResearchIcon from "../../../assets/icons/ResearchIcon";
import EducationIcon from "../../../assets/icons/EducationIcon";
import LowCodeIcon from "../../../assets/icons/LowCodeIcon";
import WorkflowsIcon from "../../../assets/icons/WorkflowsIcon";
import MarketingIcon from "../../../assets/icons/MarketingIcon";
import VideoEditingIcon from "../../../assets/icons/VideoEditingIcon";
import AIAgentsIcon from "../../../assets/icons/AIAgentsIcon";
import PersonalAssistantIcon from "../../../assets/icons/PersonalAssistantIcon";
import MusicIcon from "../../../assets/icons/MusicIcon";
import TranslatorIcon from "../../../assets/icons/TranslatorIcon";



const AiCategory = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // const response = await axios.get(`${BaseUrl}/categories`);
        const response = await TagApi.getAllCategories();
        setCategories(response);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch categories");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const gotools = (target) => {

    // Actualizamos los filtros
    dispatch({ type: 'CHANGE_FILTERS', selectedCategories: [target] });
    // Eliminamos el filtro de prompt cuando se selecciona una categoría
    dispatch({ type: 'CHANGE_FILTERS', prompt: '' });
    // Vamos a buscar las tools
    dispatch({ type: 'set', refreshTools: true });

    navigate("/tools");
  }

  // Función para renderizar el icono adecuado según la categoría
  const renderCategoryIcon = (category) => {
    switch (category.name) {
      case "Research":
        return <ResearchIcon className="w-full h-full" />;
      case "Education":
        return <EducationIcon className="w-full h-full" />;
      case "Low-Code/No-Code":
        return <LowCodeIcon className="w-full h-full" />;
      case "Workflows":
        return <WorkflowsIcon className="w-full h-full" />;
      case "Marketing":
        return <MarketingIcon className="w-full h-full" />;
      case "Video Editing":
        return <VideoEditingIcon className="w-full h-full" />;
      case "AI Agents":
        return <AIAgentsIcon className="w-full h-full" />;
      case "Personal Assistant":
        return <PersonalAssistantIcon className="w-full h-full" />;
      case "Music":
        return <MusicIcon className="w-full h-full" />;
      case "Translator":
        return <TranslatorIcon className="w-full h-full" />;
      default:
        return <img src={category.imageUrl ?? "https://i.ibb.co/t3hXkN6/Icon10.png"} alt="" />;
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    // <div className=" absolute w-full bg-white rounded-t-[40px] mt-[-40px] ">
    <div className=" w-full bg-white  ">
      {categories ?( 
      <div className="container  mx-auto px-4 py-8 mt-10">
        <div className="grid justify-items-center  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories?.map((category, index) => (
            <Link
              onClick={e => gotools(category.name)}
              key={index}
              className="flex flex-col w-[180px] h-[130px] items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="w-[44px] h-[44px] mx-2">
                {renderCategoryIcon(category)}
              </div>
              <h3 className="text-sm font-semibold text-gray-700">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

          )  : <></>}
    </div>
  );
};

export default AiCategory;
