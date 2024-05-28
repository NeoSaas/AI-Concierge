import React, { useState, useCallback, useMemo } from 'react';
import Form from './Form';
import Typewriter from 'typewriter-effect';
import HotelForm from './hotel specific/HotelForm';
import { useAppContext } from '../AppContext';

function Header() {
  const { suggestedDisplayed, setSuggestedDisplayed, isOpen, setIsOpen, setRestaurantLink, setIsRestaurant, setClickedBusiness, setIsHotelSpecific, isHotelSpecific, isItinerary, setIsItinerary, toPage, setToPage} = useAppContext();
  const [loadingOptions, setLoadingOptions] = useState(false);
  const [displayOptions, setDisplayOptions] = useState(false);

  const words = useMemo(() => [
    'Bars and Nightlife',
    'Local Restaurants',
    'Local Attractions',
    'Cultural Experiences',
    'Shopping Districts',
    'Day Tours',
    'Outdoor Activities',
    'Fitness Centers',
    'Golf Courses',
    'Art Galleries',
    'Boat Rentals or Cruises',
    'Bicycle Rentals',
    'Cooking Classes',
    'Photography Services',
    'Local Markets',
    'Event Ticketing',
    'Pet Services'
  ], []);

  const handleSetIsHotelSpecific = useCallback(() => {
    setIsHotelSpecific(prev => !prev);
  }, [setIsHotelSpecific]);

  return (
    <div className={toPage || displayOptions ? "py-1 flex justify-center items-center flex-col bg-white rounded-[2.5rem] absolute mb-10" : "py-10 flex justify-center mb-[334px] items-center flex-col bg-white rounded-[2.5rem] absolute"}>
      <div className='z-40 text-center mx-16'>
        {!suggestedDisplayed && (
          <>
            <p className="font-cursive font-thin text-5xl text-black my-1">Discover Winter Park, Florida</p>
            <h1 className="font-quicksand text-6xl font-thin text-black flex flex-col text-wrap">Let AI-Concierge find the
              <span style={{ color: '#B60C03', marginLeft: '6px' }}>
                <Typewriter
                  options={{
                    typeSpeed: 80,
                    strings: words,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span> for you
            </h1>
          </>
        )}
        <div className={suggestedDisplayed ? `flex` : `mt-6 flex`}>
          {isHotelSpecific ? (
            <div className='flex flex-col'>
              <p className='text-3xl font-quicksand font-semibold'>{suggestedDisplayed ? "" : "Hotel Amenities"}</p>
              <HotelForm isOpen={isOpen} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink} setSuggestedDisplayed={setSuggestedDisplayed}/>
            </div>
          ) : (
            <div className='flex flex-col'>
              <p className='text-3xl font-quicksand font-semibold'>{suggestedDisplayed ? "" : "Winter Park"}</p>
              <Form isOpen={isOpen} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant} setClickedBusiness={setClickedBusiness} setSuggestedDisplayed={setSuggestedDisplayed} setLoadingOptions={setLoadingOptions} displayOptions={displayOptions} setDisplayOptions={setDisplayOptions} />
            </div>
          )}
        </div>
        {!suggestedDisplayed && (
          <div className={isHotelSpecific ? 'w-full h-auto flex flex-row justify-center mt-[-86px]' : 'w-full h-auto flex flex-row justify-center mt-[9px]'}>
            {!loadingOptions && (
              <div className='w-full flex flex-row justify-between mx-4 pt-[1.6rem]'>
                <a href="/" className={isHotelSpecific ? 'relative px-7 py-3 border-[3px] border-[#5C0601] bg-[#5C0601] text-2xl text-white font-semibold rounded-full' : 'relative font-semibold px-16 py-3 border-[3px] border-[#5C0601] bg-[#5C0601] text-2xl text-white rounded-full'}>Back to Home</a>
                <button onClick={handleSetIsHotelSpecific} className={isHotelSpecific ? "bg-[#5C0601] relative text-white font-semibold px-10 py-3 border-[3px] border-[#5C0601] rounded-full text-2xl" : "bg-[#5C0601] text-white font-semibold border-[3px] border-[#5C0601] px-8 py-1 rounded-full mt-0 text-2xl"}>{isHotelSpecific ? "Winter Park" : "Alfond Inn Amenities"}</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
