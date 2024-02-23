import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className=" items-center justify-between h-24">
                <div className="flex-row flex items-center justify-center">
                    <img className="h-auto w-24 mr-2" src="hilton-logo.png" alt="Logo" />
                    <p className="text-gray-300 ml-20">Phone: 123-456-7890</p>
                    <p className="text-gray-300 ml-20">Email: info@example.com</p>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;