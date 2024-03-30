import React from 'react';

// Individual amenity components
const CafeContent = ({ morningMenuLink, eveningMenuLink }) => (
  <>
    <h1 className="text-2xl font-bold text-gray-900 mb-4">THE CAFÉ AT THE ALFOND INN</h1>
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Morning Menu Daily:</h2>
      <p className="text-gray-600 mb-4">6:00 AM to 2:00 PM</p>
      <a href={morningMenuLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Café Morning Menu
      </a>
    </div>
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Evening Menu Daily:</h2>
      <p className="text-gray-600 mb-4">3:00 PM to 11:00 PM</p>
      <a href={eveningMenuLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Café Evening Menu
      </a>
    </div>
  </>
);

const HamiltonsKitchenContent = ({ brunchMenuLink, dinnerMenuLink }) => (
  <>
    <h1 className="text-2xl font-bold text-gray-900 mb-4">HAMILTON'S KITCHEN</h1>
    <h2 className="text-lg text-gray-800 mb-2">Modern Southern Cuisine</h2>
    <div className="mb-6">
      <h3 className="text-md font-semibold text-gray-800 mb-2">BREAKFAST & LUNCH</h3>
      <p className="text-gray-600 mb-4">Monday - Friday: 7:00 AM to 2:00 PM</p>
      <p className="text-gray-600 mb-4">Saturday - Sunday: 8:00 AM to 2:00 PM</p>
      <a href={brunchMenuLink} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Brunch Menu
      </a>
    </div>
    <div className="mb-6">
      <h3 className="text-md font-semibold text-gray-800 mb-2">HAPPY HOUR</h3>
      <p className="text-gray-600 mb-4">Monday - Friday: 4:00 PM to 7:00 PM</p>
      <p className="text-gray-600">Draft Beers | House Chardonnay | House Cabernet | Well Cocktails</p>
    </div>
    <div className="pt-4 border-t border-gray-200">
      <h3 className="text-md font-semibold text-gray-800 mb-2">DINNER</h3>
      <p className="text-gray-600 mb-4">Daily: 5:00 PM to 9:00 PM</p>
      <a href={dinnerMenuLink} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Dinner Menu
      </a>
    </div>
  </>
);

const LoungeContent = () => (
  <>
    <h1 className="text-2xl font-bold text-gray-900 mb-4">THE LOUNGE</h1>
    <h2 className="text-lg text-gray-800 mb-2">At Hamilton's Kitchen</h2>
    <div className="mb-6">
      <h3 className="text-md font-semibold text-gray-800 mb-2">The Lounge Hours:</h3>
      <p className="text-gray-600 mb-4">Sunday & Monday: 10:00 AM to 9:00 PM</p>
      <p className="text-gray-600 mb-4">Tuesday - Thursday: 10:00 AM to 10:00 PM</p>
      <p className="text-gray-600 mb-4">Friday & Saturday: 10:00 AM to 12:00 AM</p>
      <p className="text-gray-600">Please note that The Lounge offers a limited dining menu every day from 2 PM to 5 PM</p>
    </div>
  </>
);

const SpaContent = ({ spaMenuLink, bookTreatmentLink, buyGiftCardLink }) => (
  <>
    <h1 className="text-2xl font-bold text-gray-900 mb-4">THE SPA AT THE ALFOND INN</h1>
    <h2 className="text-lg text-gray-800 mb-2">ELEVATED ELEGANCE</h2>
    <p className="text-gray-600 mb-4">
      Enhance beauty and elevate wellness at The Spa at The Alfond Inn, Winter Park’s newest sought-after spa destination.
    </p>
    <div className="mb-6">
      <a href={spaMenuLink} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded block text-center mb-2">
        Spa Menu
      </a>
      <a href={bookTreatmentLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center mb-2">
        Book Treatment
      </a>
      <a href={buyGiftCardLink} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block text-center">
        Buy Gift Card
      </a>
    </div>
    <div className="pt-4 border-t border-gray-200">
      <h3 className="text-md font-semibold text-gray-800 mb-2">Spa Hours:</h3>
      <p className="text-gray-600">6:00 AM to 2:00 PM</p>
    </div>
  </>
);

const PoolContent = () => (
  <>
    <h1 className="text-2xl font-bold text-gray-900 mb-4">THE POOL AT THE ALFOND INN</h1>
    <h2 className="text-lg text-gray-800 mb-2">DIVE INTO TRANQUILLITY</h2>
    <p className="text-gray-600 mb-4">
      Our pool, an Oasis of Bliss, Where Cabanas Await to Elevate your Retreat
    </p>
    <div className="mb-6">
      <div className="flex flex-col items-start mb-4">
        <span className="flex items-center text-gray-800 mb-2">
          <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M3 3h18v18H3z"></path>
          </svg>
          Rooftop Pool
        </span>
        <span className="flex items-center text-gray-800 mb-2">
          <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          Pool / Beach Towels
        </span>
        <span className="flex items-center text-gray-800 mb-2">
          <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M3 3h18v18H3z"></path>
          </svg>
          Heated Pool
        </span>
        <span className="flex items-center text-gray-800 mb-2">
          <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          Cabana Rentals
        </span>
      </div>
    </div>
    <div className="pt-4 border-t border-gray-200">
      <h3 className="text-md font-semibold text-gray-800 mb-2">Pool Hours:</h3>
      <p className="text-gray-600">8:00 AM to Dusk</p>
    </div>
  </>
);

const FitnessCenterContent = () => (
  <>
    <h1 className="text-2xl font-bold text-gray-900 mb-4">THE ALFOND INN FITNESS CENTER</h1>
    <h2 className="text-lg text-gray-800 mb-2">ELEVATE YOUR DAY ENERGIZE YOUR STAY</h2>
    <p className="text-gray-600 mb-4">
      Dive in to our Exclusive Fitness Experience
    </p>
    <div className="flex items-center text-gray-800 mb-6">
      <svg className="h-6 w-6 text-red-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M21 20V6a2 2 0 00-2-2h-6a2 2 0 00-2 2v14m8-8H7m4 0V6a2 2 0 00-2-2H3a2 2 0 00-2 2v14"></path>
      </svg>
      Inside the Spa
    </div>
    <div className="pt-4 border-t border-gray-200">
      <h3 className="text-md font-semibold text-gray-800 mb-2">Fitness Center Hours:</h3>
      <p className="text-gray-600">6:00 AM to 10:00 PM</p>
    </div>
  </>
);

const renderSwitch = (param) => {
  switch (param) {
    case 'The Cafe':
      return <CafeContent morningMenuLink="/morning-menu" eveningMenuLink="/evening-menu" />;
    case 'Hamiltons Kitchen':
      return <HamiltonsKitchenContent brunchMenuLink="/brunch-menu" dinnerMenuLink="/dinner-menu" />;
      case 'The Lounge':
        return <LoungeContent />;
      case 'The Spa':
        return <SpaContent 
                  spaMenuLink="/spa-menu" 
                  bookTreatmentLink="/book-treatment"
                  buyGiftCardLink="/buy-gift-card" 
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
    <div className="bg-white rounded-lg shadow-lg p-6 mt-12">
      {renderSwitch(selectedActivityId[0])}
    </div>
  );
};

export default HotelAmenityDisplay;
