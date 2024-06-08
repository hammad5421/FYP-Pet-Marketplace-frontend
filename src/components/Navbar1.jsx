import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Routes from "../router/Routes"; // Ensure this import is correct
import logo from '../Assets/3r.PNG';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure Toastify CSS is imported
import { FaBars, FaTimes } from 'react-icons/fa'; // Add Font Awesome icons for hamburger menu

export default function UnauthenticatedNavbar() {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${scrolling ? "bg-white border-gray-200" : "border-transparent"}`}>
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Center section */}
          <Link to={Routes.home} className="flex items-center space-x-3">
            <img src={logo} className="h-12" alt="lovePet" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap"></span>
          </Link>

          {/* Hamburger icon for mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-purple-900 focus:outline-none">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Menu items for larger screens */}
          <div className="hidden lg:flex items-center space-x-5">
            <Link to={Routes.findpet} className={`text-md font-bold text-purple-900 ${Routes.find_pet === location.pathname ? "text-btn-color" : ""}`}>
              Find Pet
            </Link>
            <Link to={Routes.adopt_pet} className={`text-md font-bold text-purple-900 ${Routes.adopt_pet === location.pathname ? "text-btn-color" : ""}`}>
              Adopt Pet
            </Link>
            <Link to={Routes.login} className={`text-md font-bold text-purple-900 ${Routes.login === location.pathname ? "text-btn-color" : ""}`}>
              Login
            </Link>
            <Link to={Routes.register} className={`text-md font-bold text-purple-900 ${Routes.register === location.pathname ? "text-btn-color" : ""}`}>
              Create User
            </Link>
            <ToastContainer />
          </div>
        </div>
      </nav>

      {/* Mobile menu with overlay */}
      <div className={`fixed inset-0 z-40 bg-white transition-transform transform ${menuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden flex flex-col items-center justify-center h-screen`}>
        <div className="p-8 flex flex-col items-center space-y-8">
          <Link to={Routes.findpet} className={`text-lg font-bold text-purple-900 ${Routes.findpet === location.pathname ? "text-btn-color" : ""}`} onClick={toggleMenu}>
            Find Pet
          </Link>
          <Link to={Routes.adopt_pet} className={`text-lg font-bold text-purple-900 ${Routes.adopt_pet === location.pathname ? "text-btn-color" : ""}`} onClick={toggleMenu}>
            Adopt Pet
          </Link>
          <Link to={Routes.login} className={`text-lg font-bold text-purple-900 ${Routes.login === location.pathname ? "text-btn-color" : ""}`} onClick={toggleMenu}>
            Login
          </Link>
          <Link to={Routes.register} className={`text-lg font-bold text-purple-900 ${Routes.register === location.pathname ? "text-btn-color" : ""}`} onClick={toggleMenu}>
            Create User
          </Link>
        </div>
      </div>
    </>
  );
}
