import React, { useContext, useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../App'; // Correctly import the context
import Loader from '../../../components/Loader'; // Import the loader component

function RegistrationForm() {
  const { setIsAuthenticated } = useContext(Context);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    profileImage: null,
  });
  const [loading, setLoading] = useState(false); // Local loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before making the API call
  
    const data = new FormData();
    data.append('full_name', formData.full_name);
    data.append('email', formData.email);
    data.append('password', formData.password);
    if (formData.profileImage) {
      data.append('profileImage', formData.profileImage);
    }
  
    try {
      const response = await axios.post('http://localhost:8000/api/seller/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      console.log(response);
      toast.success('Registration successful!');
      setIsAuthenticated(true); // Set authenticated state first
      navigate('/'); // Redirect to the main page after successful registration
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      toast.error(error.message);
      setIsAuthenticated(false); // Set authenticated state to false on error
    } finally {
      setLoading(false); // Set loading to false after the API call completes
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center mt-24 ${loading ? 'filter blur-sm' : ''}`}>
      {loading && <Loader />}
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-3xl text-center font-bold mb-8">Create User</h1>
        <form onSubmit={handleSubmit} className="flex space-x-4">
          <div className="flex-1">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full name *</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-none"
                required
                disabled={loading} // Disable input when loading
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-4 p-3 w-full border border-gray-300 rounded-none"
                required
                disabled={loading} // Disable input when loading
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-4 p-3 w-full border border-gray-300 rounded-none"
                required
                disabled={loading} // Disable input when loading
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Image</label>
              <input
                type="file"
                name="profileImage"
                onChange={handleChange}
                className="mt-4 p-3 w-full border border-gray-300 rounded-none"
                disabled={loading} // Disable input when loading
              />
            </div>
            <div className="mt-6">
              <button disabled={loading}
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-none hover:bg-purple-700 transition duration-300"
              >
                {loading ? 'Loading...' : 'Create user'}
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col mt-7 space-y-4">
            <button
              type="button"
              className="bg-blue-600 text-white py-3 px-6 rounded-none flex items-center justify-center space-x-2 hover:bg-blue-700 transition duration-300"
              disabled={loading} // Disable button when loading
            >
              <i className="fab fa-facebook-f"></i>
              <span>Create with Facebook</span>
            </button>
            <button
              type="button"
              className="bg-red-600 text-white py-3 px-6 rounded-none flex items-center justify-center space-x-2 hover:bg-red-700 transition duration-300 mt-0"
              disabled={loading} // Disable button when loading
            >
              <i className="fab fa-google"></i>
              <span>Create with Google</span>
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default RegistrationForm;
