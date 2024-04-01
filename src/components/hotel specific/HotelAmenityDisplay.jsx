import React from 'react';
import QRCode from "react-qr-code";
import Modal from 'react-modal';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// Individual amenity components
const CafeContent = ({ morningMenuLink, eveningMenuLink }) => (
  <>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">THE CAFÉ AT THE ALFOND INN</h1>
    <div className='w-[35rem] h-72'>
    <Slide>
      <div className=' each-slide-effect flex justify-center items-center'> 
         <img src='hotel/cafe1.jpg' className='h-80 w-max'/>
      </div>
      <div className=' each-slide-effect flex justify-center items-center'> 
         <img src='hotel/cafe2.jpg' className='h-80 w-max'/>
      </div>
      <div className=' each-slide-effect flex justify-center items-center'> 
         <img src='hotel/cafe3.jpg' className='h-80 w-max'/>
      </div>
      <div className=' each-slide-effect flex justify-center items-center'> 
         <img src='hotel/cafe4.png' className='h-80 w-max'/>
      </div>
      <div className=' each-slide-effect flex justify-center items-center'> 
         <img src='hotel/cafe5.jpg' className='h-80 w-max'/>
      </div>
      <div className=' each-slide-effect flex justify-center items-center'> 
         <img src='hotel/cafe6.png' className='h-80 w-max'/>
      </div>
    </Slide>
    </div>
    <div className="mb-6 mt-12 text-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Morning Menu Daily:</h2>
      <p className="text-gray-600 mb-4 text-xl ">6:00 AM to 2:00 PM</p>
      <a href={morningMenuLink} className="bg-[#5C0601] text-white font-bold py-2 px-4 rounded-[1.5rem]">
        Café Morning Menu
      </a>
    </div>
    <div className="mb-6 text-2xl">
      <h2 className="text-2xl  font-semibold text-gray-800 mb-2">Evening Menu Daily:</h2>
      <p className="text-gray-600 mb-4 ">3:00 PM to 11:00 PM</p>
      <a href={eveningMenuLink} className="bg-[#5C0601] text-white font-bold py-2 px-4 rounded-[1.5rem]">
        Café Evening Menu
      </a>
    </div>
  </>
);

const HamiltonsKitchenContent = ({ brunchMenuLink, dinnerMenuLink }) => (
  <>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">HAMILTON'S KITCHEN</h1>
    <div className='w-[35rem] h-72 mx-auto'>
      <Slide>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/kitchen1.jpg' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/kitchen2.jpg' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/kitchen3.jpg' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/kitchen4.jpg' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/kitchen5.jpg' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/kitchen6.jpg' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/kitchen7.jpg' className='h-80 w-max'/>
        </div>
      </Slide>
    </div>
    <h2 className="text-2xl text-gray-800 mb-2 mt-12">Modern Southern Cuisine</h2>
    <div className="mb-6 text-2xl">
      <h3 className="text-md font-semibold text-gray-800 mb-2">BREAKFAST & LUNCH</h3>
      <p className="text-gray-600 mb-4 ">Monday - Friday: 7:00 AM to 2:00 PM</p>
      <p className="text-gray-600 mb-4 ">Saturday - Sunday: 8:00 AM to 2:00 PM</p>
      <a href={brunchMenuLink} className="bg-[#5C0601] text-white font-bold py-2 px-4 rounded-[1.5rem]">
        Brunch Menu
      </a>
    </div>
    <div className="mb-6 text-2xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">HAPPY HOUR</h3>
      <p className="text-gray-600 mb-4 ">Monday - Friday: 4:00 PM to 7:00 PM</p>
      <p className="text-gray-600 ">Draft Beers | House Chardonnay | House Cabernet | Well Cocktails</p>
    </div>
    <div className="pt-4 border-t border-gray-200 text-xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">DINNER</h3>
      <p className="text-gray-600 mb-4">Daily: 5:00 PM to 9:00 PM</p>
      <a href={dinnerMenuLink} className="bg-[#5C0601] text-white text-2xl font-bold py-2 px-4 rounded-[1.5rem]">
        Dinner Menu
      </a>
    </div>
  </>
);

const LoungeContent = () => (
  <>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">THE LOUNGE</h1>
    <div className='w-[35rem] h-72 mx-auto'>
      <Slide>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/lounge1.jpg' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/loung2.jpg' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/lounge3.png' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/loung4.jpg' className='h-80 w-max'/>
        </div>
      </Slide>
    </div>
    <h2 className="text-2xl text-gray-800 mb-2 mt-12">At Hamilton's Kitchen</h2>
    <div className="mb-3">
      <h3 className="text-md font-semibold text-gray-800 mb-2 text-lg">The Lounge Hours:</h3>
      <p className="text-gray-600 mb-4 text-lg">Sunday & Monday: 10:00 AM to 9:00 PM</p>
      <p className="text-gray-600 mb-4 text-lg">Tuesday - Thursday: 10:00 AM to 10:00 PM</p>
      <p className="text-gray-600 mb-4 text-lg">Friday & Saturday: 10:00 AM to 12:00 AM</p>
      <p className="text-gray-600 text-lg">Please note that The Lounge offers a limited dining menu every day from 2 PM to 5 PM</p>
    </div>
  </>
);

