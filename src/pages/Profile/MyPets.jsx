import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBirthdayCake, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const PetCard = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [petList, setPetList] = useState([]);
  const [error, setError] = useState(null);

  // Fetch pets data from the API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/pet/getsellerpet', { withCredentials: true });
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

  const petItemClickHandler = (index) => {
    setSelectedPet(index);
  };

  const closeSidebar = () => {
    setSelectedPet(null);
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 ml-8">Featured Listings</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-center flex-wrap gap-8 my-8">
        {petList.map((pet, index) => (
          <div key={pet._id} className="w-96 bg-white shadow-lg rounded-lg overflow-hidden pet-card">
            <div className="flex items-center p-4">
              <div>
                <p className="text-lg font-semibold text-gray-500">{pet.location}</p>
                <h1 className="text-xl font-bold text-purple-800">{pet.name}</h1>
              </div>
              <FontAwesomeIcon icon={faPaw} className="ml-auto text-purple-500 w-8 h-8" />
            </div>
            <img src={pet.imageUrl} alt={pet.name} className="w-full h-60 object-cover" />
            <div className="p-4">
              <div className="flex flex-col mb-2 space-y-2">
                <div className="flex  items-center">
                  <FontAwesomeIcon icon={faPaw} className="w-8 h-8 mr-2 text-blue-500" />
                  <p><strong>Race:</strong> {pet.breed}</p>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faBirthdayCake} className="w-8 h-8 mr-2 text-blue-500" />
                  <p><strong>Age:</strong> {pet.age} years</p>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="w-8 h-8 mr-2 text-blue-500" />
                  <p><strong>Sales Ready:</strong> {new Date(pet.salesReady).toLocaleDateString()}</p>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">{pet.price}</p>
                <button onClick={() => petItemClickHandler(index)} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none">View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PetCard;
