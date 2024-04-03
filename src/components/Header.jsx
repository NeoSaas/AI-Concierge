import React from 'react'
import Form from './Form';
import Typewriter from 'typewriter-effect';
import HotelForm from './hotel specific/HotelForm';

function Header({ isOpen, setIsOpen, setRestaurantLink, setIsRestaurant, setClickedBusiness, setCardId, setIsHotelSpecific, isHotelSpecific}) {
  const [suggestedDisplayed, setSuggestedDisplayed] = React.useState(false);
  const [loadingOptions, setLoadingOptions] = React.useState(false);

  const words = [
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
  ];

  return (
    //bg-[url(/public/bgpattern.png)]
    <div className="py-20 flex justify-center items-center flex-col bg-white rounded-[2.5rem] absolute">
        <div className='z-40 text-center mx-16'>                                                                   
          {!suggestedDisplayed ? 
            <>
              <p className="font-cursive font-thin text-5xl text-black my-4">Discover Winter Park, Florida</p>
              <h1 className=" font-quicksand text-6xl font-thin text-black flex flex-col text-wrap">Let AI-Concierge find the   
              <span style={{ color: '#B60C03', marginLeft: '6px'}}>
              <Typewriter
                  options={{
                    typeSpeed: 90,
                    strings: words,
                    autoStart: true,
                    loop: true,
                  }}
                  />
              </span>for you</h1>
            </> : null}
            <div className={suggestedDisplayed ? `flex` : `mt-12 flex`}>
              {isHotelSpecific ? <div className='flex flex-col'><p className=' text-2xl font-quicksand font-semibold'>{suggestedDisplayed ? "": "Hotel Amenities"}</p> <HotelForm isOpen={isOpen} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink} setSuggestedDisplayed={setSuggestedDisplayed}/> </div> : <div className='flex flex-col'><p className=' text-2xl font-quicksand font-semibold'>{suggestedDisplayed ? "" : "Local Businesses"}</p> <Form isOpen={isOpen} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant} setClickedBusiness={setClickedBusiness} setSuggestedDisplayed={setSuggestedDisplayed} setLoadingOptions={setLoadingOptions}/></div>}
            </div>
            {!suggestedDisplayed ? 
              <div className={isHotelSpecific? 'w-full h-auto flex flex-row justify-center mt-[-86px]' : 'w-full h-auto flex flex-row justify-center mt-[20px]' }>
                {loadingOptions ? null : <><button onClick={isHotelSpecific ? (() => setIsHotelSpecific(false)) :(() => setIsHotelSpecific(true))} className={isHotelSpecific ? " bg-[#5C0601] relative left-44 text-white font-medium py-1 border-[3px] border-[#5C0601] px-4 rounded-lg mt-10 text-2xl mx-5" : " bg-[#5C0601] text-white font-medium py-1 border-[3px] border-[#5C0601] px-4 rounded-lg mt-0 text-2xl mx-"}>{isHotelSpecific ? "Local Businesses" : "Alfond Inn Amenities"}</button></>}
              </div> 
              : 
              null
            }
            
            
        </div>
    </div>
  )
}

export default Header