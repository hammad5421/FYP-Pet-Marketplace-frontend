import React from "react";
import backgroundImage from "../../Assets/HomeContact.jpg"; // Import the background image

const ContactUs = () => {
  return (
    <div className="h-screen bg-no-repeat bg-contain bg-center  flex justify-end items-center overflow-hidden" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="p-8 mr-24 text-purple-900">
        <h2 className="text-3xl font-bold mb-4">Contact customer service</h2>
        <p className="text-small font-bold mb-4">All weekdays between 08.00-16.00</p>
        <button className="bg-purple-800 text-white py-2 px-12 rounded-lg">Contact Us</button>
      </div>
    </div>
  );
};

export default ContactUs;
