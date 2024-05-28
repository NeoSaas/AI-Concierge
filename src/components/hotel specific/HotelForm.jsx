import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import ActivityCard from '../ActivityCard';
import HotelAmenityDisplay from './HotelAmenityDisplay';
import { useAppContext } from '../../AppContext';

const activities = ['Hamiltons Kitchen', 'The Lounge', 'The Spa', 'The Cafe', 'The Pool', 'Fitness Center'];

const HotelForm = ({ setHotel }) => {
  const { setSuggestedDisplayed, setRestaurantLink, isOpen, setIsOpen, imageBasedHotelAmenity, hotelAmenity, setToPage, toPage } = useAppContext();
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
    setToPage(true);
    setSuggestedDisplayed(true);
  };

  const handleToPage = async () => {
    setToPage(true);
    setSuggestedDisplayed(true);
  };

  return (
    <div className='mb-24'>
      {toPage ? (
        <div className='flex flex-col justify-center w-full'>
          {imageBasedHotelAmenity ? (
            <HotelAmenityDisplay selectedActivityId={hotelAmenity} setRestaurantLink={setRestaurantLink} setIsOpen={setIsOpen}/>
          ) : (
            <HotelAmenityDisplay selectedActivityId={selectedActivityIds} setRestaurantLink={setRestaurantLink} setIsOpen={setIsOpen}/>
          )}
        {!imageBasedHotelAmenity ?  <a className=' bg-[#5C0601] relative py-1 px-4 w-full rounded-full text-white mx-auto text-3xl font-semibold' href='/home'>Back to Start</a> : null}
        </div>
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
      {/* <div className='flex flex-row justify-center items-center mx-20'>
        <button className='mt-16 border-[3px] border-[#5C0601] text-2xl bg-[#5C0601] disabled:border-gray-400 disabled:bg-gray-400 px-16 py-3 text-white font-medium rounded-full transition duration-300 ease-in-out z-10' disabled={selectedActivityIds.length == 0} onClick={() => handleToPage()}>Select</button>
      </div> */}
    </>
    }
      
    </div>
  );
};

export default HotelForm;
