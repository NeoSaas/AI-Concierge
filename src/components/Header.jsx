import React from 'react'
import TypingWords from './TypingWords'
import Form from './Form';

function Header() {
  const words = ['Bars and Nightlife', 'Local Restaurants', 'Transportation Services', 'Local Attractions', 'Cultural Experiences', 'Shopping Districts', 'Day Tours', 'Spa and Wellness Centers', 'Outdoor Activities', 'Fitness Centers', 'Golf Courses', 'Wine Tastings and Tours', 'Art Galleries', 'Specialty Food Shops', 'Boat Rentals or Cruises', 'Bicycle Rentals', 'Cooking Classes', 'Photography Services', 'Hair and Beauty Salons', 'Local Markets', 'Event Ticketing', 'Childcare Services', 'Pet Services', 'Language Classes or Translators', 'Medical Clinics or Pharmacies'];

  return (
    //bg-[url(/public/bgpattern.png)]
    <div className="bg-auto md:bg-cover bg-center w-full h-full flex justify-center items-center flex-col mt-56 absolute ">
        <div className='z-40 text-center mx-20'>
            <p className="font-quicksand text-3xl text-black">Discover Winter Park</p>
            <h1 className=" font-quicksand text-6xl text-black">Let AI-Concierge find the {<TypingWords words={words}/>} for you</h1>
            <div className='mt-16'>
              <Form />
            </div>
            
        </div>
    </div>
  )
}

export default Header