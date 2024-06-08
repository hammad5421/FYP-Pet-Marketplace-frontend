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
          <h1 className="text-4xl font-bold mb-4">Create Pet Listing</h1>
          <p className="text-lg">
            It's free to create a pet listing if you have a pet you'd like to find a new family for. <br />
            When the listing is created, you're able to edit or delete it at any time. <br />
            Upon creation of the listing, a user will also be created for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
