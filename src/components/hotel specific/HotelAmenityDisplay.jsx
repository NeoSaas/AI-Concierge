import React, { useState, useEffect, useMemo, useCallback } from 'react';
import QRCode from "react-qr-code";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useAppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';

// Define image arrays
const imagesCafe = [
  'https://aiconcierge.b-cdn.net/Cafe%20Images%20%20to%20be%20used%20in%20Website/IMGCentury_compressed/Adjusted-1-gigapixel-high-fidelity-v2-4x_1_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Cafe%20Images%20%20to%20be%20used%20in%20Website/IMGCentury_compressed/Adjusted-2-gigapixel-high-fidelity-v2-4x_2_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Cafe%20Images%20%20to%20be%20used%20in%20Website/IMGCentury_compressed/Adjusted-3-gigapixel-high-fidelity-v2-4x_3_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Cafe%20Images%20%20to%20be%20used%20in%20Website/IMGCentury_compressed/Adjusted-4-gigapixel-high-fidelity-v2-4x_4_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Cafe%20Images%20%20to%20be%20used%20in%20Website/IMGCentury_compressed/Adjusted-5-gigapixel-high-fidelity-v2-4x_5_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Cafe%20Images%20%20to%20be%20used%20in%20Website/IMGCentury_compressed/Ajudted-6-gigapixel-high-fidelity-v2-4x_6_IMGCentury.jpg'
];

const imagesHamiltonsKitchen = [
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Hamilton%20Kitchen%20images%20to%20be%20used%20in%20website/IMGCentury_compressed/Adjusted-1-gigapixel-high-fidelity-v2-4x_1_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Hamilton%20Kitchen%20images%20to%20be%20used%20in%20website/IMGCentury_compressed/Adjusted-2-gigapixel-high-fidelity-v2-4x_2_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Hamilton%20Kitchen%20images%20to%20be%20used%20in%20website/IMGCentury_compressed/Adjusted-3-gigapixel-high-fidelity-v2-4x_3_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Hamilton%20Kitchen%20images%20to%20be%20used%20in%20website/IMGCentury_compressed/Adjusted-4-gigapixel-high-fidelity-v2-4x_4_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Hamilton%20Kitchen%20images%20to%20be%20used%20in%20website/IMGCentury_compressed/Adjusted-5-gigapixel-high-fidelity-v2-4x_5_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Hamilton%20Kitchen%20images%20to%20be%20used%20in%20website/IMGCentury_compressed/Adjusted-6-gigapixel-high-fidelity-v2-4x_6_IMGCentury.jpg'
];

const imagesLounge = [
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Lounge%20images%20used%20in%20website/IMGCentury_compressed/Adjusted-1-gigapixel-high-fidelity-v2-4x_6_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Lounge%20images%20used%20in%20website/IMGCentury_compressed/Adjusted-2-gigapixel-high-fidelity-v2-4x_1_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Lounge%20images%20used%20in%20website/IMGCentury_compressed/Adjusted-3-gigapixel-high-fidelity-v2-4x_2_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Lounge%20images%20used%20in%20website/IMGCentury_compressed/Adjusted-4-gigapixel-high-fidelity-v2-4x_3_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Lounge%20images%20used%20in%20website/IMGCentury_compressed/Adjusted-5-gigapixel-high-fidelity-v2-4x_4_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Lounge%20images%20used%20in%20website/IMGCentury_compressed/Adjusted-6-gigapixel-high-fidelity-v2-4x_5_IMGCentury.jpg'
];

const imagesSpa = [
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Spa%20images%20to%20be%20used%20in%20Website/IMGCentury_compressed%20(4)/IMGCentury_compressed/Adjusted-Banner1-gigapixel-standard-v1-2x_1_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Spa%20images%20to%20be%20used%20in%20Website/IMGCentury_compressed%20(4)/IMGCentury_compressed/Adjusted-Banner2-gigapixel-standard-v1-2x_2_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Spa%20images%20to%20be%20used%20in%20Website/IMGCentury_compressed%20(4)/IMGCentury_compressed/Adjusted-Banner3-gigapixel-standard-v1-2x_3_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Spa%20images%20to%20be%20used%20in%20Website/IMGCentury_compressed%20(4)/IMGCentury_compressed/Adjusted-Banner4-gigapixel-standard-v1-2x_4_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Spa%20images%20to%20be%20used%20in%20Website/IMGCentury_compressed%20(4)/IMGCentury_compressed/Adjusted-Banner5-gigapixel-standard-v1-2x_5_IMGCentury.jpg',
  'https://aiconcierge.b-cdn.net/Alfond%20Inn%20Spa%20images%20to%20be%20used%20in%20Website/IMGCentury_compressed%20(4)/IMGCentury_compressed/Adjusted-Banner6-gigapixel-standard-v1-2x_6_IMGCentury.jpg'
];

