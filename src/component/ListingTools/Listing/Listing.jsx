import { useContext } from "react";
import { dataContext } from "../../../Context/Context";
import Loader from "../../Loader/Loader";
import Filter from "../Filter/Filter";
import Category_section1 from "../Category/Category_section1";

const Listing = ({currentPage,loading,tools,totalPages, setCurrentPage}) => {
  const { listing } = useContext(dataContext);
  
  const { categoriesData, selectedCategory, subCategories } = useContext(dataContext);

  if (categoriesData?.length < 1  || subCategories?.length < 1) {
    return <Loader />;
  }
  
  // console.log(subCategories.map((item) => item.title));
  
  
  return (
    <div className="ml-10 mr-10 bg-none ">
      <div className="md:ml-6">
        <div className="flex justify-between items-center">
          
          {/* <Link to="/" className="flex gap-1 mt-6  items-center md:mr-32 mr-2">
            <img className="w-[13px] h-[13px]" src={mapLogo} alt="" />
            <h1 className="text-red-600 font-semibold text-[14px]">
              Map View{" "}
            </h1>
          </Link> */}

        </div>
      </div>
      <div className="md:ml-2">
        <div className="flex flex-col sm:flex-row items-center justify-between p-2">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            {/* <FaSort className="text-gray-500" />
            <span className="text-gray-500 text-sm">Sort by:</span> 
            <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              {
               subCategories?.map((item,index) => (
                  <option key={index} value={item.title}>{item.title}</option>
                ))
              }
               <option value="subcategory">Subcategory</option>
              <option value="price">Price</option> 
              <option value="date">Date</option> 
            </select>
            */}
          </div>
          {/* <div className="flex items-center space-x-2 md:mr-28">
            <FaCheckCircle className="text-gray-500" />
            <span className="text-gray-500 text-sm">27 results</span>
          </div> */}
        </div>
      </div>

      {listing === "category" ? <Category_section1 setCurrentPage={setCurrentPage} currentPage={currentPage} loading={loading} tools={tools} totalPages={totalPages} /> : <Filter></Filter>}
    </div>
  );
};

export default Listing;
