import React from 'react'
import Form from './Form';
import Typewriter from 'typewriter-effect';

function Header({ isOpen, setIsOpen, setRestaurantLink, setIsRestaurant, setClickedBusiness, setCardId}) {
  const [suggestedDisplayed, setSuggestedDisplayed] = React.useState(false);

  const words = ['Bars and Nightlife',
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
  'Pet Services'];

  return (
    //bg-[url(/public/bgpattern.png)]
    <div className="w-full h-[92%] flex justify-center items-center flex-col absolute">
        <div className='z-40 text-center mx-20'>                                                                   
          {!suggestedDisplayed ? 
            <>
              <p className="font-cursive text text-5xl text-black my-4">Discover Winter Park, Florida</p>
              <h1 className=" font-quicksand text-6xl  text-black flex flex-col text-wrap">Let AI-Concierge find the   
              <span style={{ color: '#0066FF', marginLeft: '6px'}}>
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
            <div className={suggestedDisplayed ? ` mt-[-10rem] flex` : `mt-16 flex`}>
              <Form isOpen={isOpen} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant} setClickedBusiness={setClickedBusiness} setSuggestedDisplayed={setSuggestedDisplayed}/>
            </div>
            
        </div>
    </div>
  )
}

export default Header