const imagesPool = [
  'https://aiconcierge.b-cdn.net/12x12%20Updated%20Pool%20by%20Raine/2.png',
  'https://aiconcierge.b-cdn.net/12x12%20Updated%20Pool%20by%20Raine/1.png',
  'https://aiconcierge.b-cdn.net/12x12%20Updated%20Pool%20by%20Raine/3.png',
  'https://aiconcierge.b-cdn.net/12x12%20Updated%20Pool%20by%20Raine/4.png',
  'https://aiconcierge.b-cdn.net/12x12%20Updated%20Pool%20by%20Raine/5.png',
  'https://aiconcierge.b-cdn.net/12x12%20Updated%20Pool%20by%20Raine/6.png'
];

const imagesFitnessCenter = [
  'https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/compressed/1_1_IMGCentury.png',
  'https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/compressed/2_2_IMGCentury.png',
  'https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/compressed/3_3_IMGCentury.png',
  'https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/compressed/4_4_IMGCentury.png',
  'https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/compressed/5_5_IMGCentury.png',
  'https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/compressed/6_6_IMGCentury.png',
  'https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/compressed/7_7_IMGCentury.png'
];



const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images]);

  const prevSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change 5000 to the desired interval in milliseconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className='w-full h-[40rem] mx-auto flex justify-center items-center'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-[40rem] h-[40rem] ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-fill"
          />
        </div>
      ))}
      {/* Navigation Buttons */}
      <div className='flex w-full justify-between'>
        <button
          onClick={prevSlide}
          className="mt-16 transform -translate-y-1/2 p-2 py-6 bg-black bg-opacity-50 text-white rounded-full focus:outline-none text-3xl"
        >
          {'<'}
        </button>
        <button
          onClick={nextSlide}
          className="mt-16 transform -translate-y-1/2 p-2 py-6 bg-black bg-opacity-50 text-white rounded-full focus:outline-none text-3xl"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

const CafeContent = ({ morningMenuLink, eveningMenuLink, setRestaurantLink, setIsOpen }) => (
  <div className='mx-24'>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">THE CAFÉ AT THE ALFOND INN</h1>
    <ImageSlider images={imagesCafe} />
    <div className="mb-6 mt-12 text-3xl">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Morning Menu Daily:</h2>
      <p className="text-gray-600 mb-4 text-3xl ">6:00 AM to 2:00 PM</p>
      <button onClick={() => { setIsOpen(true); setRestaurantLink(morningMenuLink) }} className="bg-[#5C0601] text-white font-bold py-2 w-full px-4 rounded-[1.5rem]">
        Café Morning Menu
      </button>
    </div>
    <div className="mb-6 text-3xl">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Evening Menu Daily:</h2>
      <p className="text-gray-600 mb-4 ">3:00 PM to 11:00 PM</p>
      <button onClick={() => { setIsOpen(true); setRestaurantLink(eveningMenuLink) }} className="bg-[#5C0601] text-white font-bold w-full py-2 px-4 rounded-[1.5rem]">
        Café Evening Menu
      </button>
    </div>
  </div>
);

