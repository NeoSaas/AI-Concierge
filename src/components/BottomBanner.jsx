import React, { useState, useEffect } from 'react';

const BottomBanner = () => {
  // currently hardcoded, but will be fetched from django api
  const images = [
    { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/Banner1080-x-550-Albin-Polaske-Musem-Banner-Design-v1-6x.jpg', text: 'Text for Image 1' },
    { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/Banner1080-x-550-Alfond-Cafe-Banner-Design--v1-6x.jpg', text: 'Text for Image 1' },
    { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/Banner1080-x-550-John-Craig-Banner-Design-gigapixel-standard-v1-6x.jpg', text: 'Text for Image 1' },
    { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/Banner1080-x-550-Mead-Gardens-Banner-Design--v1-6x.jpg', text: 'Text for Image 1' },
    { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/Banner1080-x-550-Morse-Musem-Banner-Design-v1-6x.jpg', text: 'Text for Image 1' },
    { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/Banner1080-x-550-Prive-Banner-Design--v1-6x.jpg', text: 'Text for Image 1' },
    { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/Banner1080-x-550-Rollins-Art-Musem-Banner-Design-v1-6x.jpg', text: 'Text for Image 1' },
    { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/Banner1080-x-550-Scenic-Boat-Tour-Banner-Design-v1-6x.jpg', text: 'Text for Image 1' },
    // { src: 'https://aiconcierge.b-cdn.net/Banners/BannerFlutes%20Champagne%20Bar-gigapixel-standard-6x.png', text: 'Text for Image 1' },
    // { src: 'https://aiconcierge.b-cdn.net/Banners/BannerKadence-Banner-gigapixel-cgi-6x.png', text: 'Text for Image 1' },
    // { src: 'https://aiconcierge.b-cdn.net/Banners/BannerMaxines-Banners-gigapixel-cgi-6x.png', text: 'Text for Image 1' },
    // { src: "https://aiconcierge.b-cdn.net/Banners/BannerMorse%20Museum-gigapixel-standard-6x.png", text: 'Text for Image 1' },
    // { src: "https://aiconcierge.b-cdn.net/Banners/BannerRuth's%20Chris-gigapixel-standard-6x.png", text: 'Text for Image 1' },
    // { src: 'https://aiconcierge.b-cdn.net/Banners/Peterbrook%20BannerPeterbrooke%20Banner-gigapixel-compression-6x.png', text: 'Text for Image 1' },
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
    }, 4000); // Change 5000 to the desired interval in milliseconds
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="absolute bottom-[-70px] w-full h-[575px] font-quicksand border-t-2 border-black">
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
            className="w-full h-full object-cover"
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