import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-transparent absolute border-b-2 border-black w-full border-opacity-30 font-quicksand mt-56 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
            <div className=" items-center justify-between h-24">
                <div className="flex-row flex items-center justify-center text-black">
                    <img className="h-auto w-24 mr-2" src="hilton-logo.png" alt="Logo" />
                    <Link to="/phone" className="ml-20 text-xl hover:scale-105 duration-300 ease-in-out">Events and Conferences</Link>
                    <Link to="/email" className=" ml-20 text-xl hover:scale-105 duration-300 ease-in-out">Check-In, Check-Out</Link>
                    <Link to="/email" className="ml-20 text-xl hover:scale-105 duration-300 ease-in-out">Amenities</Link>
                    <Link to="/email" className="ml-20 text-xl hover:scale-105 duration-300 ease-in-out">Hotel Map</Link>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;