import React, { createContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRoutes from './router'; // Ensure you have routes defined in 'router.js'
import axios from 'axios';

export const Context = createContext(); // Correctly create context

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const router = createBrowserRouter(AppRoutes);
 
  useEffect(()=>{
    setLoading(true)
    
    axios.get("http://localhost:8000/api/seller/me" , {
      withCredentials:true,
    }).then((res)=>{
     setUser( res.data.user)
     setIsAuthenticated(true)
    })
    .catch((error)=>{
      setUser({})
      setIsAuthenticated(false)
      setLoading(false)

      

    })
  },[])

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, loading, setLoading ,user, setUser}}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
