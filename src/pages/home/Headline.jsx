import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App"; // Import your authentication context
import Routes from "../../router/Routes.js";

const SellPetBanner = () => {
  const { isAuthenticated } = useContext(Context); // Destructure isAuthenticated from context
  const navigate = useNavigate();

  const handleCreateListing = () => {
    if (isAuthenticated) {
      navigate(Routes.create_Listing);
    } else {
      navigate(Routes.login);
    }
  };

  return (
    <div className="w-full h-16 bg-yellow-300 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <p className="text-lg font-bold text-gray-800 text-center">
        The fastest and easiest way to sell your pet.
      </p>
      <button
        className="ml-4 px-4 py-2 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 text-sm sm:text-base"
        onClick={handleCreateListing}
      >
        Create Listing
      </button>
    </div>
  );
};

export default SellPetBanner;
