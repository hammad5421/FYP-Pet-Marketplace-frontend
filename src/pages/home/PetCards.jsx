import React, { useState } from 'react';

const PetCard = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  // Sample data array for pets
  const petList = [
    {
      id: 1,
      name: "Fluffy",
      image: "https://via.placeholder.com/150",
      breed: "Golden Retriever",
      age: "3 years",
      location: "New York",
      salesReady: "23/03/2024",
      price: "$500",
    },
    {
      id: 2,
      name: "Whiskers",
      image: "https://via.placeholder.com/150",
      breed: "Persian Cat",
      age: "2 years",
      location: "Los Angeles",
      salesReady: "25/03/2024",
      price: "$300",
    },
    {
      id: 3,
      name: "Spike",
      image: "https://via.placeholder.com/150",
      breed: "Bulldog",
      age: "4 years",
      location: "Chicago",
      salesReady: "20/03/2024",
      price: "$700",
    },
  ];

  const petItemClickHandler = (index) => {
    setSelectedPet(index);
  };

  const closeSidebar = () => {
    setSelectedPet(null);
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 ml-8">Featured Listings</h2>
      <div className="flex justify-center flex-wrap gap-8 my-8">
        {petList.map((pet, index) => (
          <div key={pet.id} className="w-96 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4">
              <div>
                <p className="text-lg font-semibold">{pet.location}</p>
                <p className="text-lg font-semibold">{pet.name}</p>
              </div>
              <img src="https://via.placeholder.com/24" alt="Paw icon" className="w-8 h-8" />
            </div>
            <img src={pet.image} alt={pet.name} className="w-full h-60 object-cover" />
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <img src="https://via.placeholder.com/32" alt="Race icon" className="w-8 h-8 mr-2" />
                  <p><strong>Race:</strong> {pet.breed}</p>
                </div>
                <div className="flex items-center">
                  <img src="https://via.placeholder.com/32" alt="Age icon" className="w-8 h-8 mr-2" />
                  <p><strong>Age:</strong> {pet.age}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <img src="https://via.placeholder.com/32" alt="Salgsklar icon" className="w-8 h-8 mr-2" />
                <p><strong>Salgsklar:</strong> {pet.salesReady}</p>
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
      {selectedPet !== null && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={closeSidebar}></div>
          <div className="fixed top-0 right-0 h-full bg-white z-50 p-8">
            <button onClick={closeSidebar} className="absolute top-4 right-4 text-gray-700 hover:text-black focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-semibold mb-4">{petList[selectedPet].name}</h2>
            <img src={petList[selectedPet].image} alt={petList[selectedPet].name} className="w-full h-72 object-cover mb-4" />
            <p><strong>Breed:</strong> {petList[selectedPet].breed}</p>
            <p><strong>Age:</strong> {petList[selectedPet].age}</p>
            <p><strong>Location:</strong> {petList[selectedPet].location}</p>
            <p><strong>Salgsklar:</strong> {petList[selectedPet].salesReady}</p>
            <hr className="my-4" />
            <p className="text-lg font-semibold">{petList[selectedPet].price}</p>
          </div>
        </>
      )}
    </>
  );
};

export default PetCard;
