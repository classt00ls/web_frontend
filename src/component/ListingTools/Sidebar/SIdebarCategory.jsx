import { useContext } from "react";
import { dataContext } from "../../../Context/Context";
import Loader from "../../Loader/Loader";

const SidebarCategory = () => {
  const {
    categoriesData,
    setCategoriesData,
    selectedCategory,
    setSelectedCategory,
  } = useContext(dataContext);

  console.log(categoriesData);
  console.log(selectedCategory);

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
              onClick={() => setSelectedCategory(category.title)}
            >
              <div className="w-[30px] h-[30px] mx-2">
                <img src={category?.icon} alt="" />
              </div>
              <h3 className="text-xs font-semibold text-gray-700 text-center">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarCategory;
