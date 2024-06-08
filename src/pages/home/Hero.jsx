import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Routes from '../../router/Routes.js';
import Bgimage from '../../Assets/Bg.jpg';
import Icon1 from '../../Assets/dogs.svg';
import Icon2 from '../../Assets/cats.svg';
import Icon3 from '../../Assets/others.svg';
import BreedIdentificationPopup from './PopUp.jsx';

const Hero = () => {
  const [numberOfPets, setNumberOfPets] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/pet/count');
        const totalPetsCount = response.data.totalPetsCount;
        setNumberOfPets(totalPetsCount);
      } catch (error) {
        console.error('There was an error fetching the pet count!', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (showPopup) {
      // Show the popup when the component mounts
      setShowPopup(false);
    }
  }, [showPopup]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`${Routes.findpet}?query=${searchQuery}`);
    } else {
      navigate(Routes.findpet);
    }
  };

  const handleFilter = (category) => {
    navigate(`${Routes.findpet}?category=${category}`);
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${Bgimage})` }}
    >
      {showPopup && <BreedIdentificationPopup />}
      <div className="relative text-center mt-10 p-6 md:p-0 text-white z-10">
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#57328a" }}>
          Welcome to LovePets.com
        </h1>
        <h2 className="text-lg mb-6" style={{ color: "#6F40AF" }}>
          Find your next pet amongst our{' '}
          <span style={{ color: "#45BFDC", fontWeight: "bold", fontSize: "1.1em" }}>
            {numberOfPets}
          </span>{' '}
          pet listings
        </h2>
        <div className="flex items-center justify-center mb-8 w-full max-w-2xl mx-auto relative z-10">
          {/* Enhanced search bar */}
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-white text-gray-800 py-3 px-4 w-[36vw] h-12 focus:outline-none rounded-l-lg shadow-lg border-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* Search button */}
          <button
            className="bg-purple-950 text-white px-6 py-3 h-12 focus:outline-none shadow-md rounded-r-lg border-none"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {/* Clickable icons for filtering */}
        <div className="flex items-center justify-center space-x-4">
          <img
            src={Icon1}
            alt="Dogs Icon"
            className="h-12 cursor-pointer"
            onClick={() => handleFilter('dogs')}
          />
          <img
            src={Icon2}
            alt="Cats Icon"
            className="h-12 cursor-pointer"
            onClick={() => handleFilter('cats')}
          />
          <img
            src={Icon3}
            alt="Others Icon"
            className="h-12 cursor-pointer"
            onClick={() => handleFilter('others')}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
