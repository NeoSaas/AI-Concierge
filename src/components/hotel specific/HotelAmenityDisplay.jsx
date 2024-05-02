import React from 'react';
import QRCode from "react-qr-code";
import Modal from 'react-modal';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// Individual amenity components
const CafeContent = ({ morningMenuLink, eveningMenuLink, setRestaurantLink, isOpen, setIsOpen  }) => (
  <>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">THE CAFÉ AT THE ALFOND INN</h1>
    <div className='w-[45rem] h-[45rem]'>
      <Slide>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Cafe%20Images%20%20to%20be%20used%20in%20Website/Adjusted-1-gigapixel-high-fidelity-v2-4x.jpg' alt="pic1" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Cafe%20Images%20%20to%20be%20used%20in%20Website/Adjusted-2-gigapixel-high-fidelity-v2-4x.jpg' alt="pic2" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Cafe%20Images%20%20to%20be%20used%20in%20Website/Adjusted-3-gigapixel-high-fidelity-v2-4x.jpg' alt="pic3" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Cafe%20Images%20%20to%20be%20used%20in%20Website/Adjusted-4-gigapixel-high-fidelity-v2-4x.jpg' alt="pic4" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Cafe%20Images%20%20to%20be%20used%20in%20Website/Adjusted-5-gigapixel-high-fidelity-v2-4x.jpg' alt="pic5" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Cafe%20Images%20%20to%20be%20used%20in%20Website/Ajudted-6-gigapixel-high-fidelity-v2-4x.jpg' alt="pic6" className='h-[720px] w-[720px]'/>
        </div>
      </Slide>
    </div>
    <div className="mb-6 mt-12 text-3xl">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Morning Menu Daily:</h2>
      <p className="text-gray-600 mb-4 text-3xl ">6:00 AM to 2:00 PM</p>
      <button onClick={() => {setIsOpen(true); setRestaurantLink(morningMenuLink)}} className="bg-[#5C0601] text-white font-bold py-2 w-full px-4 rounded-[1.5rem]">
        Café Morning Menu
      </button>
    </div>
    <div className="mb-6 text-3xl">
      <h2 className="text-3xl  font-semibold text-gray-800 mb-2">Evening Menu Daily:</h2>
      <p className="text-gray-600 mb-4 ">3:00 PM to 11:00 PM</p>
      <button onClick={() => {setIsOpen(true); setRestaurantLink(eveningMenuLink)}} className="bg-[#5C0601] text-white font-bold w-full py-2 px-4 rounded-[1.5rem]">
        Café Evening Menu
      </button>
    </div>
  </>
);

