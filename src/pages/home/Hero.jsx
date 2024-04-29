import React from "react";
import Bgimage from "../../Assets/Bg.jpg";
import Icon1 from "../../Assets/dogs.svg";
import Icon2 from "../../Assets/cats.svg";
import Icon3 from "../../Assets/others.svg";

const Hero = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${Bgimage})`,
        backgroundRepeat: "no-repeat", // Prevent background image from repeating
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex flex-col justify-center items-center h-screen text-white mb-[-66px]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#57328a" }}>
            Welcome to LovePets.com
          </h1>
          <h2 className="text-lg mb-6" style={{ color: "#6F40AF" }}>
            Find your next pet amongst our 7773 pet listing
          </h2>
          <div className="flex items-center justify-center mb-8">
            {/* Search bar */}
            <input
              type="text"
              placeholder="Search for pets..."
              className="bg-white text-gray-800 rounded-l-[5px] py-2 px-4 w-[35vw] h-14 focus:outline-none focus:ring-2 focus:ring-purple-950"
            />
            {/* Search button */}
            <button className="bg-purple-950 text-white rounded-r-[5px] px-6 py-2 h-14 focus:outline-none focus:ring-2 focus:ring-purple-950">
              Search
            </button>
          </div>
          {/* Clickable icons */}
          <div className="flex items-center justify-center space-x-4">
            <img src={Icon1} alt="Icon 1" className="h-12" />
            <img src={Icon2} alt="Icon 2" className="h-12" />
            <img src={Icon3} alt="Icon 3" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
