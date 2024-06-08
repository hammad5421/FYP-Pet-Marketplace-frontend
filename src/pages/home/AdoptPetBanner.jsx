import React from "react";
import { Link } from "react-router-dom";
import Routes from "../../router/Routes"; // Ensure this import is correct
import bgImage from '../../Assets/pexels-blue-bird-7210754.jpg'; // Ensure this path is correct

export default function PetAdoptionBanner() {
  return (
    <div
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 opacity-75"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Find Your New Best Friend
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-10">
          Discover loving pets waiting for a home. Adopt today and change a life.
        </p>
        <Link to={Routes.adopt_pet}>
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105">
            Adopt Now
          </button>
        </Link>
      </div>
    </div>
  );
}
