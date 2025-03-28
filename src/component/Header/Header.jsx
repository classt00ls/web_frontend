import React, { useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "/src/assets/CLASSTOOLS_LOGOS_1111 1.png";
import SignInlogo from "/src/assets/Group 2.png";
import { useSelector, useDispatch } from "react-redux";
import LanguageSelector from "../UI/LanguageSelector/LanguageSelector";
import { ToolApi } from "../../api/ToolApi";
import { FaUserCircle, FaRocket } from "react-icons/fa";
import './Header.css';

// URL del dashboard - Usar variable de entorno o fallback a localhost:3001
const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL || 'https://discover-dashboard-n519wk4y4-classtools-projects.vercel.app';

const Header = () => {
  const { t, i18n } = useTranslation();
  const token = localStorage.getItem('access_token');
  const user = useSelector((state) => state.auth.user);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Generar URL del dashboard con token como parámetro GET 
  const getDashboardUrl = () => {
    // Usar la variable token que ya está definida
    // Construir URL con el token como parámetro GET
    const separator = DASHBOARD_URL.includes('?') ? '&' : '?';
    return `${DASHBOARD_URL}${separator}token=${token || ''}`;
  };

  const dropdownRefs = {
    explorer: useRef(null),
    community: useRef(null),
    blog: useRef(null),
    advertise: useRef(null),
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      Object.keys(dropdownRefs).forEach((key) => { 
        if (
          dropdownRefs[key].current &&
          !dropdownRefs[key].current.contains(event.target)
        ) {
          dropdownRefs[key].current.removeAttribute("open");
        }
      });
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleSummaryClick = (event, name) => {
    event.preventDefault();

    Object.keys(dropdownRefs).forEach((key) => {
      if (key !== name && dropdownRefs[key].current) {
        dropdownRefs[key].current.removeAttribute("open");
      }
    });

    const dropdown = dropdownRefs[name].current;
    if (dropdown.getAttribute("open") === null) {
      dropdown.setAttribute("open", "");
    } else {
      dropdown.removeAttribute("open");
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

  const navItems = (
    <>
      {/* <li>
        <NavLink to={"/"}>Home</NavLink>
      </li> */}
      {/* <li>
        <NavLink to={"/product"}>Product</NavLink>
      </li> */}
      {/* <li>
        <NavLink to={"/tools"}>Tools</NavLink>
      </li> */}
      {/* <li>
        <details ref={dropdownRefs.explorer}>
          <summary onClick={(e) => handleSummaryClick(e, "explorer")}>
            Explorer
          </summary>
          <ul className="p-2 z-20 text-black w-40">
            <li>
              <NavLink to={"/tools"}>Explorer-1</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Explorer-2</NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details ref={dropdownRefs.community}>
          <summary onClick={(e) => handleSummaryClick(e, "community")}>
            Community
          </summary>
          <ul className="p-2 z-20 text-black w-40">
            <li>
              <NavLink to={"/community"}>Community</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Community-2</NavLink>
            </li> 
          </ul>
        </details>
      </li>
      <li>
        <details ref={dropdownRefs.blog}>
          <summary onClick={(e) => handleSummaryClick(e, "blog")}>Blog</summary>
          <ul className="p-2 z-20 text-black w-40">
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Blog-2</NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details ref={dropdownRefs.advertise}>
          <summary onClick={(e) => handleSummaryClick(e, "advertise")}>
            Advertise
          </summary>
          <ul className="p-2 z-20 text-black w-40">
            <li>
              <NavLink to={"/advertise"}>Advertise</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Advertise-2</NavLink>
            </li>
          </ul>
        </details>
      </li> */}
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#1F1B2D] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black bg-blue-500 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {navItems}
              <li className="mt-2">
                <button 
                  onClick={viewAllAction}
                  className="login-button flex gap-1 items-center bg-transparent hover:bg-[#2a2a40] px-3 py-2 rounded-full transition-all duration-300 border border-transparent hover:border-[#63EA32] group w-full justify-center"
                >
                  <FaRocket className="text-[#63EA32] text-[18px] transition-all duration-300 group-hover:text-[20px] filter drop-shadow-md group-hover:drop-shadow-glow" />
                  <p className="text-[#63EA32] text-[13px] font-semibold group-hover:font-bold transition-all duration-300">
                    {t('home.view_all')}
                  </p>
                </button>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img className="w-16 md:w-[150px] md:h-[45px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex items-center">
          <ul tabIndex={0} className="menu menu-horizontal px-1">
            {navItems}
          </ul>
          <button 
            onClick={viewAllAction} 
            className="login-button flex gap-1 md:gap-[8px] items-center bg-transparent hover:bg-[#2a2a40] px-3 py-2 rounded-full transition-all duration-300 border border-transparent hover:border-[#63EA32] group ml-3"
          >
            <FaRocket className="text-[#63EA32] text-[18px] md:text-[20px] transition-all duration-300 group-hover:text-[20px] md:group-hover:text-[22px] filter drop-shadow-md group-hover:drop-shadow-glow" />
            <p className="text-[#63EA32] text-[12px] md:text-[14px] font-semibold group-hover:font-bold transition-all duration-300">
              {t('home.view_all')}
            </p>
          </button>
        </div>
        <div className="navbar-end flex items-center gap-5 md:mr-10">
          <LanguageSelector />
          {user ? (
            <a
              href={getDashboardUrl()}
              className="bg-[#3683B3] hover:bg-red-600 gap-1 flex justify-center md:w-[135px] h-[37px] px-[10px] py-[18px] rounded-[30px]"
            >
              <p className="text-[10px] md:text-[16px] flex font-semibold items-center text">
                {t('header.discover')}
              </p>
            </a>
          ) : (
            <Link to="/signIn" className="login-button flex gap-1 md:gap-[8px] items-center bg-transparent hover:bg-[#2a2a40] px-3 py-2 rounded-full transition-all duration-300 border border-transparent hover:border-[#63EA32] group">
              <FaUserCircle className="text-[#63EA32] text-[20px] md:text-[24px] transition-all duration-300 group-hover:text-[22px] md:group-hover:text-[26px] filter drop-shadow-md group-hover:drop-shadow-glow" />
              <p className="text-[#63EA32] text-[10px] md:text-[14px] font-semibold group-hover:font-bold transition-all duration-300">
                {t('header.sign_in')}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
