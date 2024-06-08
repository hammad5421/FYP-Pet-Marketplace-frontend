import React from "react";
import { Link } from "react-router-dom";
import Routes from "../../router/Routes"; // Ensure this import is correct
import bgImage from '../../Assets/pexels-freestockpro-1174081.jpg'; // Ensure this path is correct

export default function PetHealthBanner() {
  return (
    <div
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Keep Your Pet Healthy & Happy
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-10">
          Get personalized health recommendations for your furry friend.
        </p>
        <Link to={Routes.symptom_tracker}>
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105">
            Start Now
          </button>
        </Link>
      </div>
    </div>
  );
}
