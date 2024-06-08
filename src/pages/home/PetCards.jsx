import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBirthdayCake, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [petList, setPetList] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/pet/getall', { withCredentials: true });
        if (response.data.success) {
          setPetList(response.data.pets);
        } else {
          setError('Failed to fetch pets');
        }
      } catch (error) {
        setError('Error fetching pet data');
        console.error('Error fetching pet data:', error);
      }
    };

    fetchPets();
  }, []);

  const latestPets = petList.slice(-3).reverse(); // Get the last 3 pets and reverse the order

  const handleCardClick = (petId) => {
    navigate(`/pet/${petId}`);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-2">Latest Listings</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-center flex-wrap gap-8 my-8">
        {latestPets.map((pet) => (
          <div
            key={pet._id}
            className="w-80 bg-white shadow-lg rounded-lg overflow-hidden pet-card cursor-pointer transform transition duration-200 hover:shadow-xl hover:scale-105"
            onClick={() => handleCardClick(pet._id)}
          >
            <div className="flex items-center p-4">
              <div>
                <p className="text-lg font-semibold text-gray-500">{pet.location}</p>
                <h1 className="text-xl font-bold text-purple-800">{pet.name}</h1>
              </div>
              <FontAwesomeIcon icon={faPaw} className="ml-auto text-purple-500 w-8 h-8" />
            </div>
            <img src={pet.imageUrl} alt={pet.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between mb-4">
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faPaw} className="w-8 h-8 text-blue-500 mb-1" />
                  <p><strong>Race:</strong></p> <span>{pet.breed}</span>
                </div>
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faBirthdayCake} className="w-8 h-8 text-blue-500 mb-1" />
                  <p><strong>Age:</strong></p> <span>{pet.age} years</span>
                </div>
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="w-8 h-8 text-blue-500 mb-1" />
                  <p><strong>Location</strong></p> <span>{pet.location}</span>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <p><strong>Price:</strong></p>
                <p className="text-lg font-semibold">£{pet.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate('/findpet')}
        className="bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        View More
      </button>
    </div>
  );
};

export default MainPage;
