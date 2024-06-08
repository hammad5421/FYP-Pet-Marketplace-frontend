import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import backgroundImage from '../../Assets/forum-top-billede.jpg'; // Import your background image

const BreedIdentificationPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, Math.random() * (7000 - 5000) + 5000); // Random delay between 5-7 seconds

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="bg-black bg-opacity-50 absolute inset-0"
            onClick={closePopup}
          ></div>
          <div
            className="bg-white rounded-lg max-w-md mx-auto p-6 relative"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <button
              className="absolute top-3 right-3 text-black hover:text-gray-300"
              onClick={closePopup}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <div className="bg-white bg-opacity-75 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Breed Identification
              </h2>
              <p className="text-gray-700 mb-6 text-center">
                Discover your furry friend's breed with our advanced breed
                identification technology.
              </p>
              <div className="flex justify-center">
                <a
                  href="/breedidentification"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Get it Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BreedIdentificationPopup;