import React, { useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';

const images = [
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-Albin-Polaske-Musem-Banner-Design-v1-6x_3_IMGCentury.jpg', text: 'Text for Image 1' },
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-Alfond-Cafe-Banner-Design--v1-6x_4_IMGCentury.jpg', text: 'Text for Image 1' },
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-John-Craig-Banner-Design-gigapixel-standard-v1-6x_5_IMGCentury.jpg', text: 'Text for Image 1' },
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-Mead-Gardens-Banner-Design--v1-6x_6_IMGCentury.jpg', text: 'Text for Image 1' },
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-Morse-Musem-Banner-Design-v1-6x_7_IMGCentury.jpg', text: 'Text for Image 1' },
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-Prive-Banner-Design--v1-6x_8_IMGCentury.jpg', text: 'Text for Image 1' },
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-Rollins-Art-Musem-Banner-Design-v1-6x_1_IMGCentury.jpg', text: 'Text for Image 1' },
  { src: 'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Below%20Banner%201080%20x%20550%20used%20in%20Website/IMGCentury_compressed%20(6)/IMGCentury_compressed/Banner1080-x-550-Scenic-Boat-Tour-Banner-Design-v1-6x_2_IMGCentury.jpg', text: 'Text for Image 1' },
];

const BottomBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [compressedImages, setCompressedImages] = useState([]);

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

  // useEffect(() => {
  //   const compressImages = async () => {
  //     const promises = images.map(async (image) => {
  //       try {
  //         const response = await fetch(image.src, { mode: 'cors' });
  //         const blob = await response.blob();
  //         const compressedBlob = await imageCompression(blob, {
  //           maxSizeMB: 0.5,
  //           maxWidthOrHeight: 1080,
  //           useWebWorker: true,
  //         });
  //         const compressedUrl = URL.createObjectURL(compressedBlob);
  //         return { src: compressedUrl, text: image.text };
  //       } catch (error) {
  //         console.error('Error compressing image:', error);
  //         return image; // Return the original image if compression fails
  //       }
  //     });

  //     try {
  //       const results = await Promise.all(promises);
  //       setCompressedImages(results);
  //     } catch (error) {
  //       console.error('Error processing images:', error);
  //     }
  //   };

  //   compressImages();
  // }, []);

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

