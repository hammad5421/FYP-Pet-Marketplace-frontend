import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../../App'; // Adjust the path according to your project structure

const Navbar = ({ onChangeComponent }) => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8000/api/seller/logout", { withCredentials: true });
      console.log(response);
      toast.success("Logout successful");
      setIsAuthenticated(false);
      navigate('/login');
    } catch (error) {
      console.error('There was an error while logging out!', error);
      toast.error('Error logging out!');
      setIsAuthenticated(true);
    } finally {
      setLoading(false);
    }
  };

  const loginHandler = () => {
    navigate('/login'); // Adjust the path according to your project structure
  };

  return (
    <div style={{ backgroundColor: '#4A148C', padding: '15px', display: 'flex', justifyContent: 'flex-end', paddingRight: '50px' }}>
      <button onClick={() => onChangeComponent('Messages')} style={{ color: 'white', fontWeight: 'bold', margin: '0 10px' }}>Messages</button>
      <button onClick={() => onChangeComponent('AddPet')} style={{ color: 'white', fontWeight: 'bold', margin: '0 10px' }}>Add Pet</button>
      <button onClick={() => onChangeComponent('MyPets')} style={{ color: 'white', fontWeight: 'bold', margin: '0 10px' }}>My Pets</button>
      {isAuthenticated ? (
        <button onClick={logoutHandler} style={{ color: 'white', fontWeight: 'bold', margin: '0 10px' }}>Logout</button>
      ) : (
        <button onClick={loginHandler} style={{ color: 'white', fontWeight: 'bold', margin: '0 10px' }}>Login</button>
      )}
      <ToastContainer />
    </div>
  );
};

export default Navbar;