const HamiltonsKitchenContent = ({ brunchMenuLink, dinnerMenuLink, setRestaurantLink, setIsOpen }) => (
  <div className='max-w-[60rem] max-h-[80rem]'>
    <h1 className="text-3xl font-bold text-gray-900 mb-4">HAMILTON'S KITCHEN</h1>
    <ImageSlider images={imagesHamiltonsKitchen} />
    <h2 className="text-2xl text-gray-800 mb-2 mt-2">Modern Southern Cuisine</h2>
    <div className="mb-6 text-2xl">
      <h3 className="text-md font-semibold text-gray-800 mb-2">BREAKFAST & LUNCH</h3>
      <p className="text-gray-600 mb-4 ">Monday - Friday: 7:00 AM to 2:00 PM</p>
      <p className="text-gray-600 mb-4 ">Saturday - Sunday: 8:00 AM to 2:00 PM</p>
      <button onClick={() => { setIsOpen(true); setRestaurantLink(brunchMenuLink) }} className="bg-[#5C0601] text-white font-bold py-2 px-4 w-[70%] rounded-[1.5rem]">
        Brunch Menu
      </button>
    </div>
    <div className="mb-6 text-2xl">
      <h3 className="text-3xl font-semibold text-gray-800 mb-2">HAPPY HOUR</h3>
      <p className="text-gray-600 mb-4 ">Monday - Friday: 4:00 PM to 7:00 PM</p>
      <p className="text-gray-600 ">Draft Beers | House Chardonnay | House Cabernet | Well Cocktails</p>
    </div>
    <div className="pt-4 border-t border-gray-200 text-2xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">DINNER</h3>
      <p className="text-gray-600 mb-4">Daily: 5:00 PM to 9:00 PM</p>
      <button onClick={() => { setIsOpen(true); setRestaurantLink(dinnerMenuLink) }} className="bg-[#5C0601] text-white font-bold py-2 px-4 w-[70%] rounded-[1.5rem]">
        Dinner Menu
      </button>
    </div>
  </div>
);

const LoungeContent = () => (
  <div className='max-w-[55rem]'>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">THE LOUNGE</h1>
    <ImageSlider images={imagesLounge} />
    <h2 className="text-3xl text-gray-800 mb-2 mt-12">At Hamilton's Kitchen</h2>
    <div className="mb-3 text-3xl flex flex-col justify-center ">
      <h3 className="text-md font-semibold text-gray-800 mb-2 ">The Lounge Hours:</h3>
      <p className="text-gray-600 mb-4 relative">Sunday & Monday: 10:00 AM to 9:00 PM</p>
      <p className="text-gray-600 mb-4 ">Tuesday - Thursday: 10:00 AM to 10:00 PM</p>
      <p className="text-gray-600 mb-4 ">Friday & Saturday: 10:00 AM to 12:00 AM</p>
      <p className="text-gray-600 ">Please note that The Lounge offers a limited dining menu every day from 2 PM to 5 PM</p>
    </div>
  </div>
);

const SpaContent = ({ spaMenuLink, bookTreatmentLink, buyGiftCardLink, setRestaurantLink, setIsOpen }) => (
  <div className='max-w-[55rem]'>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">THE SPA AT THE ALFOND INN</h1>
    <ImageSlider images={imagesSpa} />
    <h2 className="text-3xl text-gray-800 mb-2 mt-12 font-semibold">ELEVATED ELEGANCE</h2>
    <p className="text-gray-600 mb-4 text-3xl">
      Enhance beauty and elevate wellness at The Spa at The Alfond Inn, Winter Park’s newest sought-after spa destination.
    </p>
    <div className="mb-6 text-3xl w-full flex flex-col justify-center ">
      <button onClick={() => { setIsOpen(true); setRestaurantLink(spaMenuLink) }} className="bg-[#5C0601] text-white font-bold py-2 px-4 rounded-[1.5rem] text-center mb-2">
        Spa Menu
      </button>
      <button onClick={() => { setIsOpen(true); setRestaurantLink(bookTreatmentLink) }} className="bg-[#5C0601] text-white font-bold py-2 px-4 rounded-[1.5rem] text-center mb-2">
        Book Treatment
      </button>
      <button onClick={() => { setIsOpen(true); setRestaurantLink(buyGiftCardLink) }} className="bg-[#5C0601] text-white font-bold py-2 px-4 rounded-[1.5rem] text-center">
        Buy Gift Card
      </button>
    </div>
    <div className="pt-4 border-t border-gray-200 text-3xl">
      <h3 className="text-md font-semibold text-gray-800 mb-2">Spa Hours:</h3>
      <p className="text-gray-600">6:00 AM to 2:00 PM</p>
    </div>
  </div>
);

const PoolContent = () => (
  <div className='max-w-[57rem]'>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">THE POOL AT THE ALFOND INN</h1>
    <ImageSlider images={imagesPool} />
    <h2 className="text-3xl text-gray-800 mb-2 mt-12 font-semibold">DIVE INTO TRANQUILLITY</h2>
    <p className="text-gray-600 mb-4 text-3xl">
      Our pool, an Oasis of Bliss, Where Cabanas Await to Elevate your Retreat
    </p>
    <div className="mb-6 text-2xl">
      <div className="flex flex-row items-center justify-center mb-4">
        <span className="flex items-center text-gray-800 mb-2 mx-2">
          Rooftop Pool,
        </span>
        <span className="flex items-center text-gray-800 mb-2 mx-2">
          Pool / Beach Towels,
        </span>
        <span className="flex items-center text-gray-800 mb-2 mx-2">
          Heated Pool,
        </span>
        <span className="flex items-center text-gray-800 mb-2 mx-2">
          Cabana Rentals
        </span>
      </div>
    </div>
    <div className="pt-4 border-t border-gray-200 text-3xl">
      <h3 className="text-md font-semibold text-gray-800 mb-2">Pool Hours:</h3>
      <p className="text-gray-600">8:00 AM to Dusk</p>
    </div>
  </div>
);

