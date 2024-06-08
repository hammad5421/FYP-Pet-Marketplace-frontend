import React, { createContext, useState } from "react";

// Create Loader Context
export const LoaderContext = createContext();
export const AuthContext = createContext();

// Custom Provider for LoaderContext
export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
