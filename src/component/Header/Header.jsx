import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/src/assets/CLASSTOOLS_LOGOS_1111 1.png";
import SignInlogo from "/src/assets/Group 2.png";

const Header = () => {
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

  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {/* <li>
        <NavLink to={"/product"}>Product</NavLink>
      </li> */}
      <li>
        <NavLink to={"/tools"}>Tools</NavLink>
      </li>
      <li>
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
            {/* <li>
              <NavLink to={"/"}>Community-2</NavLink>
            </li> */}
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
            {/* <li>
              <NavLink to={"/"}>Blog-2</NavLink>
            </li> */}
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
            {/* <li>
              <NavLink to={"/"}>Advertise-2</NavLink>
            </li> */}
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#1F1B2D] text-white  ">
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
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img className="w-16  md:w-[150px] md:h-[45px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul tabIndex={0} className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end flex gap-5  md:mr-10">
          <Link to="/signIn" className=" flex gap-1 md:gap-[16px] items-center">
            <img
              className="w-[5px] h-[10px]  md:w-[8px]  md:h-[14px]"
              src={SignInlogo}
              alt=""
            />
            <p className="text-[#63EA32] text-[7px] md:text-[14px] font-semibold">
              Sign in
            </p>
          </Link>
          <Link
            to="/addTools"
            className="bg-[#3683B3] hover:bg-red-600 gap-2 flex items-center md:w-[135px] h-[37px] px-[10px] py-[18px] rounded-[30px]"
          >
            <p className="text-[8px] md:text-[18px] flex items-center font-bold">
              +
            </p>
            <p className="text-[10px] md:text-[16px] flex font-semibold items-center text">
              Add Tool AI
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
