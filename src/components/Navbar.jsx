import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Routes from "../router/Routes";
import { AuthContext } from "../context";
import logo from '../Assets/logo.svg'

export default function Navbar() {
  const location = useLocation();
  const { token } = useContext(AuthContext);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolling ? "bg-white" : "bg-transparent"
      } border-gray-200 px-4 transition-all duration-300`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-7">
        {/* Left section */}
        <div className="flex items-center space-x-5">
          {/* Find Pet */}
          <Link
            to={Routes.find_pet}
            className={`text-md font-bold text-purple-900 ${
              Routes.find_pet === location.pathname ? "text-btn-color" : ""
            }`}
          >
            Find Pet
          </Link>
          {/* Create Listing */}
          <Link
            to={Routes.create_listing}
            className={`text-md font-bold text-purple-900 ${
              Routes.create_listing === location.pathname
                ? "text-btn-color"
                : ""
            }`}
          >
            Create Listing
          </Link>
          {/* Adopt Pet */}
          <Link
            to={Routes.adopt_pet}
            className={`text-md font-bold text-purple-900 ${
              Routes.adopt_pet === location.pathname ? "text-btn-color" : ""
            }`}
          >
            Adopt Pet
          </Link>
        </div>
        {/* Center section */}
        <Link to={Routes.home} className="flex items-center space-x-3">
          <img
            src={logo}
            className="h-12"
            alt="lovePet"
          />
          <span className="self-center text-3xl font-semibold whitespace-nowrap">
            
          </span>
        </Link>
        {/* Right section */}
        <div className="flex items-center space-x-5">
          {/* Login */}
          {!token && (
            <Link
              to={Routes.customer_sign_in}
              className={`text-md font-bold text-purple-900 ${
                Routes.customer_sign_in === location.pathname
                  ? "text-btn-color"
                  : ""
              }`}
            >
              Login
            </Link>
          )}
          {/* Create User */}
          {!token && (
            <Link
              to={Routes.create_user}
              className={`text-md font-bold text-purple-900 ${
                Routes.create_user === location.pathname ? "text-btn-color" : ""
              }`}
            >
              Create User
            </Link>
          )}
          {/* User dropdown */}
          {token && (
            <div className="relative">
              <button
                type="button"
                className="flex text-lg bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                  alt="user photo"
                />
              </button>
              {/* Dropdown menu */}
              <div
                className="z-50 hidden absolute right-0 mt-2 w-48 bg-white border border-gray-100 divide-y divide-gray-100 rounded-lg shadow"
                id="user-dropdown"
              >
                <div className="py-1">
                  <Link
                    to={Routes.dashboard}
                    className="block px-4 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to={Routes.settings}
                    className="block px-4 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <Link
                    to={Routes.earnings}
                    className="block px-4 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100"
                  >
                    Earnings
                  </Link>
                </div>
                <div className="py-1">
                  <Link
                    to={Routes.sign_out}
                    className="block px-4 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
