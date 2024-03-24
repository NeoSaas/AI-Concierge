import React from 'react'
import Form from './Form';
import Typewriter from 'typewriter-effect';

function Header({ isOpen, setIsOpen, setRestaurantLink, setIsRestaurant, setClickedBusiness, setCardId}) {
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
    <div className="w-full h-full flex justify-center items-center flex-col absolute">
        <div className='z-40 text-center mx-20'>
            <p className="font-cursive text text-4xl text-black my-4">Discover Winter Park, Florida</p>
            
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
            <div className='mt-16 flex'>
              <Form isOpen={isOpen} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant} setClickedBusiness={setClickedBusiness}/>
            </div>
            
        </div>
    </div>
  )
}

export default Header