import React, { useContext, useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import heart from "../../../assets/AI Icons/heart.svg";
import heart_filled from "../../../assets/AI Icons/heart_filled.svg";
import bookmark from "../../../assets/Category/bookmark.png";
import share from "../../../assets/Category/share.png";
import card from "../../../assets/classtools_web_design/card_logo.png";
import star from "../../../assets/classtools_web_design/star_logo.png";
import { useTranslation } from "react-i18next";

import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";
import { ToolApi } from "../../../api/ToolApi";
import { UserApi } from "../../../api/UserApi";
import Tags from "../../Tags";
import { useDispatch, useSelector } from "react-redux";
import Tagify from "@yaireo/tagify";
import TagsPrompt from "../../TagsPrompt";
import { slugify } from "../../../utils/slugify";


var inputElem = document.getElementById('marmota') // the 'input' element which will be transformed into a Tagify component
var tagify = new Tagify(inputElem, {
  // A list of possible tags. This setting is optional if you want to allow
  // any possible tag to be added without suggesting any to the user.
  whitelist: ['foo', 'bar', 'and baz', 0, 1, 2]
})


const Category_section1 = ({}) => {

  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const filters = useSelector(state => state.filters);
  const user = useSelector(state => state.auth.user);

  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading ] = useState(true);

  const [initialLoad, setInitialLoad] = useState(true);

  const favorites = user?.favorites || [];
  let refreshTools = useSelector(state => {return state.changeState.refreshTools });

  let tools = useSelector(state => state.auth.tools.data);

  let totalPages = Math.ceil(useSelector(state => state.auth.tools.count)/12);

  const [paginationHas, setPaginationHas] = useState(true);

  console.log('FILTEEEEEEEERS: ',filters)
  
  useEffect(() => {
    (async () => {
      dispatch({ type: 'set', refreshTools: true });
    })()
  }, [currentPage]);

  useEffect(() => {
    if (!initialLoad) {
      (async () => {
        setLoading(true);
        await ToolApi.getFilteredlTool(currentPage, 12, filters, i18n.language);
        setLoading(false);
      })();
    }
  }, [i18n.language]);

  useEffect(() => { 
    (async () => {
        setLoading(true);
        
        if(refreshTools) {
          console.log('llamamos a search tools desde category');
          await ToolApi.getFilteredlTool(currentPage, 12, filters, i18n.language);
          dispatch({ type: 'set', refreshTools: false });
        }
        setLoading(false);
        setInitialLoad(false);
    })()
  }, [refreshTools]);

  const toggleFavorite = async (toolId) => {

    await ToolApi.toggleFavorite(toolId);

    await UserApi.meCall();
    
  };

  const truncateExcerpt = (text) => {
    if (!text) return '';
    return text.length > 250 ? text.substring(0, 250) + '...' : text;
  };

  if (loading) { return <Loader />;  }

  const toolsPerPage = 12;

  return (
    <div className=" bg-none">
      <Tags />
      <TagsPrompt />
      <div className="flex flex-wrap gap-8 p-5">
        
        {paginationHas && tools && tools.length > 0 &&
          tools.map((tool) => tool && (
            
              <div
                key={tool.id}
                className="bg-gray-100 w-[316px] p-5 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${tool?.url.split('/?')[0]}&sz=256 `}
                      alt={tool?.name}
                      className="w-[72px] h-[72px] rounded-lg"
                    />
                    <Link to={`/tool/${slugify(tool.name)}`} className="hover:text-orange-500 transition-colors" target="_blank" rel="noopener noreferrer">
                      <h1 className="font-bold text-black text-[24px] px-4">
                        {tool?.name}
                      </h1>
                    </Link>
                  </div>
                  {user && (
                    <img
                      src={favorites.includes(tool.id) ? heart_filled : heart}
                      alt="icon"
                      className="w-[40px] h-[40px] mt-[-30px] cursor-pointer hover:scale-110 transition-transform duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(tool.id);
                      }}
                    />
                  )}
                </div>

                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={star} alt="review-icon" className="h-4 w-4" />
                      <span className="ml-2 text-[13px] text-gray-700">
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
                        100
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <p className="mt-2 text-gray-700 text-[13px] py-2 border-t border-b border-gray-300 font-montserrat">
                      {truncateExcerpt(tool?.excerpt)}
                    </p>
                    {tool?.excerpt?.length > 250 && (
                      <Link 
                        to={`/tool/${slugify(tool.name)}`}
                        className="text-orange-500 text-[12px] mt-1 font-montserrat hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mostrar más
                      </Link>
                    )}
                  </div>

                  <ul className="mt-2 text-gray-700 text-[10px] space-y-1">
                    {tool?.tags.map((item, index) => (
                      <li key={item.id}>#{item.name}</li>
                    ))}
                  </ul>

                  <div className="flex justify-end mt-[-25px]">
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      <img src={share} alt="share-icon" className="w-6 h-6" />
                    </a>
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
                    <Link to={`/tool/${slugify(tool.name)}`} className="hover:text-orange-500 transition-colors" target="_blank" rel="noopener noreferrer">
                      <h1 className="font-bold text-black text-[24px] px-4">
                        {tool?.name}
                      </h1>
                    </Link>
                  </div>
                  {user && (
                    <img
                      src={favorites.includes(tool.id) ? heart_filled : heart}
                      alt="icon"
                      className="w-[40px] h-[40px] mt-[-30px] cursor-pointer hover:scale-110 transition-transform duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(tool.id);
                      }}
                    />
                  )}
                </div>

                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={star} alt="review-icon" className="h-4 w-4" />
                      <span className="ml-2 text-[13px] text-gray-700">
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

                  <div className="flex flex-col">
                    <p className="mt-2 text-gray-700 text-[13px] py-2 border-t border-b border-gray-300 font-montserrat">
                      {truncateExcerpt(tool?.excerpt)}
                    </p>
                    {tool?.excerpt?.length > 250 && (
                      <Link 
                        to={`/tool/${slugify(tool.name)}`}
                        className="text-orange-500 text-[12px] mt-1 font-montserrat hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mostrar más
                      </Link>
                    )}
                  </div>

                  <ul className="mt-2 text-gray-700  text-[10px] space-y-1">
                    {tool?.tags?.map((item, index) => (
                      <li key={index}>#{item}</li>
                    ))}
                  </ul>

                  <div className="flex justify-end  mt-[-25px] ">
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      <img src={share} alt="share-icon" className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div className="mt-10 mb-10 ml-5 ">

        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
          previousLabel={"<"}
          nextLabel={">"}
          maxWidth={500}
          previousClassName="w-[34px] h-[34px] mr-10 md:mr-28 rounded-full shadow !bg-[#2a2a40] flex text-center items-center justify-center absolute right-10 border border-[#63EA32] hover:shadow-[0_0_8px_rgba(99,234,50,0.6)] transition-all duration-300"
          nextClassName="w-[34px] h-[34px] mr-10 md:mr-28 rounded-full shadow !bg-[#2a2a40] flex text-center items-center justify-center absolute right-0 border border-[#63EA32] hover:shadow-[0_0_8px_rgba(99,234,50,0.6)] transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Category_section1;
