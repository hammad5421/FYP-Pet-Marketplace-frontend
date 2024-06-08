import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Context } from "../App"; // Ensure the correct path to App.js
import UnauthenticatedNavbar from "./Navbar1";
import AuthenticatedNavbar from "./Navbar2";

function Navbar() {
  const { isAuthenticated } = useContext(Context);

  return (
    
    <>
      {isAuthenticated ? <AuthenticatedNavbar /> : <UnauthenticatedNavbar />}
      </>
  );
}

export default Navbar;
