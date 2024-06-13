import React, { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isHotelSpecific, setIsHotelSpecific] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [suggestedDisplayed, setSuggestedDisplayed] = useState(false);
  const [restaurantLink, setRestaurantLink] = useState(null);
  const [isRestaurant, setIsRestaurant] = useState(true);
  const [clickedBusiness, setClickedBusiness] = useState([]);
  const [loadingOptions, setLoadingOptions] = useState(false);
  const [displayOptions, setDisplayOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTimerComplete, setIsTimerComplete] = useState(false);
  const [isItinerary, setIsItinerary] = useState(false);
  const [imageBasedHotelAmenity, setImageBasedHotelAmenity] = useState(false);
  const [hotelAmenity, setHotelAmenity] = useState('');
  const [toPage, setToPage] = useState(false);

  const login = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    // Handle redirect logic
  }, []);

  return (
    <AppContext.Provider
      value={{
        toPage,
        setToPage,
        hotelAmenity,
        setHotelAmenity,
        imageBasedHotelAmenity,
        setImageBasedHotelAmenity,
        isAuthenticated,
        setIsAuthenticated,
        rememberMe,
        setRememberMe,
        isHotelSpecific,
        setIsHotelSpecific,
        disabled,
        setDisabled,
        suggestedDisplayed,
        setSuggestedDisplayed,
        restaurantLink,
        setRestaurantLink,
        isRestaurant,
        setIsRestaurant,
        clickedBusiness,
        setClickedBusiness,
        loadingOptions,
        setLoadingOptions,
        displayOptions,
        setDisplayOptions,
        isOpen,
        setIsOpen,
        login,
        logout,
        setIsTimerComplete,
        isTimerComplete,
        isItinerary,
        setIsItinerary,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