const HamiltonsKitchenContent = ({ brunchMenuLink, dinnerMenuLink, setRestaurantLink, isOpen, setIsOpen  }) => (
  <div className='max-w-[60rem] max-h-[95rem]'>
    <h1 className="text-3xl font-bold text-gray-900 mb-4">HAMILTON'S KITCHEN</h1>
    <div className='w-[32rem] h-[32rem] mx-auto'>
      <Slide>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Hamilton%20Kitchen%20images%20to%20be%20used%20in%20website/Adjusted-1-gigapixel-high-fidelity-v2-4x.jpg' alt="pic1" className='h-[512px] w-[512px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Hamilton%20Kitchen%20images%20to%20be%20used%20in%20website/Adjusted-2-gigapixel-high-fidelity-v2-4x.jpg' alt="pic2" className='h-[512px] w-[512px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Hamilton%20Kitchen%20images%20to%20be%20used%20in%20website/Adjusted-3-gigapixel-high-fidelity-v2-4x.jpg' alt="pic3" className='h-[512px] w-[512px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Hamilton%20Kitchen%20images%20to%20be%20used%20in%20website/Adjusted-4-gigapixel-high-fidelity-v2-4x.jpg' alt="pic4" className='h-[512px] w-[512px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Hamilton%20Kitchen%20images%20to%20be%20used%20in%20website/Adjusted-5-gigapixel-high-fidelity-v2-4x.jpg' alt="pic5" className='h-[512px] w-[512px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Hamilton%20Kitchen%20images%20to%20be%20used%20in%20website/Adjusted-6-gigapixel-high-fidelity-v2-4x.jpg' alt="pic6" className='h-[512px] w-[512px]'/>
        </div>
      </Slide>
    </div>
    <h2 className="text-2xl text-gray-800 mb-2 mt-2">Modern Southern Cuisine</h2>
    <div className="mb-6 text-2xl">
      <h3 className="text-md font-semibold text-gray-800 mb-2">BREAKFAST & LUNCH</h3>
      <p className="text-gray-600 mb-4 ">Monday - Friday: 7:00 AM to 2:00 PM</p>
      <p className="text-gray-600 mb-4 ">Saturday - Sunday: 8:00 AM to 2:00 PM</p>
      <button onClick={() => {setIsOpen(true); setRestaurantLink(brunchMenuLink)}} className="bg-[#5C0601] text-white font-bold py-2 px-4 w-[70%] rounded-[1.5rem]">
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
      <button onClick={() => {setIsOpen(true); setRestaurantLink(dinnerMenuLink)}} className="bg-[#5C0601] text-white font-bold py-2 px-4 w-[70%] rounded-[1.5rem]">
        Dinner Menu
      </button>
    </div>
  </div>
);

const LoungeContent = () => (
  <div className='max-w-[55rem]'>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">THE LOUNGE</h1>
    <div className='w-[45rem] h-[45rem] mx-auto '>
      <Slide>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Lounge%20images%20used%20in%20website/Adjusted-1-gigapixel-high-fidelity-v2-4x.jpg' alt="pic1" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Lounge%20images%20used%20in%20website/Adjusted-2-gigapixel-high-fidelity-v2-4x.jpg' alt="pic2" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Lounge%20images%20used%20in%20website/Adjusted-3-gigapixel-high-fidelity-v2-4x.jpg' alt="pic3" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Lounge%20images%20used%20in%20website/Adjusted-4-gigapixel-high-fidelity-v2-4x.jpg' alt="pic4" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Lounge%20images%20used%20in%20website/Adjusted-5-gigapixel-high-fidelity-v2-4x.jpg' alt="pic5" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Lounge%20images%20used%20in%20website/Adjusted-6-gigapixel-high-fidelity-v2-4x.jpg' alt="pic6" className='h-[720px] w-[720px]'/>
        </div>
      </Slide>
    </div>
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

const SpaContent = ({ spaMenuLink, bookTreatmentLink, buyGiftCardLink, setRestaurantLink, isOpen, setIsOpen  }) => (
  <div className='max-w-[55rem]'>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">THE SPA AT THE ALFOND INN</h1>
    <div className='w-[45rem] h-[45rem] mx-auto'>
      <Slide>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Spa%20images%20to%20be%20used%20in%20Website/Adjusted-Banner1-gigapixel-standard-v1-2x.jpg' alt="pic1" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Spa%20images%20to%20be%20used%20in%20Website/Adjusted-Banner2-gigapixel-standard-v1-2x.jpg' alt="pic2" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Spa%20images%20to%20be%20used%20in%20Website/Adjusted-Banner3-gigapixel-standard-v1-2x.jpg' alt="pic3" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Spa%20images%20to%20be%20used%20in%20Website/Adjusted-Banner4-gigapixel-standard-v1-2x.jpg' alt="pic4" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Spa%20images%20to%20be%20used%20in%20Website/Adjusted-Banner5-gigapixel-standard-v1-2x.jpg' alt="pic5" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Spa%20images%20to%20be%20used%20in%20Website/Adjusted-Banner6-gigapixel-standard-v1-2x.jpg' alt="pic6" className='h-[720px] w-[720px]'/>
        </div>
      </Slide>
    </div>
    <h2 className="text-3xl text-gray-800 mb-2 mt-12 font-semibold">ELEVATED ELEGANCE</h2>
    <p className="text-gray-600 mb-4 text-3xl">
      Enhance beauty and elevate wellness at The Spa at The Alfond Inn, Winter Park’s newest sought-after spa destination.
    </p>
    <div className="mb-6 text-3xl w-full flex flex-col justify-center ">
      <button onClick={() => {setIsOpen(true); setRestaurantLink(spaMenuLink)}} className="bg-[#5C0601] text-white font-bold py-2 px-4 rounded-[1.5rem] text-center mb-2">
        Spa Menu
      </button>
      <button onClick={() => {setIsOpen(true); setRestaurantLink(bookTreatmentLink)}} className="bg-[#5C0601] text-white font-bold py-2 px-4 rounded-[1.5rem] text-center mb-2">
        Book Treatment
      </button>
      <button onClick={() => {setIsOpen(true); setRestaurantLink(buyGiftCardLink)}} className="bg-[#5C0601] text-white font-bold py-2 px-4 rounded-[1.5rem] text-center">
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
    <div className='w-[45rem] h-[45rem] mx-auto'>
      <Slide>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/12x12%20Updated%20Pool%20by%20Raine/1.png' alt="pic1" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/12x12%20Updated%20Pool%20by%20Raine/2.png' alt="pic2" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/12x12%20Updated%20Pool%20by%20Raine/3.png' alt="pic3" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/12x12%20Updated%20Pool%20by%20Raine/4.png' alt="pic4" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/12x12%20Updated%20Pool%20by%20Raine/5.png' alt="pic5" className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/12x12%20Updated%20Pool%20by%20Raine/6.png' alt="pic6" className='h-[720px] w-[720px]'/>
        </div>
      </Slide>
    </div>
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
  <div className='mt-9'>
    <h1 className="text-4xl font-bold text-gray-900 mb-6">THE ALFOND INN FITNESS CENTER</h1>
    <h2 className="text-3xl text-gray-800 mb-6">ELEVATE YOUR DAY, ENERGIZE YOUR STAY</h2>
    <div className='w-[45rem] h-[45rem] mx-auto'>
      <Slide>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/1.png' className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/2.png' className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/3.png' className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/4.png' className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/5.png' className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/6.png' className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/7.png' className='h-[720px] w-[720px]'/>
        </div>
        <div className=' each-slide-effect flex justify-center items-center'> 
          <img src='https://aiconcierge.b-cdn.net/12x12%20Fitness%20Center/8.png' className='h-[720px] w-[720px]'/>
        </div>
      </Slide>
    </div>
    <p className="text-gray-600 mb-4 text-3xl mt-auto">
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

const renderSwitch = (selectedActivityId, setRestaurantLink, isOpen, setIsOpen) => {
  switch (selectedActivityId) {
    case 'The Cafe':
      return <CafeContent setRestaurantLink={setRestaurantLink} setIsOpen={setIsOpen} morningMenuLink='https://thealfondinn.com/hamiltons-kitchen/caf%C3%A9-morning-menu' eveningMenuLink="https://thealfondinn.com/hamiltons-kitchen/caf%C3%A9-evening-menu" />;
    case 'Hamiltons Kitchen':
      return <HamiltonsKitchenContent setRestaurantLink={setRestaurantLink} setIsOpen={setIsOpen} brunchMenuLink='https://thealfondinn.com/hamiltons-kitchen/caf%C3%A9-morning-menu' dinnerMenuLink='https://thealfondinn.com/hamiltons-kitchen/caf%C3%A9-evening-menu' />;
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

const HotelAmenityDisplay = ({ selectedActivityId, setRestaurantLink, isOpen, setIsOpen}) => {
  // console.log(selectedActivityId[0]);
  return (
    <div className="bg-white rounded-lg py-4 mb-10 font-quicksand">
      {renderSwitch(selectedActivityId[0], setRestaurantLink, isOpen, setIsOpen)}
    </div>
  );
};

export default HotelAmenityDisplay;
