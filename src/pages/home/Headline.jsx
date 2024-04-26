import React from "react";

const SellPetBanner = () => {
  return (
    <div className="w-full h-16 bg-yellow-300 flex items-center justify-center">
      <p className="text-lg font-bold text-gray-800">
        The fastest and easiest way to sell your pet.
      </p>
      <button className="ml-4 px-4 py-2 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700">
        Create Listing
      </button>
    </div>
  );
};

export default SellPetBanner;
