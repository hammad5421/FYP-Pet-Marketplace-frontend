import React, { useState, useContext } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../App';
import Loader from '../../../components/Loader'; // Import the loader component

function LoginForm() {
  const { setIsAuthenticated } = useContext(Context);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false); // Local loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: formData.email,
      password: formData.password,
    };

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/api/buyer/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      console.log(response.data);
      toast.success(response.data.message);
      setIsAuthenticated(true);

      setTimeout(() => {
        navigate('/');
      }, 100);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center mt-24 ${loading ? 'filter blur-sm' : ''}`}>
      {loading && <Loader />}
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-3xl text-center font-bold mb-8">Buyer Login</h1>
        <form onSubmit={handleSubmit} className="flex space-x-4">
          <div className="flex-1">
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
            <div className="mt-6">
              <button
                disabled={loading} // Disable button when loading
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-none hover:bg-purple-700 transition duration-300"
              >
                {loading ? 'Loading...' : 'Login'}
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
              <span>Login with Facebook</span>
            </button>
            <button
              type="button"
              className="bg-red-600 text-white py-3 px-6 rounded-none flex items-center justify-center space-x-2 hover:bg-red-700 transition duration-300 mt-0"
              disabled={loading} // Disable button when loading
            >
              <i className="fab fa-google"></i>
              <span>Login with Google</span>
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default LoginForm;
