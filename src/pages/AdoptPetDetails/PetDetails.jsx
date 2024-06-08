import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBirthdayCake, faCalendarAlt, faEnvelope, faPhone, faMapMarkerAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faDog, faCat } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faSmile, faFrown } from '@fortawesome/free-solid-svg-icons';

const AdoptPetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/adoptpet/${id}`);
        if (response.data.success) {
          setPet(response.data.pet);
        } else {
          setError('Failed to fetch pet details');
        }
      } catch (error) {
        setError('Error fetching pet details');
        console.error('Error fetching pet details:', error);
      }
    };

    fetchPetDetails();
  }, [id]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!pet) {
    return <p className='text-center'>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-20 p-8 bg-white shadow-lg rounded-lg">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none"
      >
        Back
      </button>
      <div className="flex flex-col items-center">
        <img src={pet.imageUrl} alt={pet.petName} className="w-full max-w-md h-64 object-cover mb-4 rounded-lg shadow-md" />
        <h1 className="text-4xl font-bold text-purple-700 mb-2">{pet.petName}</h1>
        <p className="text-xl text-gray-600 mb-4 text-center">{pet.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full">
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={pet.category === 'Dogs' ? faDog : faCat} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Category:</strong> {pet.category}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faPaw} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Breed:</strong> {pet.breed}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faBirthdayCake} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Age:</strong> {pet.age} years</p>
          </div>
       
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Location:</strong> {pet.location}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faExclamationCircle} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Vaccination Status:</strong> {pet.vaccinationStatus}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Neutered/Spayed:</strong> {pet.neuteredSpayedStatus}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faExclamationCircle} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Health Conditions:</strong> {pet.healthConditions}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faSmile} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Temperament:</strong> {pet.temperament}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faPaw} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Breed Information:</strong> {pet.breedInformation}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faPaw} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Training:</strong> {pet.training}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faPaw} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Diet:</strong> {pet.diet}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faPaw} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Size:</strong> {pet.size}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faPaw} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Color:</strong> {pet.color}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faPaw} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Coat Type:</strong> {pet.coatType}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faPaw} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Energy Level:</strong> {pet.energyLevel}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={pet.goodWithKids === 'Yes' ? faSmile : faFrown} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Good With Kids:</strong> {pet.goodWithKids}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={pet.goodWithOtherPets === 'Yes' ? faSmile : faFrown} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Good With Other Pets:</strong> {pet.goodWithOtherPets}</p>
          </div>
          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-8 h-8 text-purple-500 mr-4" />
            <p className="text-lg"><strong>Street Address:</strong> {pet.streetAddress}</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full max-w-md mb-4">
          <p className="text-2xl font-semibold">Price: £{pet.price}</p>
        </div>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => window.location = `mailto:${pet.contactEmail}`}
            className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contact Now
          </button>
          <button
            onClick={() => alert('Order functionality not implemented')}
            className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdoptPetDetails;
