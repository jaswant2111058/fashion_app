import React, { createContext, useContext, useState, useEffect } from 'react';
const DateContext = createContext();

export const useData = () => {
  return useContext(DateContext);
};

const baseURL = "https://foodserver-c5lx.onrender.com";
import gymwearImage from '../../assets/images/gymwear.jpg';
import Jeans from '../../assets/images/jeans.jpg';
import Hoody from '../../assets/images/Hoody.jpg';
import Shirt from '../../assets/images/sweatShirt.jpg';
import Bottoms from '../../assets/images/bottoms.jpg';

const data =[
  {id:"1",img:Jeans,name:"Jeans"},
  {id:"2",img:gymwearImage,name:"Gym wear"},
  {id:"3",img:Hoody,name:"Hoody"},
  {id:"4",img:Bottoms,name:"Bottoms"},
  {id:"5",img:Shirt,name:"Swet Shirt"},
  {id:"6",img:Jeans,name:"Jeans"},
]


export const DataProvider = ({ children }) => {

  const [isLoading, setLoading] = useState(false);
  const [nav, setNav] = useState();
  const [save, setSave] = useState([]);



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
      setNav,
      data,
      save,
      setSave
    }}>
      {children}
    </DateContext.Provider>
  );
};
