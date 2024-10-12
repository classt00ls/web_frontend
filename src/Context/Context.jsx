
import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../utils";
import { TagApi } from "../api/TagApi";
import { ToolApi } from "../api/ToolApi";

export const dataContext = React.createContext();

const Context = ({ children }) => {
  const [state, setState] = useState("data");

  const [listing,setListing] = useState("category");
  const [categoriesData,setCategoriesData] = useState([]);
  const [toolsData,setToolsData] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState([]);
  
  const [subCategories, setSubCategories] = useState([]);
  const [tools, setTools] = useState([]);


  useEffect(() => {
    //fetch data from tools.json
    fetch(base_url)
      .then((response) => response.json())
      .then((data) => {

        setToolsData(data);
      }
    )
    .catch((error) => {
      console.error('api error:',error);
    });
  },[]);

  
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TagApi.getAllCategories();
        setCategoriesData(response);
      } catch (err) {
        console.log("Failed to fetch categories");
      }
    };
    fetchData();
   },[]);
  
  useEffect(() => {
    if (selectedCategory && categoriesData) {
      const filteredData = categoriesData?.filter(tool => tool.title === selectedCategory);
      setSubCategories(filteredData[0]?.subcategories);
      
    }
  },[categoriesData])


  useEffect(() => {
    console.log("===============*****===============" , selectedCategory)
  }, [`${selectedCategory}`])

  const value = {
    listing,
    setListing,
    toolsData,
    categoriesData,
    selectedCategory,
    setSelectedCategory,
    subCategories
  };
  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export default Context;
