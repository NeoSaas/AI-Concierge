import React, { useState, useEffect } from 'react';

const BottomBanner = () => {
  // currently hardcoded, but will be fetched from django api
  const images = [
    { src: 'hoteladbanner.jpg', text: 'Text for Image 1' },
    { src: 'hotelluxurybanner.jpg', text: 'Text for Image 2' },
    { src: 'event.png', text: 'Text for Image 3' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    }, 5000); // Change 5000 to the desired interval in milliseconds
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="absolute bottom-[-43px] w-full h-56 font-quicksand border-t-2 border-black">
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
        >
          <img
            src={image.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-16 left-20 right-0 p-6 text-white bg-black bg-opacity-0">
            {/* <p className="text-lg font-semibold">{image.text}</p> */}
          </div>
        </div>
      ))}
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full focus:outline-none"
      >
        {'<'}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full focus:outline-none"
      >
        {'>'}
      </button>
    </div>
  );
};

export default BottomBanner;