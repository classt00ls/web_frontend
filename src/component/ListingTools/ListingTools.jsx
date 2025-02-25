import { useDispatch, useSelector } from "react-redux";
import Listing from "./Listing/Listing";
import Sidebar from "./Sidebar/Sidebar";

import "./listing-tools.css";
import { useEffect, useState } from "react";
import { ToolApi } from "../../api/ToolApi";

const ListingTools = () => {

  const dispatch = useDispatch();

  const [loading, setLoading ] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  
  let totalPages = Math.ceil(useSelector(state => state.auth.tools.count)/12);
  let tools = useSelector(state => state.auth.tools.data);
  const selectedCategories = useSelector(state => state.filters.selectedCategories);
  const textToSearch = useSelector(state => state.filters.title);
  const refreshTools = useSelector(state => state.changeState.refreshTools);
  const filters = useSelector(state => state.filters);

  useEffect(() => {
    (async () => {
      try {
        setLoading(false);
        dispatch({ type: 'set', refreshTools: (tools?.length == 0) });
        console.log('hasemo refresh: ', (tools?.length))
        setCurrentPage(1);

      } catch (error) {
        console.log('hasemo error: ', error)
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
        setCurrentPage(1);
        const toolsData = await ToolApi.getFilteredlTool(currentPage,12,filters);
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
        console.log(' ---------- currentPage cambiado: ', currentPage);
        setLoading(true);
        const toolsData = await ToolApi.getFilteredlTool(currentPage,12,filters);
        setLoading(false);
    })()
  }, [currentPage]);

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
