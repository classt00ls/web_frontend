import { useContext } from "react";
import { FaCheckCircle,FaSort } from "react-icons/fa";
import { Link } from "react-router-dom";
import mapLogo from "../../../../src/assets/VectorMap.png";
import { dataContext } from "../../../Context/Context";
import Loader from "../../Loader/Loader";
import Category from "../Category/Category";
import Filter from "../Filter/Filter";

const Listing = () => {
  const { listing } = useContext(dataContext);
  const { toolsData,categoriesData,setSelectedCategory,selectedCategory,subCategories } = useContext(dataContext);


  

  if (categoriesData?.length < 1  || subCategories?.length < 1) {
    return <Loader />;

    
  }
  
  // console.log(subCategories.map((item) => item.title));
  
  
  return (
    <div className="mt-8 ml-10  ">
      <div className="md:ml-6">
        <p className="flex gap-2">
          <span className="text-sm text-[#898989]">Home &gt;</span>{" "}
          <span className="text-sm text-[#FD5631]">Listings</span>
        </p>
        <div className="flex justify-between items-center">
          <h1 className="text-[#FD5631] md:text-[30px] font-semibold mt-5">
            <span className="text-black"> TOOLS IA - </span> {selectedCategory}
          </h1>
          <Link to="/" className="flex gap-1 mt-6  items-center md:mr-32 mr-2">
            <img className="w-[13px] h-[13px]" src={mapLogo} alt="" />
            <h1 className="text-red-600 font-semibold text-[14px]">
              Map View{" "}
            </h1>
          </Link>
        </div>
        <p className="md:text-lg italic mt-5">
          Explora, aprende y crea con las mejores herramientas de IA
        </p>
      </div>
      <div className="md:ml-2">
        <div className="flex flex-col sm:flex-row items-center justify-between p-4">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <FaSort className="text-gray-500" />
            <span className="text-gray-500 text-sm">Sort by:</span>
            <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              {
               subCategories?.map((item,index) => (
                  <option key={index} value={item.title}>{item.title}</option>
                ))
              }
              {/* <option value="subcategory">Subcategory</option>
              <option value="price">Price</option> 
              <option value="date">Date</option> */}
            </select>
          </div>
          <div className="flex items-center space-x-2 md:mr-28">
            <FaCheckCircle className="text-gray-500" />
            <span className="text-gray-500 text-sm">27 results</span>
          </div>
        </div>
      </div>

      {listing === "category" ? <Category></Category> : <Filter></Filter>}
    </div>
  );
};

export default Listing;
