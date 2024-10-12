import { useContext, useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import { Link } from "react-router-dom";
import heart from "../../../assets/AI Icons/heart.svg";
import aiImage from "../../../assets/filter-image.png";
import { dataContext } from "../../../Context/Context";
import Loader from "../../Loader/Loader";
import "./filter.css";
import { tagContext } from "../../../Context/Providers/TagProvider";

const Filter = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { toolsData } =
    useContext(dataContext);

  const { categoriesData, selectedCategory } =
    useContext(tagContext);

  const { pagination } = toolsData;
  const [paginationHas, setPaginationHas] = useState(true);
  const [data, setData] = useState([]);
  // data object for ai tools

  useEffect(() => {
    if (selectedCategory) {
      const filteredData = toolsData?.tools?.filter(
        (tool) => tool.category === selectedCategory
      );
      setPaginationHas(false);

      setData(filteredData);
    } else {
      setPaginationHas(true);
      setData(toolsData.tools);
    }
  }, [selectedCategory, toolsData?.tools]);

  if (toolsData?.tools?.length < 1 || categoriesData?.length < 1) {
    return <Loader />;
  }
  if (!paginationHas && data?.length < 1) {
    return <Loader />;
  }

  const toolsPerPage = !paginationHas
    ? 12
    : pagination?.totalItems / pagination?.totalPages;
  const totalPages = Math.ceil(
    (!paginationHas ? data?.length : toolsData?.tools?.length) / toolsPerPage
  );
  
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
