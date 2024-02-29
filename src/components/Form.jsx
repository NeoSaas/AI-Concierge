import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const activities = ['Bars and Nightlife', 'Local Restaurants', 'Transportation Services', 'Local Attractions', 'Cultural Experiences', 'Shopping Districts', 'Day Tours', 'Spa and Wellness Centers', 'Outdoor Activities', 'Fitness Centers', 'Golf Courses', 'Wine Tastings and Tours', 'Art Galleries', 'Specialty Food Shops', 'Boat Rentals or Cruises', 'Bicycle Rentals', 'Cooking Classes', 'Photography Services', 'Hair and Beauty Salons', 'Local Markets', 'Event Ticketing', 'Childcare Services', 'Pet Services', 'Language Classes or Translators', 'Medical Clinics or Pharmacies'];

const subActivities = {
  'Bars and Nightlife': ['Clubs', 'Dive Bars', 'Piano Bars', 'Karaoke Bars', 'Sports Bars'],
  'Local Restaurants': ['Italian', 'Mexican', 'Chinese', 'Indian', 'Thai'],
  // Define sub-activities for other main activities
};

const Form = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [showSubOptions, setShowSubOptions] = useState(false);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(activities.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleActivityClick = (activity) => {
    setSelectedActivities((prevActivities) => [...prevActivities, activity]);
    setShowSubOptions(true);
    console.log(selectedActivities);
  };

  const renderButtons = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentActivities = activities.slice(startIndex, endIndex);

    if(!showSubOptions) {
      return currentActivities.map((activity, index) => (
        <button key={index} className="rounded-md bg-slate-50 shadow-blue-300 text-black shadow-lg px-16 py-20 m-4 hover:scale-105 duration-300 ease-in-out flex text-3xl justify-center items-center" onClick={() => handleActivityClick(activity)}>
          {activity}
        </button>
      ));
    }
    else {
      return <></>
    }
  };

  const renderSubButtons = () => {
    return selectedActivities.map(activity => {
      const subOptions = subActivities[activity];
      if (!subOptions || !showSubOptions) return null;
      return subOptions.map((subOption, index) => (
        <button key={index} className="rounded-md bg-slate-50 shadow-blue-300 text-black shadow-lg px-16 py-20 m-2 hover:scale-105 duration-300 ease-in-out flex text-3xl justify-center items-center" onClick={() => handleActivityClick(subOption)}>
          {subOption}
        </button>
      ));
    });
  };

  return (
    <div>
      {showSubOptions ? (<p className='font-quicksand text-2xl mb-10'>What kind of {selectedActivities[0]} are you looking for?</p>) : (<></>)}
      <div className="flex justify-center">
        <button
          className="rounded-full bg-slate-50 border-2 shadow-sm shadow-blue-100 text-black p-2 m-2 hover:scale-105 duration-300 ease-in-out"
          disabled={currentPage === 0}
          onClick={handlePrevPage}
        >
          <ChevronLeftIcon className="h-auto w-10" />
        </button>
        <div className={`grid grid-cols-3 gap-4 transition-opacity duration-500 ease-in-out ${showSubOptions ? 'opacity-0' : 'opacity-100'}`}>
          {renderButtons()}
        </div>
        <div className={`grid grid-cols-3 gap-4 transition-opacity duration-500 ease-in-out ${showSubOptions ? 'opacity-100' : 'opacity-0'}`}>
          {renderSubButtons()}
        </div>
        <button
          className="rounded-full bg-slate-50 border-2 shadow-sm shadow-blue-100 text-black p-2 m-2 hover:scale-105 duration-300 ease-in-out"
          disabled={currentPage === totalPages - 1}
          onClick={handleNextPage}
        >
          <ChevronRightIcon className="h-auto w-10" />
        </button>
      </div>
      {showSubOptions ? (
      <div className='inline-flex flex-row hover:border-black w-auto h-auto border-2 border-transparent duration-300 ease-in-out rounded-full p-4'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mt-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        <button className='my-auto py-11 px-4 text-2xl'>Go Back to start</button>
      </div>
      ) : (<></>)}
    </div>
  );
};

export default Form;
