import React from "react";
import icon1 from "../../Assets/search-icon-blue.png"
import icon2 from "../../Assets/gratis-annonce-blue.png"
import icon3 from "../../Assets/sikker-annoncering-blue.png"

const FeatureSection = () => {
  return (
    <div className="flex justify-between w-full  pb-16 pt-12 bg-purple-800 text-white">
      {/* Feature 1 */}
      <div className="flex flex-col items-center text-center mx-16">
        <img
          src={icon1} // Replace "icon1.svg" with your icon source
          alt="Feature 1 Icon"
          className="w-48 mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">
          Gathering all pets at one portal
        </h1>
        <p className="text-sm text-center">
          By gathering all pet listings on one web portal, we make it easy for you to find your new family member.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-cente text-center mx-16">
        <img
          src={icon2} // Replace "icon2.svg" with your icon source
          alt="Feature 2 Icon"
          className="w-48 ml-8 mb-4"
        />
        <h3 className="text-2xl font-bold mb-2">
          Quick listing
        </h3>
        <p className="text-sm text-center">
          Quickly create a pet listing and find a perfect new home for your pet.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-center text-center mx-20">
        <img
          src={icon3} // Replace "icon3.svg" with your icon source
          alt="Feature 3 Icon"
          className="w-48 mb-4"
        />
        <h3 className="text-2xl font-bold mb-2">
          Safe pet trade
        </h3>
        <p className="text-sm text-center">
          By continuous validation of our listings, we ensure a safe trade at LikePets.co.uk.
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;
