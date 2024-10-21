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
  const refreshTools = useSelector(state => state.changeState.refreshTools);
  const [ loading, setLoading ] = useState(true);
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
          data?.slice(
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
              <div
                key={tool?.id}
                className="bg-gray-100 w-[316px] p-5 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={tool?.url.split('/?')[0]}
                      alt={tool?.name}
                      className="w-[72px] h-[72px] rounded-lg"
                    />
                    <h1 className="font-bold text-black text-[24px] px-4 ">
                      {tool?.name}
                    </h1>
                  </div>
                  <img
                    src={heart}
                    alt="icon"
                    className="w-[40px] h-[40px] mt-[-30px]"
                  />
                </div>

                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={star} alt="review-icon" className="h-4 w-4" />
                      <span className="ml-2  text-[13px] text-gray-700">
                        {tool?.stars} ({tool?.stars} 0 Reviews)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img src={card} alt="type-icon" className="h-4 w-4" />
                      <span className="ml-2 text-[13px] text-gray-700">
                        {tool?.price}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={bookmark}
                        alt="bookmark-icon"
                        className="h-4 w-4"
                      />
                      <span className="ml-2 text-[13px] text-red-600">
                        {/* {tool?.totalBookmarked} */}
                        100
                      </span>
                    </div>
                  </div>

                  <p className="mt-2 text-gray-700 text-[10px] py-2 border-t border-b border-gray-300 font-lekton">
                    {tool?.excerpt}
                  </p>

                  <ul className="mt-2 text-gray-700  text-[10px] space-y-1">
                    {tool?.tags.map((item, index) => (
                      <li key={index}>#{item}</li>
                    ))}
                  </ul>

                  <div className="flex justify-end  mt-[-25px] ">
                    <Link to={`/product/${tool.id}`}>
                      <img src={share} alt="share-icon" className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
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
