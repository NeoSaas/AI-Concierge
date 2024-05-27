import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from '../AppContext';

const images = [
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-Albin-Polaske-Musem-Banner-Design-v1-6x_3_IMGCentury.jpg', text: 'Albin Polaske Musuem' },
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-Alfond-Cafe-Banner-Design--v1-6x_4_IMGCentury.jpg', text: 'Hamiltons Kitchen' },
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-John-Craig-Banner-Design-gigapixel-standard-v1-6x_5_IMGCentury.jpg', text: 'John Craig' },
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-Mead-Gardens-Banner-Design--v1-6x_6_IMGCentury.jpg', text: 'Mead Gardens' },
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-Morse-Musem-Banner-Design-v1-6x_7_IMGCentury.jpg', text: 'Morse Musuem' },
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-Prive-Banner-Design--v1-6x_8_IMGCentury.jpg', text: 'Prive Salon' },
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-Rollins-Art-Musem-Banner-Design-v1-6x_1_IMGCentury.jpg', text: 'Rollins Art Museum' },
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-Scenic-Boat-Tour-Banner-Design-v1-6x_2_IMGCentury.jpg', text: 'Scenic Boat Tour' },
];

const BottomBanner = () => {
  const { isOpen, setIsOpen, setClickedBusiness, setIsHotelSpecific, isHotelSpecific, setImageBasedHotelAmenity, setHotelAmenity, setToPage, setSuggestedDisplayed, setRestaurantLink, clickedBusiness } = useAppContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleGetBusiness = async (index) => {
    let business = images[index].text;
    console.log(business);
    if(business.includes('Alfond Inn') || business.includes('Hamiltons Kitchen')){
      setIsHotelSpecific(true);
      setToPage(true);
      setImageBasedHotelAmenity(true);
      setHotelAmenity(business);
      setSuggestedDisplayed(true);
    } else {
      try {
        const response = await axios.get('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/getBusiness/')
        for(let i = 0; i < response.data.length; i++){
          if(response.data[i].business_name === business){
            setRestaurantLink(response.data[i].directions_url);
            setIsOpen(true);
            setIsHotelSpecific(false);
            setClickedBusiness({0: response.data[i]});
            console.log(clickedBusiness);
          }
        }
      } catch (error) {
        console.log(error);
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
    }, 4000); // Change 5000 to the desired interval in milliseconds
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

