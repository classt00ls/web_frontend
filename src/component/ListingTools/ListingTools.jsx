import { useDispatch, useSelector } from "react-redux";
import Listing from "./Listing/Listing";
import Sidebar from "./Sidebar/Sidebar";

import "./listing-tools.css";
import { useEffect, useState } from "react";
import { ToolApi } from "../../api/ToolApi";

const ListingTools = () => {

  const dispatch = useDispatch();


  
  const selectedCategories = useSelector(state => state.filters.selectedCategories);
  const textToSearch = useSelector(state => state.filters.title);
  const refreshTools = useSelector(state => state.changeState.refreshTools);
  const filters = useSelector(state => state.filters);

  return (
    <div className="tools-container md:flex">
      <div className="p-5 border-r">
        <Sidebar></Sidebar>
      </div>
      <div>
        <Listing></Listing>
      </div>
    </div>
  );
};

export default ListingTools;
