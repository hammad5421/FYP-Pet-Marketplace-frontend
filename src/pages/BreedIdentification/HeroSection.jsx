import React from 'react';
import image1 from "../../Assets/forum-top-billede.jpg";

const HeroSection = () => {
  return (
    <div className="relative">
      <div 
        className="bg-gray-700 py-20 text-white bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-35"></div> {/* Black overlay */}
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Breed Identification</h1>
          <p className="text-lg">
           It's free to Use Breed Identification for 3 times.
.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
