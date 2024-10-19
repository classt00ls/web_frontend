import { useContext, useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import { Link } from "react-router-dom";
import heart from "../../../assets/AI Icons/heart.svg";
import aiImage from "../../../assets/filter-image.png";
import { dataContext } from "../../../Context/Context";
import Loader from "../../Loader/Loader";
import "./filter.css";
import { useSelector } from "react-redux";
import { ToolApi } from "../../../api/ToolApi";

const Filter = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const { toolsData } = useContext(dataContext);

  const selectedCategories = useSelector(state => state.filters.selectedCategories);


  const { pagination } = toolsData;
  const [paginationHas, setPaginationHas] = useState(true);
  const [data, setData] = useState([]);
  // data object for ai tools

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const toolsData = await ToolApi.getFilteredlTool(currentPage,12,selectedCategories);
        setData(toolsData.data);
        
        setTotalPages(Math.round(toolsData.count/12));
        setReload(false);
        setLoading(false);

      } catch (error) {

        dispatch({ type: 'set', errorMessage: error });
        dispatch({ type: 'set', showError: true });

      }
    })()
}, [currentPage])

useEffect(() => {
  (async () => {
    if(!refreshTools) return;
    try {
      setLoading(true);
      const toolsData = await ToolApi.getFilteredlTool(1,12,filters);
      setData(toolsData.data);
      setTotalPages(Math.round(toolsData.count/12));
      setReload(false);
      setLoading(false);
      dispatch({ type: 'set', refreshTools: false });

    } catch (error) {

      dispatch({ type: 'set', errorMessage: error });
      dispatch({ type: 'set', showError: true });

    }
  })()
}, [refreshTools]);

if (loading) {
  return <Loader />;
}

const toolsPerPage = 12;

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-[29px]">
        {paginationHas &&
          toolsData?.tools
            ?.slice(
              (currentPage - 1) * toolsPerPage,
              currentPage * toolsPerPage
            )
            .map((tool) => (
              <Link to={tool.link} key={tool.id}>
                <div className="relative rounded-lg">
                  <img src={aiImage} alt={tool.name} className="" />
                  <img
                    src={heart}
                    alt="icon"
                    className="absolute top-2 right-2"
                  />
                </div>
                <h2 className="font-semibold text-[18px] mt-5">{tool.title}</h2>
              </Link>
            ))}
        {!paginationHas &&
          data
            ?.slice(
              (currentPage - 1) * toolsPerPage,
              currentPage * toolsPerPage
            )
            .map((tool) => (
              <Link to={tool.link} key={tool.id}>
                <div className="relative rounded-lg">
                  <img src={aiImage} alt={tool.name} className="" />
                  <img
                    src={heart}
                    alt="icon"
                    className="absolute top-2 right-2"
                  />
                </div>
                <h2 className="font-semibold text-[18px] mt-5">{tool.title}</h2>
              </Link>
            ))}
      </div>

      <div className="  mt-10">
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
          previousLabel={"<"}
          nextLabel={">"}
          previousClassName="w-[34px] h-[34px] mr-10 md:mr-28 rounded-full shadow !bg-white flex text-center items-center justify-center absolute right-10 "
          nextClassName="w-[34px] h-[34px] mr-10 md:mr-28 rounded-full shadow !bg-white flex text-center items-center justify-center absolute right-0  !text-black"
        />
      </div>
    </div>
  );
};

export default Filter;
