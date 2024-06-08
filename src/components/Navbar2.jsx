import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Routes from "../router/Routes"; // Ensure this import is correct
import logo from '../Assets/logo.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure Toastify CSS is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

import { Context } from "../App"; // Ensure the correct path to App.js

export default function AuthenticatedNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context); // Destructure context
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

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
              {menuOpen ? <FontAwesomeIcon icon={faTimes} size="2x" /> : <FontAwesomeIcon icon={faBars} size="2x" />}
            </button>
          </div>

          {/* Menu items for larger screens */}
          <div className="hidden lg:flex items-center space-x-5">
            <Link to={Routes.findpet} className={`text-md font-bold text-purple-900 ${Routes.find_pet === location.pathname ? "text-btn-color" : ""}`}>
              Find Pet
            </Link>
            <Link to={Routes.breed_identification} className={`text-md font-bold text-purple-900 ${Routes.breed_identification === location.pathname ? "text-btn-color" : ""}`}>
              Breed Identification
            </Link>
            <Link to={Routes.symptom_tracker} className={`text-md font-bold text-purple-900 ${Routes.symptom_tracker === location.pathname ? "text-btn-color" : ""}`}>
              Symptom Tracker
            </Link>
            <Link to={Routes.adopt_pet} className={`text-md font-bold text-purple-900 ${Routes.adopt_pet === location.pathname ? "text-btn-color" : ""}`}>
              Adopt Pet
            </Link>
            <Link to={Routes.profile} className="flex items-center text-purple-900">
              <FontAwesomeIcon icon={faUserCircle} className="text-2xl" />
            </Link>
           
            <ToastContainer />
          </div>
        </div>
      </nav>

      {/* Mobile menu with overlay */}
      <div className={`fixed inset-0 z-40 bg-white transition-transform transform ${menuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden flex flex-col items-center justify-center h-screen`}>
        <div className="p-8 flex flex-col items-center space-y-8">
          <Link to={Routes.findpet} className={`text-lg font-bold text-purple-900 ${Routes.find_pet === location.pathname ? "text-btn-color" : ""}`} onClick={toggleMenu}>
            Find Pet
          </Link>
          <Link to={Routes.breed_identification} className={`text-lg font-bold text-purple-900 ${Routes.breed_identification === location.pathname ? "text-btn-color" : ""}`} onClick={toggleMenu}>
            Breed Identification
          </Link>
          <Link to={Routes.symptom_tracker} className={`text-lg font-bold text-purple-900 ${Routes.symptom_tracker === location.pathname ? "text-btn-color" : ""}`} onClick={toggleMenu}>
            Symptom Tracker
          </Link>
          <Link to={Routes.adopt_pet} className={`text-lg font-bold text-purple-900 ${Routes.adopt_pet === location.pathname ? "text-btn-color" : ""}`} onClick={toggleMenu}>
            Adopt Pet
          </Link>
           <Link to={Routes.profile} className={`text-lg font-bold text-purple-900 ${Routes.adopt_pet === location.pathname ? "text-btn-color" : ""}`} onClick={toggleMenu}>
            Profile
          </Link>
          
         
        </div>
      </div>
    </>
  );
}
