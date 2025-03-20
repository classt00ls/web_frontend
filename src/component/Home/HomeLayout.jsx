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
                    />
                  </div>
                  <button 
                    className="bg-[#3c3c3e] text-white p-4 hover:bg-[#2c2c2e] transition-all duration-300 mr-1 my-1 rounded-lg shadow-md"
                    onClick={searchAction}
                    aria-label={t('home.search_button')}
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="tech-search-icon"
                    >
                      <defs>
                        <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="100%" stopColor="#e0e0e0" />
                        </linearGradient>
                        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="white" stopOpacity="0.2" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="1" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      
                      {/* Círculo principal de la lupa */}
                      <circle cx="10" cy="10" r="6" stroke="url(#techGradient)" strokeWidth="2" fill="none" />
                      
                      {/* Mango de la lupa */}
                      <path d="M14.5 14.5L19.5 19.5" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      
                      {/* Detalles tecnológicos - círculos concéntricos */}
                      <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="0.5" strokeDasharray="1 2" fill="none" />
                      <circle cx="10" cy="10" r="3" stroke="white" strokeWidth="0.5" strokeDasharray="3 1" fill="none" />
                      
                      {/* Detalles tech en el mango */}
                      <path d="M15 15L16 16" stroke="white" strokeWidth="0.5" />
                      <path d="M16 16L17 17" stroke="white" strokeWidth="0.5" />
                      <path d="M17 17L18 18" stroke="white" strokeWidth="0.5" />
                      
                      {/* Reflejo en el círculo */}
                      <path d="M10 7C10 7 7.5 8 7.5 10" stroke="url(#glowGradient)" strokeWidth="1" strokeLinecap="round" />
                      
                      {/* Puntos de detalle */}
                      <circle cx="10" cy="10" r="0.5" fill="white" />
                      <circle cx="19.5" cy="19.5" r="0.75" fill="white" filter="url(#glow)" />
                      
                      {/* Líneas de circuito */}
                      <path d="M5 10H3" stroke="white" strokeWidth="0.5" strokeLinecap="round" />
                      <path d="M10 5V3" stroke="white" strokeWidth="0.5" strokeLinecap="round" />
                      <path d="M10 17V15" stroke="white" strokeWidth="0.5" strokeLinecap="round" />
                      <path d="M17 10H15" stroke="white" strokeWidth="0.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2 px-2 font-light">
                  <span className="transition-colors duration-300 hover:text-gray-200">{t('home.search_button')}</span>
                  <span onClick={viewAllAction} style={{cursor: 'pointer'}} className="transition-colors duration-300 hover:text-white">
                    {t('home.view_all')}
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
