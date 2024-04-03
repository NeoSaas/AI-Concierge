import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import ActivityCard from '../ActivityCard';
import HotelAmenityDisplay from './HotelAmenityDisplay';

const activities = ['Hamiltons Kitchen', 'The Lounge', 'The Spa', 'The Cafe', 'The Pool', 'Fitness Center'];

const HotelForm = ({ setSuggestedDisplayed, setRestaurantLink, isOpen, setIsOpen, setHotel }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showSubOptions, setShowSubOptions] = useState(false);
  const itemsPerPage = 6;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentActivities = activities.slice(startIndex, endIndex);
  const [selectedActivityIds, setSelectedActivityIds] = useState([]);
  const [selectedActivityNames, setSelectedActivityNames] = useState([]);
  const [unselectedActivityNames, setUnselectedActivityNames] = useState([]);
  const [selectedDict, setSelectedDict] = useState({"main" : 0, 'sub' : 0});
  const [formPage, setFormPage] = useState('main');
  const [toPage , setToPage] = useState(false);

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
     // Check if the maximum limit is reached
    if ((formPage === 'main' && selectedDict.main > 0)) {
    // If the maximum limit is reached and the activity is already selected, allow deselecting it
        if (isSelected) {
            setSelectedIds(updatedIds);
            setUnselectedNames((prevNames) => [...prevNames, activity]);
        }
        return;
    }
    // Update the state with the selected ids
    setSelectedIds(updatedIds);
    // Update the state with the selected and unselected names
    if (isSelected) {
      setUnselectedNames((prevNames) => prevNames.filter((name) => name !== activity));
    } else {
      setSelectedNames((prevNames) => [...prevNames, activity]);
    }
  };

  const handleToPage = async () => {
    setToPage(true);
    setSuggestedDisplayed(true);
  };

  return (
    <div>
      {toPage ? (
        <>
          <a className=' bg-[#5C0601] py-5 px-4 rounded-lg text-white hover:scale-105 duration-300 ease-in-out' href='/home'>Back to Start</a>
          <HotelAmenityDisplay selectedActivityId={selectedActivityIds} setRestaurantLink={setRestaurantLink} setIsOpen={setIsOpen}/>
        </>
      ) : 
      <>
        <div className="flex justify-center font-quicksand">
        <div className={`grid place-items-center grid-cols-3 transition-opacity duration-500 ease-in-out `}>
            {
            currentActivities.map((activity, index) => (
                <ActivityCard
                key={`activity_${index}`}
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
                setSelectedDict={setSelectedDict}
                showSubOptions={showSubOptions}
                selectedDict = {selectedDict}
                />
            ))
            }
        </div>
      </div>
      <div className='flex flex-row justify-center items-center mx-20'>
        <button className='my-auto border-[3px] border-[#5C0601] text-2xl bg-[#5C0601] disabled:border-gray-400 disabled:bg-gray-400 px-5 py-1 text-white font-medium rounded-md transition duration-300 ease-in-out' disabled={selectedActivityIds.length == 0} onClick={() => handleToPage()}>Select</button>
      </div>
    </>
    }
      
    </div>
  );
};

export default HotelForm;