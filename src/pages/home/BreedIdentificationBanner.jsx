import React from "react";
import { Link } from "react-router-dom";
import Routes from "../../router/Routes"; // Ensure this import is correct
import bgImage from '../../Assets/pexels-blue-bird-7210754.jpg'; // Ensure this path is correct

export default function BannerComponent() {
  return (
    <div
      className="relative w-full h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Discover Your Pet's Breed
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Use our advanced breed identification tool to learn more about your furry friend.
        </p>
        <Link to={Routes.breed_identification}>
          <button className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out">
            Try It Now
          </button>
        </Link>
      </div>
    </div>
  );
}
