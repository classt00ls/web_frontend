import React, { useContext, useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import heart from "../../../assets/AI Icons/heart.png";
import bookmark from "../../../assets/Category/bookmark.png";
import share from "../../../assets/Category/share.png";
import card from "../../../assets/classtools_web_design/card_logo.png";
import star from "../../../assets/classtools_web_design/star_logo.png";

import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Category_section1 = ({currentPage,loading,tools,totalPages, setCurrentPage}) => {

  const [paginationHas, setPaginationHas] = useState(true);
  

  if (loading) { return <Loader />;  }

  const toolsPerPage = 12;

  return (
    <div className=" bg-none">
      <div className="flex flex-wrap gap-8 p-5">
        {paginationHas &&
          tools?.map((tool) => (
            
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
                        {tool?.stars} ({tool?.stars} Reviews)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img src={card} alt="type-icon" className="h-4 w-4" />
                      <span className="ml-2 text-[13px] text-gray-700">
                        {tool?.pricing}
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
                    <Link to={`/product/${tool.id}`}>
                      <img src={share} alt="share-icon" className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        {!paginationHas && tools
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
