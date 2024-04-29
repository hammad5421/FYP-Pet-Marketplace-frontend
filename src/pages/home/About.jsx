import React from "react";
import backgroundImage from "../../Assets/fisk-2.jpg"; // Import the background image

const ComponentWithBackground = () => {
  return (
    <div className="mt-[-58px] mb-[-58px] bg-no-repeat flex items-center" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'center', height: "calc(100vh - 108px)"}}>
      <div className="w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4 text-white">About LovePets.com</h2>
        <p className="text-small text-white">LovePets.com makes it easy to find your next pet. We gather all pets for sale on the internet. Find your new family member among our many pet listings.</p>
      </div>
    </div>
  );
};

export default ComponentWithBackground;
