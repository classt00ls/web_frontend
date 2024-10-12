import { useContext, useEffect } from "react";
import Loader from "../../Loader/Loader";
import { dataContext } from "../../../Context/Context";
import { useDispatch, useSelector } from "react-redux";

const SidebarCategory = () => {
  const { categoriesData, setCategoriesData, selectedCategory, setSelectedCategory } = useContext(dataContext);
  const dispatch = useDispatch();

  const selectedCategories = useSelector(state => state.changeState.selectedCategories);
  const refreshTools = useSelector(state => state.changeState.refreshTools);


  const selectCategory = async (newCategory) => {
      try {
        let actualCategories = selectedCategories;

        if(actualCategories.includes(newCategory)) {
          console.log('Ya lo tenemos !!')
          actualCategories = actualCategories.filter(category => category != newCategory);
        } else {
          actualCategories.push(newCategory);
        }
        dispatch({ type: 'set', selectedCategories: actualCategories });
        dispatch({ type: 'set', refreshTools: true });
        console.log('valor actual: ', selectedCategories)

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
              className="flex cursor-pointer flex-col w-[132px] h-[96px] items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out"
              onClick={() => selectCategory(category.name)}
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
