import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import EventCard from './EventCard';
import ActivityCard from './ActivityCard';
const activities = ['Bars and Nightlife', 'Local Restaurants', 'Transportation Services', 'Local Attractions', 'Cultural Experiences', 'Shopping Districts', 'Day Tours', 'Spa and Wellness Centers', 'Outdoor Activities', 'Fitness Centers', 'Golf Courses', 'Wine Tastings and Tours', 'Art Galleries', 'Specialty Food Shops', 'Boat Rentals or Cruises', 'Bicycle Rentals', 'Cooking Classes', 'Photography Services', 'Hair and Beauty Salons', 'Local Markets', 'Event Ticketing', 'Childcare Services', 'Pet Services', 'Language Classes or Translators', 'Medical Clinics or Pharmacies'];

const subActivities = {
  'Bars and Nightlife': ['Clubs', 'Dive Bars', 'Piano Bars', 'Karaoke Bars', 'Sports Bars'],
  'Local Restaurants': ['Italian', 'Mexican', 'Chinese', 'Indian', 'Thai'],
  // Define sub-activities for other main activities
};

const Form = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showSubOptions, setShowSubOptions] = useState(false);
  const itemsPerPage = 6;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentActivities = activities.slice(startIndex, endIndex);
  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedActivityIds, setSelectedActivityIds] = useState([]);
  const [selectedActivityNames, setSelectedActivityNames] = useState([]);
  const [unselectedActivityNames, setUnselectedActivityNames] = useState([]);
  const [subOptionConcat, setSubOptionConcat] = useState([]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleActivitySelect = (
    activity,
    selectedIds,
    setSelectedIds,
    selectedNames,
    setSelectedNames,
    unselectedNames,
    setUnselectedNames
  ) => {
    const isSelected = selectedIds.includes(activity);
    const updatedIds = isSelected
      ? selectedIds.filter((id) => id !== activity)
      : [...selectedIds, activity];
  
    // Update the state with the selected ids
    setSelectedIds(updatedIds);
  
    // Update the state with the selected and unselected names
    if (isSelected) {
      setUnselectedNames((prevNames) => prevNames.filter((name) => name !== activity));
    } else {
      setSelectedNames((prevNames) => [...prevNames, activity]);
    }
    
  };

  const handleToSub = () => {
    var temp = []
    setShowSubOptions(true)
    for (let k in subActivities) {
      temp.push(subActivities[k])
  }

  var merged = [].concat.apply([], temp);
  setSubOptionConcat(merged)
  };

  
  return (
    <div>
      {showSubOptions ? (<p className='font-quicksand text-2xl mb-10'>What kind of {selectedActivityIds} are you looking for?</p>) : (<></>)}
      <div className="flex justify-center">
        <button
          className="rounded-full bg-slate-50 border-2 shadow-sm shadow-blue-100 text-black h-[500px] p-1 m-2 hover:scale-105 duration-300 ease-in-out"
          disabled={currentPage === 0}
          onClick={handlePrevPage}
        >
          <ChevronLeftIcon className="h-auto w-10" />
        </button>
        <div className={`grid place-items-center grid-cols-3 transition-opacity duration-500 ease-in-out `}>
          {!showSubOptions ? (
            currentActivities.map((activity, index) => (
              <ActivityCard
              key={index}
              activity={activity}
              id={"activity_" + index + currentPage}
              isSelected={selectedActivityIds.includes(activity)}
              onSelect={() =>
                handleActivitySelect(
                  activity,
                  selectedActivityIds,
                  setSelectedActivityIds,
                  selectedActivityNames,
                  setSelectedActivityNames,
                  unselectedActivityNames,
                  setUnselectedActivityNames
                )
              }
            />
            ))
            ):(
              
              selectedActivityIds.map(activity => {
                const subOptions = subActivities[activity];
                // console.log("BLEMP", subOptions)
                return subOptionConcat.map((subOption, index) => (
                  <ActivityCard
                    key={index}
                    activity={subOption}
                    id={"subOption_" + index + currentPage}
                    isSelected={selectedActivityIds.includes(subOption)}
                    onSelect={() =>
                      handleActivitySelect(
                        subOption,
                        selectedActivityIds,
                        setSelectedActivityIds,
                        selectedActivityNames,
                        setSelectedActivityNames,
                        unselectedActivityNames,
                        setUnselectedActivityNames
                      )
                  }
                />
                ))
              })
          )} 
        </div>
        <button
          className="rounded-full bg-slate-50 border-2 shadow-sm shadow-blue-100 text-black h-[500px] p-1 m-2 hover:scale-105 duration-300 ease-in-out"
          disabled={currentPage === totalPages - 1}
          onClick={handleNextPage}
        >
          <ChevronRightIcon className="h-auto w-10" />
        </button>
        
      </div>
      <div className='flex flex-row justify-between mx-20'>
      <button className='my-auto py-11 px-4 text-2xl font-medium' onClick={() => setShowSubOptions(false)}>Back</button>
      <button className='my-auto  text-2xl bg-[#0066FF] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out ' onClick={() => handleToSub()}>Next</button>
      </div>
    </div>
  );
};

export default Form;
