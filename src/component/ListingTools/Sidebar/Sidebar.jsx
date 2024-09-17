import { useContext,useEffect,useState } from "react";
import { FaStar } from "react-icons/fa";
import reset from "../../../assets/AI Icons/reset.svg";
import search from "../../../assets/search.svg";
import { dataContext } from "../../../Context/Context";
import ReactSelect from "../../UI/ReactSelect/ReactSelect";
import SidebarCategory from "../Sidebar/SIdebarCategory";
import CheckList from "./CheckList/CheckList";

import cat_icon from '../../../assets/AI Icons/cat_icon.svg';
import cat_icon2 from '../../../assets/AI Icons/cat_icon2.svg';
import filter_icon from '../../../assets/AI Icons/filter_icon.svg';
import filter_icon_1 from '../../../assets/AI Icons/filter_icon_1.svg';
import Loader from "../../Loader/Loader";
import "./Sidebar.css";

const Sidebar = () => {
  const { listing,setListing } = useContext(dataContext);
  const { categoriesData,setCategoriesData,selectedCategory,setSelectedCategory, subCategories } = useContext(dataContext);
  console.log(categoriesData);
  const [options,setOptions] = useState([]);

  
  const [selectCat,setSelectCat] = useState("");
  const [subOptions,setSubOptions] = useState([]);

  
  

  
  const verified = [
    {
      id: 1,
      value: "",
      label: "Select",
    },
    {
      id: 2,
      value: "FREE",
      label: "Free",
    },
    {
      id: 3,
      value: "PAID",
      label: "Paid",
    },
  ];
  const toolType = {
    title: "Tool type",
    items: [
      { title: "Histories" },
      { title: "Books" },
      { title: "Magazines" },
      { title: "Films" },
      { title: "Music" },
      { title: "Games" },
    ],
  };

  const precios = {
    title: "Precios",
    items: [
      { title: "Histories" },
      { title: "Books" },
      { title: "Magazines" },
      { title: "Films" },
      { title: "Music" },
      { title: "Games" },
    ],
  };

  const Características = {
    title: "Características",
    items: [
      { title: "Histories" },
      { title: "Books" },
      { title: "Magazines" },
      { title: "Films" },
      { title: "Music" },
      { title: "Games" },
    ],
  };
  const SubCategories = [
    {
      id: 1,
      value: "",
      label: "All Subcategories",
    },
    {
      id: 2,
      value: "FREE",
      label: "Free",
    },
    {
      id: 3,
      value: "PAID",
      label: "Paid",
    },
  ];

  const [verifieds,setVerifieds] = useState(verified);

console.log(categoriesData);



  useEffect(() => {  
    if (categoriesData?.length > 0) {
      
      const values = 
        categoriesData?.map((category) => {
          return {
            id: category.id,
            value: category.title,
            label: category.title,
          };
        }
        )
      
      setOptions(values);
      console.log(options);
      
    }
    if (subCategories?.length > 0) {
      
      const values = 
        subCategories?.map((category) => {
          return {
            id: category.id,
            value: category.title,
            label: category.title,
          };
        }
        )
      
      setSubOptions(values);
        console.log(subOptions);
        
      
    }
    console.log(subOptions);
    

  },[categoriesData, subCategories])

  useEffect(() => {
    if (selectCat) {
      const filteredData = categoriesData?.filter(tool => tool.id === selectCat);
      setSelectedCategory(filteredData[0]?.title);
    }
    
  },[categoriesData, selectCat, setSelectedCategory])
  
  console.log(selectCat);
  



    if (categoriesData.length < 1) {
    return <Loader />;
    
  }



  

  
  return (
    <div className="w-[300px]">
      <div className="flex items-center">
        <img src={search} alt="search" className="absolute left-10" />
        <input
          type="search"
          placeholder="Search..."
          className="border-[rgba(0, 0, 0, 0.1)] border w-[300px] rounded-full p-5 pl-12"
        />
        <button className="bg-orange-500 text-[14px]  text-white px-[20px] py-[10px] rounded-full hover:bg-orange-600 -m-[90px] h-fit">
          Search
        </button>
      </div>
      <hr className="mt-5" />
      <div className="flex gap-2 justify-center items-center text-gray-500 py-5">
        <button
          className={`py-1 ${
            listing == "category"
              ? "text-orange-500 bg-white"
              : " text-gray-500 bg-gray-100"
          } px-5 shadow-lg rounded-full flex items-center gap-3`}
          onClick={() => setListing("category")}
        >
          <img src={listing == "category"?cat_icon2:cat_icon} alt="" />
          Category
        </button>
        <button
          className={`py-1 text-base px-5 shadow-lg flex gap-3 items-center rounded-full  ${
            listing == "filter"
              ? "text-orange-500 bg-white"
              : " text-gray-500 bg-gray-100"
          }`}
          onClick={() => setListing("filter")}
        >
          <img src={ listing == "filter"?filter_icon:filter_icon_1} alt="" />
          filter
        </button>
      </div>
      <hr className="mt-2" />
      {listing == "filter" && (
        <>
          <div className="border-t border-b border-gray-200 ">
            <h3 className="text-[17px] font-semibold my-5">Category</h3>
            <ReactSelect
              options={options}
              setSelectItem={setSelectCat}
              page={"toos"}
              defaultValue={options[0]}
              radius={window.innerWidth <= 600 ? 50 : 0}
              width={window.innerWidth <= 767 ? 270 : 0}
            />
          </div>
          <div className="border-t border-b border-gray-200 mt-5">
            <h3 className="text-[17px] font-semibold my-5">Subcategory</h3>
            <ReactSelect
              options={subOptions}
              setSelectItem={setOptions}
              page={"toos"}
              defaultValue={subOptions[0]}
              radius={window.innerWidth <= 600 ? 50 : 0}
              width={window.innerWidth <= 767 ? 270 : 0}
            />
          </div>
          <div className="border-t border-b border-gray-200 mt-5">
            <h3 className="text-[17px] font-semibold my-5">Verificado</h3>
            <ReactSelect
              options={verifieds}
              setSelectItem={setOptions}
              page={"toos"}
              defaultValue={verifieds[0]}
              radius={window.innerWidth <= 600 ? 50 : 0}
              width={window.innerWidth <= 767 ? 270 : 0}
            />
          </div>
          <div className="border-t border-b border-gray-200 my-5">
            <h3 className="text-[17px] font-semibold my-5">Review</h3>
            <ul className="flex gap-7 pb-2 items-center">
              <li className="border rounded-full px-2 text-center">1</li>
              <li>
                <FaStar className="text-[#FDBC31]" />
              </li>
              <li>
                <FaStar className="text-[#FDBC31]" />
              </li>
              <li>
                <FaStar className="text-[#FDBC31]" />
              </li>
              <li>
                <FaStar className="text-[#FDBC31]" />
              </li>
              <li className="flex items-center border rounded-full px-2 gap-2">
                5 <FaStar className="text-[#FDBC31]" />
              </li>
            </ul>
            <input
              type="range"
              min={0}
              max="100"
              value="40"
              className=" w-[280px]  accent-[#FD5631] bg-red-500 "
            />
          </div>

          <CheckList lists={toolType} />
          <CheckList lists={precios} />
          <CheckList lists={Características} />
          <div className="flex gap-2 pt-10 border-t">
            <button
              className={`py-2 text-base px-5  rounded-full text-orange-600 bg-white border border-orange-600 font-medium`}
            >
              Filter
            </button>
            <button
              className={`py-2 text-base px-5  rounded-full text-orange-600 bg-white border border-orange-600 flex items-center gap-2 font-medium`}
            >
              <img src={reset} alt="" /> Reset Filter
            </button>
          </div>
        </>
      )}
      {listing === "category" && (
        <SidebarCategory></SidebarCategory>
      ) }
    </div>
  );
};

export default Sidebar;