const SpaContent = ({ spaMenuLink, bookTreatmentLink, buyGiftCardLink }) => (
  <div className='max-w-[50rem]'>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">THE SPA AT THE ALFOND INN</h1>
    <div className='w-[35rem] h-72 mx-auto'>
      <Slide>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/spa1.png' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/spa2.png' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/spa3.png' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/spa4.jpg' className='h-80 w-max'/>
        </div>
      </Slide>
    </div>
    <h2 className="text-2xl text-gray-800 mb-2 mt-12">ELEVATED ELEGANCE</h2>
    <p className="text-gray-600 mb-4">
      Enhance beauty and elevate wellness at The Spa at The Alfond Inn, Winter Park’s newest sought-after spa destination.
    </p>
    <div className="mb-6 text-2xl">
      <a href={spaMenuLink} className="bg-[#5C0601] text-white font-bold py-2 px-4 rounded-[1.5rem] block text-center mb-2">
        Spa Menu
      </a>
      <a href={bookTreatmentLink} className="bg-[#5C0601] text-white font-bold py-2 px-4 rounded-[1.5rem] block text-center mb-2">
        Book Treatment
      </a>
      <a href={buyGiftCardLink} className="bg-[#5C0601] text-white font-bold py-2 px-4 rounded-[1.5rem] block text-center">
        Buy Gift Card
      </a>
    </div>
    <div className="pt-4 border-t border-gray-200 text-2xl">
      <h3 className="text-md font-semibold text-gray-800 mb-2">Spa Hours:</h3>
      <p className="text-gray-600">6:00 AM to 2:00 PM</p>
    </div>
  </div>
);

const PoolContent = () => (
  <>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">THE POOL AT THE ALFOND INN</h1>
    <div className='w-[35rem] h-72 mx-auto'>
      <Slide>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/pool1.jpg' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/pool2.png' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/pool3.jpg' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/pool4.png' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/pool5.png' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/pool6.jpg' className='h-80 w-max'/>
        </div>
      </Slide>
    </div>
    <h2 className="text-2xl text-gray-800 mb-2 mt-12">DIVE INTO TRANQUILLITY</h2>
    <p className="text-gray-600 mb-4 text-xl">
      Our pool, an Oasis of Bliss, Where Cabanas Await to Elevate your Retreat
    </p>
    <div className="mb-6 text-2xl">
      <div className="flex flex-row items-center justify-center mb-4">
        <span className="flex items-center text-gray-800 mb-2 mx-2">
          
          Rooftop Pool
        </span>
        <span className="flex items-center text-gray-800 mb-2 mx-2">
          
          Pool / Beach Towels
        </span>
        <span className="flex items-center text-gray-800 mb-2 mx-2">
          
          Heated Pool
        </span>
        <span className="flex items-center text-gray-800 mb-2 mx-2">
          
          Cabana Rentals
        </span>
      </div>
    </div>
    <div className="pt-4 border-t border-gray-200 text-2xl">
      <h3 className="text-md font-semibold text-gray-800 mb-2">Pool Hours:</h3>
      <p className="text-gray-600">8:00 AM to Dusk</p>
    </div>
  </>
);

const FitnessCenterContent = () => (
  <>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">THE ALFOND INN FITNESS CENTER</h1>
    <h2 className="text-lg text-gray-800 mb-2">ELEVATE YOUR DAY ENERGIZE YOUR STAY</h2>
    <div className='w-[35rem] h-72 mx-auto'>
      <Slide>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/gym1.png' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/gym2.png' className='h-80 w-max'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='hotel/gym3.jpg' className='h-80 w-max'/>
        </div>
      </Slide>
    </div>
    <p className="text-gray-600 mb-4 text-2xl mt-12">
      Dive in to our Exclusive Fitness Experience
    </p>
    <div className="flex items-center justify-center text-gray-800 mb-6">
      <p className='text-2xl'>Inside the Spa</p>
    </div>
    <div className="pt-4 border-t border-gray-200 text-2xl">
      <h3 className="text-md font-semibold text-gray-800 mb-2">Fitness Center Hours:</h3>
      <p className="text-gray-600">6:00 AM to 10:00 PM</p>
    </div>
  </>
);

const renderSwitch = (param) => {
  switch (param) {
    case 'The Cafe':
      return <CafeContent morningMenuLink='https://thealfondinn.com/hamiltons-kitchen/caf%C3%A9-morning-menu' eveningMenuLink="https://thealfondinn.com/hamiltons-kitchen/caf%C3%A9-evening-menu" />;
    case 'Hamiltons Kitchen':
      return <HamiltonsKitchenContent brunchMenuLink='https://thealfondinn.com/hamiltons-kitchen/caf%C3%A9-morning-menu' dinnerMenuLink='https://thealfondinn.com/hamiltons-kitchen/caf%C3%A9-evening-menu' />;
    case 'The Lounge':
      return <LoungeContent />;
    case 'The Spa':
      return <SpaContent 
                spaMenuLink="'https://na.spatime.com/tai32789/5228842/home'" 
                bookTreatmentLink='https://qrco.de/bebESs'
                buyGiftCardLink='https://tai32789.na.book4time.com/spagift/' 
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

const HotelAmenityDisplay = ({ selectedActivityId }) => {
  console.log(selectedActivityId[0]);
  return (
    <div className="bg-white rounded-lg p-6 mt-12 font-quicksand">
      {renderSwitch(selectedActivityId[0])}
    </div>
  );
};

export default HotelAmenityDisplay;
