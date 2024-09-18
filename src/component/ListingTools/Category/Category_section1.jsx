import React, { useContext, useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import heart from "../../../assets/AI Icons/heart.png";
import bookmark from "../../../assets/Category/bookmark.png";
import share from "../../../assets/Category/share.png";
import card from "../../../assets/classtools_web_design/card_logo.png";
import star from "../../../assets/classtools_web_design/star_logo.png";
import { dataContext } from "../../../Context/Context";

import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";
import { ToolApi } from "../../../api/ToolApi";
import { useDispatch } from "react-redux";

const Category_section1 = () => {

  const dispatch = useDispatch();

  const { toolsData, selectedCategory, setSelectedCategory } =
    useContext(dataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const { pagination } = toolsData;
  const [paginationHas, setPaginationHas] = useState(true);
  const [ loading, setLoading ] = useState(true);
  const [reload, setReload] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    if(reload) {
      (async () => {
        try {

          const toolsData = await ToolApi.getAllTools(1,5);
          setData(toolsData);
          setReload(false);
          setLoading(false);

        } catch (error) {

          dispatch({ type: 'set', errorMessage: error });
          dispatch({ type: 'set', showError: true });

        }
      })()
    }
  }, [reload])

  /*
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

  */

  if (loading) {
    return <Loader />;
  }

  const toolsPerPage = !paginationHas
    ? 12
    : pagination?.totalItems / pagination?.totalPages;
  const totalPages = Math.ceil(
    (!paginationHas ? data?.length : toolsData?.tools?.length) / toolsPerPage
  );

  console.log("LA DATA ............. ", data);
  // console.log(data?.tools?.map((tool) => tool));
  // slice((currentPage - 1) * toolsPerPage, currentPage * toolsPerPage)

  return (
    <div className=" bg-white">
      <div className="flex flex-wrap gap-8 p-5">
        {paginationHas &&
          data?.map((tool) => (
            
              <div
                key={tool?.id}
                className="bg-gray-100 w-[316px] p-5 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${tool?.url.split('/?')[0]}&sz=256 `}
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
                        {/*{tool?.stars} ({tool?.stars} Reviews)*/}
                        5(5 Reviews)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img src={card} alt="type-icon" className="h-4 w-4" />
                      <span className="ml-2 text-[13px] text-gray-700">
                         price {/* {tool?.price} */}
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
                      <li key={item.id}>#{item.name}</li>
                    ))}
                  </ul>

                  <div className="flex justify-end  mt-[-25px] ">
                    <Link to={"/product"}>
                      <img src={share} alt="share-icon" className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
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
                        {/*{tool?.stars} ({tool?.stars} Reviews)*/}
                        5(5 Reviews)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img src={card} alt="type-icon" className="h-4 w-4" />
                      <span className="ml-2 text-[13px] text-gray-700">
                        price {/* {tool?.price} */}
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
                    <Link to={"/product"}>
                      <img src={share} alt="share-icon" className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div className="mt-10 ml-5 ">
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

export default Category_section1;
