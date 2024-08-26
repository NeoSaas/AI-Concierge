import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: 'cafe2.png', text: 'The Cafe' },
  { src: 'cafe3.png', text: 'The Cafe' },
  { src: 'corporate.png', text: 'Corporate' },
  { src: 'hamiltons2.png', text: 'Hamiltons Kitchen' },
  { src: 'hamiltons3.png', text: 'Hamiltons Kitchen' },
  { src: 'HamiltonsKitchen.png', text: 'Hamiltons Kitchen' },
];

const BottomBanner = () => {
  const { isOpen, setIsOpen, setClickedBusiness, setIsHotelSpecific, isHotelSpecific, setImageBasedHotelAmenity, setHotelAmenity, setToPage, setSuggestedDisplayed, setRestaurantLink, clickedBusiness } = useAppContext();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bannerImages, setBannerImages] = useState([]);

  const handleGetBusiness = async (index) => {
    let business = images[index].text;
    // //console.log(business);
    if(business.includes('Alfond Inn') || business.includes('Hamiltons Kitchen') || business.includes('The Lounge') || business.includes('The Spa') || business.includes('The Cafe') || business.includes('The Pool') || business.includes('Fitness Center')){
      setIsHotelSpecific(true);
      setToPage(true);
      setImageBasedHotelAmenity(true);
      setHotelAmenity(business);
      setSuggestedDisplayed(true);
    } else if(business.includes('Corporate')){
      navigate('/event_spaces');
    }
    else {
      try {
        const response = await axios.get('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/getBusiness/')
        for(let i = 0; i < response.data.length; i++){
          if(response.data[i].business_name === business){
            // //console.log("we in here")
            setRestaurantLink(response.data[i].directions_url);
            setIsOpen(true);
            setIsHotelSpecific(false);
            setClickedBusiness({0: response.data[i]});
            //console.log(clickedBusiness);
          }
        }
      } catch (error) {
        //console.log(error);
      }
    }
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Change 5000 to the desired interval in milliseconds
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="absolute bottom-[-0px] w-full h-[525px] font-quicksand border-t-2 border-black">
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
          
        >
          <img
            src={image.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-fill"
            onClick={() => handleGetBusiness(currentImageIndex)}
          />
        </div>
      ))}
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-4 py-12 bg-black bg-opacity-50 text-white rounded-full focus:outline-none text-3xl"
      >
        {'<'}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-4 py-12 bg-black bg-opacity-50 text-white rounded-full focus:outline-none text-3xl"
      >
        {'>'}
      </button>
    </div>
  );
};

export default BottomBanner;

