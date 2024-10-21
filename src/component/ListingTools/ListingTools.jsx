import { useDispatch, useSelector } from "react-redux";
import Listing from "./Listing/Listing";
import Sidebar from "./Sidebar/Sidebar";

import "./listing-tools.css";
import { useEffect, useState } from "react";
import { ToolApi } from "../../api/ToolApi";

const ListingTools = () => {

  const dispatch = useDispatch();

  const [tools, setTools] = useState([]);
  const [loading, setLoading ] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const selectedCategories = useSelector(state => state.filters.selectedCategories);
  const textToSearch = useSelector(state => state.filters.textToSearch);
  const refreshTools = useSelector(state => state.changeState.refreshTools);
  const filters = useSelector(state => state.filters);

  useEffect(() => {
    (async () => {
      try {
        
        setLoading(true);
        const toolsData = await ToolApi.getFilteredlTool(1,12,filters);
        console.log("hallo ...................", toolsData) 
        setTools(toolsData.data);
        setTotalPages(Math.round(toolsData.count/12));
        setLoading(false);

      } catch (error) {

        dispatch({ type: 'set', errorMessage: error });
        dispatch({ type: 'set', showError: true });

      }
    })()
  }, []);

  useEffect(() => {
    (async () => {
      if(!refreshTools) return;
      try {
        setLoading(true);
        const toolsData = await ToolApi.getFilteredlTool(1,12,filters);
        setTools(toolsData.data);
        setTotalPages(Math.round(toolsData.count/12));
        setLoading(false);
        dispatch({ type: 'set', refreshTools: false });

      } catch (error) {

        dispatch({ type: 'set', errorMessage: error });
        dispatch({ type: 'set', showError: true });

      }
    })()
  }, [refreshTools]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const toolsData = await ToolApi.getFilteredlTool(currentPage,12,selectedCategories);
        setData(toolsData.data);     
        setTotalPages(Math.round(toolsData.count/12));
        setLoading(false);

      } catch (error) {

        dispatch({ type: 'set', errorMessage: error });
        dispatch({ type: 'set', showError: true });

      }
    })()
}, [currentPage])

  return (
    <div className="tools-container md:flex">
      <div className="p-5 border-r">
        <Sidebar></Sidebar>
      </div>
      <div>
        <Listing currentPage={currentPage} loading={loading} tools={tools} totalPages={totalPages} setCurrentPage={setCurrentPage}></Listing>
      </div>
    </div>
  );
};

export default ListingTools;
