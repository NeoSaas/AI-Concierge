import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-transparent absolute border-b-2 border-t-2 border-black w-full border-opacity-30 font-quicksand mt-32 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
            <div className=" items-center justify-between h-24">
              {/* <p className='absolute mt-16 text-xl font-quicksand left-5'>Alfond Inn</p> */}
                <div className="flex-row flex items-center justify-center text-black text-2xl">
                    <Link to="/home" className="hover:scale-105 duration-300 ease-in-out"><img className="h-auto w-20 mr-2" src="https://thealfondinn.com/media/29890/alfond-inn-favicon.svg?quality=30" alt="Logo" /></Link>
                    <Link to="/events_info" className="ml-20 font-bold text-black hover:text-gray-600 hover:scale-105 duration-300 ease-in-out">Events and Conferences</Link>
                    <Link to="/checkInOut" className=" ml-20 text-black hover:text-gray-600 font-bold hover:scale-105 duration-300 ease-in-out">Check-In, Check-Out</Link>
                    <Link to="/amenities" className="ml-20 text-black hover:text-gray-600 font-bold hover:scale-105 duration-300 ease-in-out">Amenities</Link>
                    <Link to="/property_map" className="ml-20 text-black hover:text-gray-600 font-bold hover:scale-105 duration-300 ease-in-out">Hotel Map</Link>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;