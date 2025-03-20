import { useContext, useEffect } from "react";
import Loader from "../../Loader/Loader";
import { dataContext } from "../../../Context/Context";
import { useDispatch, useSelector } from "react-redux";
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

const SidebarCategory = () => {
  const { categoriesData, setCategoriesData, selectedCategory, setSelectedCategory } = useContext(dataContext);
  const dispatch = useDispatch();

  const selectedCategories = useSelector(state => state.filters.selectedCategories);
  const refreshTools = useSelector(state => state.changeState.refreshTools);

  useEffect(() => { 
    (async () => {

      categoriesData.forEach(element => {
        if (!selectedCategories.includes(element.name)) {
          element.clicked = false;
        }
      });
      
    })()
  }, [selectedCategories]);

  const selectCategory = async (category) => {
      try {
        let actualCategories = selectedCategories;

      if(actualCategories.includes(category.name)) {
        category.clicked = false;
        actualCategories = actualCategories.filter(filtered => filtered != category.name);
      } else {
        category.clicked = true;
        actualCategories.push(category.name);
        // Eliminamos el filtro de prompt cuando se selecciona una categoría
        dispatch({ type: 'CHANGE_FILTERS', prompt: '' });
      }
        
        // Actualizamos los filtros
        dispatch({ type: 'CHANGE_FILTERS', selectedCategories: actualCategories });
        // Vamos a buscar las tools
        dispatch({ type: 'set', refreshTools: true });

      } catch (error) {
        dispatch({ type: 'set', errorMessage: error });
        dispatch({ type: 'set', showError: true });
      }
  };

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
        return <img src={category?.imageUrl} alt="" />;
    }
  };

  if (categoriesData.length < 1) {
    return <Loader />;
  }
  return (
    <div className="w-full bg-white rounded-t-[40px] bg-white rounded-b-[40px] mt-[-40px]">
      <div className="container mx-auto px-4 py-8 mt-10">
        <div className="grid grid-cols-2  gap-4">
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className={`flex cursor-pointer flex-col w-[132px] h-[96px]  items-center p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out`
                +
                `${category.clicked ? ' blue_corporative':' bg-white'}`
              }
              onClick={() => selectCategory(category)}
            >
              <div className="w-[30px] h-[30px] mx-2">
                {renderCategoryIcon(category)}
              </div>
              <h3 className="text-xs font-semibold text-gray-700 text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarCategory;
