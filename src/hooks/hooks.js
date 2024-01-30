import React, { createContext, useContext, useState, useEffect } from 'react';
const DateContext = createContext();

export const useData = () => {
  return useContext(DateContext);
};

const baseURL = "https://foodserver-c5lx.onrender.com";


export const DataProvider = ({ children }) => {

  const [isLoading, setLoading] = useState(false);
  const [nav, setNav] = useState();


  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };


  


  return (
    <DateContext.Provider value={{
      isLoading,
      startLoading,
      stopLoading,
      baseURL,
      nav, 
      setNav
    }}>
      {children}
    </DateContext.Provider>
  );
};