const FitnessCenterContent = () => (
  <div className='mt-9 mx-16'>
    <h1 className="text-4xl font-bold text-gray-900 mb-6">THE ALFOND INN FITNESS CENTER</h1>
    <h2 className="text-3xl text-gray-800 mb-6">ELEVATE YOUR DAY, ENERGIZE YOUR STAY</h2>
    <ImageSlider images={imagesFitnessCenter} />
    <p className="text-gray-600 mb-4 text-3xl mt-12">
      Dive in to our Exclusive Fitness Experience
    </p>
    <div className="flex items-center justify-center text-gray-800 mb-6">
      <p className='text-3xl'>Inside the Spa</p>
    </div>
    <div className="pt-4 border-t border-gray-200 text-3xl">
      <h3 className="text-md font-semibold text-gray-800 mb-2">Fitness Center Hours:</h3>
      <p className="text-gray-600">6:00 AM to 10:00 PM</p>
    </div>
  </div>
);

const handleBack = ( setImageBasedHotelAmenity, navigate, setIsHotelSpecific, setToPage, setSuggestedDisplayed ) => {
  setImageBasedHotelAmenity(false);
  setToPage(false);
  setSuggestedDisplayed(false);
  setIsHotelSpecific(true);
  navigate('/home');
};

const renderSwitch = (selectedActivityId, setRestaurantLink, setIsOpen) => {
  switch (selectedActivityId) {
    case 'The Cafe':
      return <CafeContent setRestaurantLink={setRestaurantLink} setIsOpen={setIsOpen} morningMenuLink='https://thealfondinn.com/hamiltons-kitchen/caf%C3%A9-morning-menu' eveningMenuLink="https://thealfondinn.com/hamiltons-kitchen/caf%C3%A9-evening-menu" />;
    case 'Hamiltons Kitchen':
      return <HamiltonsKitchenContent setRestaurantLink={setRestaurantLink} setIsOpen={setIsOpen} brunchMenuLink='https://thealfondinn.com/hamiltons-kitchen/brunch' dinnerMenuLink='https://thealfondinn.com/hamiltons-kitchen/dinner' />;
    case 'The Lounge':
      return <LoungeContent />;
    case 'The Spa':
      return <SpaContent 
                spaMenuLink="'https://na.spatime.com/tai32789/5228842/home'" 
                bookTreatmentLink='https://qrco.de/bebESs'
                buyGiftCardLink='https://tai32789.na.book4time.com/spagift/' 
                setRestaurantLink={setRestaurantLink} setIsOpen={setIsOpen} 
                />;
    case 'The Pool':
      return <PoolContent />;
    case 'Fitness Center':
      return <FitnessCenterContent />;
    // ... Add more cases for different amenities as needed
    default:
      return <div>Default Content</div>;
  }
};

const HotelAmenityDisplay = ({ selectedActivityId, setRestaurantLink, setIsOpen}) => {
  const { imageBasedHotelAmenity, setImageBasedHotelAmenity, setIsHotelSpecific, setToPage, setSuggestedDisplayed } = useAppContext();
  const navigate = useNavigate();
  return(
    <div className="bg-white rounded-lg py-4 mb-5 font-quicksand">
      {imageBasedHotelAmenity ? renderSwitch(selectedActivityId, setRestaurantLink, setIsOpen) : renderSwitch(selectedActivityId[0], setRestaurantLink, setIsOpen)}
      {imageBasedHotelAmenity ? <button className=' bg-[#5C0601] relative py-2 px-4 w-full rounded-full text-white mx-auto text-3xl font-semibold mt-8' onClick={() => handleBack(setImageBasedHotelAmenity, navigate, setIsHotelSpecific, setToPage, setSuggestedDisplayed)}>Back to Start</button> : null}
    </div>
  );
};

export default HotelAmenityDisplay;

