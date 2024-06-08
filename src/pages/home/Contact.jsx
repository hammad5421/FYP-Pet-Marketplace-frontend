import React from "react";
import backgroundImage from "../../Assets/HomeContact.jpg"; // Import the background image

const ContactUs = () => {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover bg-center flex justify-center md:justify-end items-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-80 md:mr-24 rounded-lg text-purple-900 shadow-lg w-11/12 sm:w-auto max-w-md">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
          Contact customer service
        </h2>
        <p className="text-sm sm:text-base md:text-sm font-bold mb-2 sm:mb-4">
          All weekdays between 08.00-16.00
        </p>
        <button className="bg-purple-800 text-white py-2 px-8 sm:px-12 rounded-lg hover:bg-purple-900 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
