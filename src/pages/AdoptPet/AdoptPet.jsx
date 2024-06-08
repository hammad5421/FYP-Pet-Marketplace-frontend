import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBirthdayCake, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

const PetList = () => {
  const [petList, setPetList] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage] = useState(6);
  const [filters, setFilters] = useState({
    category: 'all',
    breed: '',
    age: '',
    location: '',
    priceRange: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/adoptpet/getall');
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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const applyFilters = () => {
    return petList.filter(pet => {
      const matchesCategory = filters.category === 'all' || pet.category.toLowerCase() === filters.category.toLowerCase();
      const matchesBreed = !filters.breed || pet.breed.toLowerCase().includes(filters.breed.toLowerCase());
      const matchesAge = !filters.age || pet.age.toString() === filters.age;
      const matchesLocation = !filters.location || pet.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesPrice = !filters.priceRange || (pet.price >= filters.priceRange.split('-')[0] && pet.price <= filters.priceRange.split('-')[1]);

      return matchesCategory && matchesBreed && matchesAge && matchesLocation && matchesPrice;
    });
  };

  const filteredPets = applyFilters();

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);
  const totalPages = Math.ceil(filteredPets.length / petsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const resetFilters = () => {
    setFilters({
      category: 'all',
      breed: '',
      age: '',
      location: '',
      priceRange: ''
    });
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col lg:flex-row mt-20 px-4 md:px-10 lg:px-20">
      {/* Mobile Filter Button */}
      <button
        className="lg:hidden bg-gray-300 text-gray-700 py-2 px-4 rounded-md mb-4 focus:outline-none focus:bg-gray-400"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>

      {/* Filter Sidebar */}
      <aside className={`w-full lg:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md lg:block ${showFilters ? 'block' : 'hidden'}`}>
        <h2 className="text-xl font-bold mb-4">Filter your search</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Category</label>
          {['all', 'dogs', 'cats'].map(category => (
            <div key={category} className="flex items-center mb-2">
              <input
                type="radio"
                id={category}
                name="category"
                value={category}
                checked={filters.category === category}
                onChange={handleFilterChange}
                className="mr-2"
              />
              <label htmlFor={category} className="capitalize">{category}</label>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Breed</label>
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            value={filters.breed}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Age</label>
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={filters.age}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Price Range</label>
          <select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            <option value="0-100">£0 - £100</option>
            <option value="100-500">£100 - £500</option>
            <option value="500-1000">£500 - £1000</option>
            <option value="1000-5000">£1000 - £5000</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={filters.location}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <button onClick={resetFilters} className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Reset Filters</button>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-4">
      <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Listings for Adoption</h2>
          <button
            onClick={() => navigate("/createadoptionListing")}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Add Pet for Adoption
          </button>
        </div>        
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
          {currentPets.length > 0 ? (
            currentPets.map((pet) => (
              <Link key={pet._id} to={`/adoptpet/${pet._id}`}>
                <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden pet-card cursor-pointer transition duration-300 ease-in-out transform hover:shadow-xl">
                  <div className="flex items-center p-4">
                    <div>
                      <p className="text-lg font-semibold text-gray-500">{pet.location}</p>
                      <h1 className="text-xl font-bold text-purple-800">{pet.name}</h1>
                    </div>
                    <FontAwesomeIcon icon={faPaw} className="ml-auto text-purple-500 w-8 h-8" />
                  </div>
                  <img src={pet.imageUrl} alt={pet.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <div className="flex mb-4 justify-between">
                      <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faPaw} className="w-8 h-8 text-blue-500 mb-1" />
                        <p><strong>Breed:</strong></p> <span>{pet.breed}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faBirthdayCake} className="w-8 h-8 text-blue-500 mb-1" />
                        <p><strong>Age:</strong></p> <span>{pet.age} years</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} className="w-8 h-8 text-blue-500 mb-1" />
                        <p><strong>Location:</strong></p> <span>{pet.location}</span>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between items-center">
                      <p><strong>Price:</strong></p>
                      <p className="text-lg font-semibold">£{pet.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-red-500">No matches found.</p>
          )}
        </div>
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 rounded-md shadow-md ${currentPage === i + 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PetList;
