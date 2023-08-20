import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Header-style.css";

import { HiSearch } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import Banner from "./Banner";

const Header = () => {
  // const location = useLocation();
  return (
    <>
      <header>
        <div className="w-10/12 mx-auto py-[15px]">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <img
                src="https://vertel.com.au/assets/images/vertel-logo-rbg.svg"
                alt="logo"
              />
            </NavLink>
            <NavLink to="/">
              <img
                src="https://vertel.com.au/assets/images/building-connections.svg"
                alt="logo"
              />
            </NavLink>
          </div>
        </div>
        <nav>
          <div className="w-10/12 mx-auto flex gap-5 py-2 xs:flex-col md:flex-row">
            <ul className="flex flex-1">
              <li>
                <NavLink to="/" ClassName="activeMenu active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" ClassName="activeMenu">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/industries " ClassName="activeMenu">
                  Industries{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/partner" ClassName="activeMenu">
                  {" "}
                  Partner{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/resources" ClassName="activeMenu">
                  {" "}
                  Resources{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" ClassName="activeMenu">
                  {" "}
                  About{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" ClassName="activeMenu">
                  {" "}
                  Contact{" "}
                </NavLink>
              </li>
            </ul>
            <div className="menu_search flex gap-5 items-center">
              <i className="rounded-full">                
                <HiSearch/>
              </i>
              
              <NavLink target="_blank" className="cp_link px-3 py-2 rounded-full" to="https://cp.vertel.com.au/">                
                Customer Portal
              </NavLink>
              <i className="rounded-full">
                <FiPhoneCall/>
              </i>
            </div>
          </div>
        </nav>
      </header>
      <Banner/>
    </>
  );
};

export default Header;
