import { FiSearch } from "react-icons/fi";
import backgroundImage from "../../assets/Rectangle 1.png";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserApi } from "../../api/UserApi";
import { useTranslation } from "react-i18next";
import { ToolApi } from "../../api/ToolApi";
import './searchIcon.css';

const HomeLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState(true);

  const filters = useSelector(state => state.filters);

  const noHomeHeader = location.pathname.includes("tools");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        await UserApi.meCall();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Failed to fetch categories");
        dispatch({ type: 'set', errorMessage: error });
        dispatch({ type: 'set', showError: true });
      }
    })()
  }, []);

  const searchAction = async () => {
    try {
      dispatch({ type: 'CHANGE_FILTERS', prompt: text });
      dispatch({ type: 'set', refreshTools: true });
      await ToolApi.getFilteredlTool(1, 12, filters, i18n.language);
      navigate("/tools");
    } catch (error) {
      dispatch({ type: 'set', errorMessage: error });
      dispatch({ type: 'set', showError: true });
    }
  };

  const handleHashtagClick = (hashtagText) => {
    setText(hashtagText);
    // No ejecutamos searchAction() para que el usuario tenga que pulsar Enter o el botón de buscar
  };

  const viewAllAction = async () => {
    try {
      dispatch({ type: 'set', refreshTools: true });
      await ToolApi.getFilteredlTool(1, 12, filters, i18n.language);
      navigate("/tools");
    } catch (error) {
      dispatch({ type: 'set', errorMessage: error });
      dispatch({ type: 'set', showError: true });
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div
        className={`relative h-[300px] bg-cover flex items-center justify-center`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative z-10 p-2 flex flex-col items-center justify-center h-full w-full max-w-4xl mx-auto">
          <div className="text-white text-center text-[20px] md:text-[30px] font-bold mb-8">
            <p>{t('home.main_title')}</p>
            <p className="text-red-600">{t('home.subtitle')}</p>
            <p className="text-[16px] md:w-[552px] mx-auto mt-2">
              {t('home.description')}
            </p>
          </div>

          {!noHomeHeader && (
            <div className="flex items-center justify-center w-full max-w-2xl mx-auto px-4">
              <div className="flex flex-col w-full">
                <div className="flex items-center bg-[#f0f0f2] border border-gray-200 shadow-[0_0_15px_rgba(0,0,0,0.08)] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.12)]">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      onChange={e => {setText(e.target.value)}}
                      className="w-full text-[16px] pl-5 pr-4 py-4 border-none focus:outline-none bg-[#f0f0f2] transition-colors duration-300"
                      placeholder={t('home.searcher_placeholder')}
                      onKeyPress={e => e.key === 'Enter' && searchAction()}
                      value={text === true ? "" : text}
                    />
                  </div>
                  <button 
                    className="search-button bg-[#3c3c3e] text-white p-4 hover:bg-[#2a2a40] transition-all duration-300 mr-1 my-1 rounded-lg shadow-md flex items-center justify-center border border-transparent hover:border-[#63EA32]"
                    onClick={searchAction}
                    aria-label={t('home.search_button')}
                  >
                    <FiSearch className="search-icon-main text-[26px] md:text-[30px]" />
                  </button>
                </div>
                
                <div className="flex justify-center mt-4 gap-4 text-white">
                  <span 
                    className="bg-[#3c3c3e] bg-opacity-80 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-opacity-100 transition-all duration-300"
                    onClick={() => handleHashtagClick("Generar informes de datos")}
                  >
                    #GenerarInformesDatos
                  </span>
                  <span 
                    className="bg-[#3c3c3e] bg-opacity-80 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-opacity-100 transition-all duration-300"
                    onClick={() => handleHashtagClick("Mejorar fotos personales")}
                  >
                    #MejorarFotosPersonales
                  </span>
                  <span 
                    className="bg-[#3c3c3e] bg-opacity-80 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-opacity-100 transition-all duration-300"
                    onClick={() => handleHashtagClick("Transcribir entrevistas")}
                  >
                    #TranscribirEntrevistas
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
