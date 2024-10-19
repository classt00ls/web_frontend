import { useContext, useEffect } from "react";
import Loader from "../../Loader/Loader";
import { dataContext } from "../../../Context/Context";
import { useDispatch, useSelector } from "react-redux";

const SidebarCategory = () => {
  const { categoriesData, setCategoriesData, selectedCategory, setSelectedCategory } = useContext(dataContext);
  const dispatch = useDispatch();

  const selectedCategories = useSelector(state => state.filters.selectedCategories);
  const refreshTools = useSelector(state => state.changeState.refreshTools);


  const selectCategory = async (category) => {
      try {
        
        let actualCategories = selectedCategories;

        if(actualCategories.includes(category.name)) {
          category.clicked = false;
          actualCategories = actualCategories.filter(filtered => filtered != category.name);
        } else {
          category.clicked = true;
          actualCategories.push(category.name);
        }

        dispatch({ type: 'CHANGE_FILTERS', selectedCategories: actualCategories });
        dispatch({ type: 'set', refreshTools: true });

      } catch (error) {
        dispatch({ type: 'set', errorMessage: error });
        dispatch({ type: 'set', showError: true });
      }
  };


  if (categoriesData.length < 1) {
    return <Loader />;
  }
  return (
    <div className="w-full bg-white rounded-t-[40px] mt-[-40px]">
      <div className="container mx-auto px-4 py-8 mt-10">
        <div className="grid grid-cols-2  gap-4">
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className={`flex cursor-pointer flex-col w-[132px] h-[96px] items-center p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out`
                +
                `${category.clicked ? ' bg-blue-500 text-blue':' bg-white'}`
              }
              onClick={() => selectCategory(category)}
            >
              <div className="w-[30px] h-[30px] mx-2">
                <img src={category?.imageUrl} alt="" />
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
