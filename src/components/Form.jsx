import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const activities = ['Bars and Nightlife', 'Local Restaurants', 'Transportation Services', 'Local Attractions', 'Cultural Experiences', 'Shopping Districts', 'Day Tours', 'Spa and Wellness Centers', 'Outdoor Activities', 'Fitness Centers', 'Golf Courses', 'Wine Tastings and Tours', 'Art Galleries', 'Specialty Food Shops', 'Boat Rentals or Cruises', 'Bicycle Rentals', 'Cooking Classes', 'Photography Services', 'Hair and Beauty Salons', 'Local Markets', 'Event Ticketing', 'Childcare Services', 'Pet Services', 'Language Classes or Translators', 'Medical Clinics or Pharmacies'];

const Form = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(activities.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderButtons = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentActivities = activities.slice(startIndex, endIndex);

    return currentActivities.map((activity, index) => (
      <button key={index} className="rounded-md bg-slate-50 shadow-blue-100 text-black shadow-lg px-4 py-12 m-2">
        {activity}
      </button>
    ));
  };

  return (
    <div>
      <div className="flex justify-center">
        <button
          className="rounded-full bg-slate-50 border-2 shadow-sm shadow-blue-100 text-black p-2 m-2 hover:scale-105 duration-300 ease-in-out"
          disabled={currentPage === 0}
          onClick={handlePrevPage}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <div className="grid grid-cols-4 gap-4">{renderButtons()}</div>
        <button
          className="rounded-full bg-slate-50 border-2 shadow-sm shadow-blue-100 text-black p-2 m-2 hover:scale-105 duration-300 ease-in-out"
          disabled={currentPage === totalPages - 1}
          onClick={handleNextPage}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Form;
