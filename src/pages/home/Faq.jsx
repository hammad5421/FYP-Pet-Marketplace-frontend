import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Shipping</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
        <div className="border-b border-gray-200">
          <button
            className="flex items-center justify-between w-full p-6 focus:outline-none"
            onClick={toggleAccordion}
          >
            <span className="text-lg font-semibold">What is the status of my order?</span>
            {isOpen ? <FaMinus className="text-red-600" /> : <FaPlus className="text-blue-600" />}
          </button>
        </div>
        {isOpen && (
          <div className="p-6 border-t border-gray-200">
            <p className="text-gray-700">Track your order by entering your order number and email address on our order tracking page.</p>
          </div>
        )}
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
        <div className="border-b border-gray-200">
          <button
            className="flex items-center justify-between w-full p-6 focus:outline-none"
            onClick={toggleAccordion}
          >
            <span className="text-lg font-semibold">How do I cancel or change my order?</span>
            {isOpen ? <FaMinus className="text-red-600" /> : <FaPlus className="text-blue-600" />}
          </button>
        </div>
        {isOpen && (
          <div className="p-6 border-t border-gray-200">
            <p className="text-gray-700">You can cancel or change your order by contacting us within 24 hours of placing your order. Please include your order number in your email or phone call.</p>
          </div>
        )}
      </div>
      {/* Repeat for other FAQs */}
    </div>
  );
};

export default FAQ;