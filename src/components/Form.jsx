import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import organizeQuery from './utils/organizeQuery';
import DisplayedOptions from './DisplayedOptions';
import 'react-loader-spinner';
import { Circles } from 'react-loader-spinner';
import ActivityCard from './ActivityCard';
import { useAppContext } from '../AppContext';
import logEvent from './utils/logEvent';

const activities = ['Local Restaurants', 'Shopping Districts', 'Local Attractions', 'Bars and Nightlife', 'Golf Courses', 'Transportation Services', 'Day Tours', 'Wine Tastings and Tours', 'Spa and Wellness Centers', 'Fitness Centers', 'Hair and Beauty Salons', 'Museums', 'Coffee', 'Ice Cream', 'Outdoor Activities', 'Specialty Food Shops', 'Event Ticketing', 'Local Markets', 'Bicycle Rentals', 'Childcare Services', 'Photography Services', 'Language Classes or Translators', 'Medical Clinics or Pharmacies', 'Art Galleries', 'Boat Rentals or Cruises', 'Cultural Experiences', 'Cooking Classes', 'Pet Services'];

const subActivities = {
  'Local Restaurants': ['Michelin Restaurants', 'American', 'Italian', 'Mexican', 'Japanese', 'Mediterranean', 'Thai', 'Chinese', 'Greek', 'Indian', 'Argentinean', 'Australian', 'Belgian', 'Brazilian', 'British', 'Cajun/Creole', 'Caribbean', 'Chinese', 'Cuban', 'Ethiopian', 'Filipino', 'French', 'German', 'Hawaiian', 'Hungarian', 'Indian', 'Irish', 'Israeli', 'Italian', 'Jamaican', 'Korean', 'Lebanese', 'Malaysian', 'Mexican', 'Moroccan', 'New Zealand', 'Nigerian', 'Persian', 'Peruvian', 'Portuguese', 'Russian', 'Scandinavian', 'Spanish', 'Swiss', 'Thai', 'Turkish', 'Vietnamese'],
  'Bars and Nightlife': ['Sports Bars', 'Up Scale Bar', 'Wine Bar', 'Karaoke Bars', 'Piano Bars', 'Clubs', 'Dive Bars'],
  'Local Attractions': ['Theme Parks', 'Zoos and Amusement Parks', 'Cultural and Preforming Arts Venues', 'Beaches and Waterfronts', 'Sports Venues', 'Religious and Spiritual Sites'],
  'Specialty Food Shops': ['Bakeries', 'Delis', 'Cheese Shops', 'Chocolate Shops', 'Farmers Markets', 'Gourmet Groceries'],
  'Wine Tastings and Tours': ['Vineyards', 'Wineries', 'Wine Bars', 'Wine Festivals', 'Wine Courses', 'Wine-themed Tours'],
  'Shopping Districts': ['Boutiques', 'Malls', 'Flea Markets', 'Antique Shops', 'Local Crafts', 'Souvenir Stores'],
  'Art Galleries': ['Contemporary Art', 'Traditional Art', 'Photography Exhibits', 'Sculpture Gardens', 'Art Classes', 'Artist Studios'],
  'Museums': ['History', 'Science', 'Aeronautical', 'Automotive'],
  'Spa and Wellness Centers': ['Massage Services', 'Facials', 'Body Treatments', 'Yoga Studios', 'Fitness Classes', 'Alternative Therapies'],
  'Outdoor Activities': ['Hiking Trails', 'Camping Sites', 'Water Sports', 'Cycling Paths', 'Rock Climbing', 'Fishing Spots'],
  'Fitness Centers': ['Gyms', 'Yoga Studios', 'Pilates Studios', 'Personal Trainers', 'Group Classes', 'Sports Facilities'],
  'Golf Courses': ['Public Courses', 'Private Clubs', 'Driving Ranges', 'Golf Lessons', 'Pro Shops', 'Mini-golf'],
  'Boat Rentals or Cruises': ['Sailboat Rentals', 'Kayak Rentals', 'Yacht Charters', 'Sightseeing Cruises', 'Fishing Charters', 'River Cruises'],
  'Bicycle Rentals': ['City Bike Rentals', 'Mountain Bike Rentals', 'Tandem Bike Rentals', 'Electric Bike Rentals', 'Bike Tours', 'Bike Repair Shops'],
  'Cooking Classes': ['International Cuisines', 'Baking Classes', 'Vegetarian Cooking', 'Molecular Gastronomy', 'Wine Pairing', 'Kids Cooking Classes'],
  'Photography Services': ['Portrait Studios', 'Wedding Photography', 'Event Photography', 'Landscape Photography', 'Photography Tours', 'Photo Printing Services'],
  'Hair and Beauty Salons': ['Hair Salons', 'Barber Shops', 'Nail Salons', 'Makeup Services', 'Waxing Services', 'Tanning Salons'],
  'Local Markets': ['Farmers Markets', 'Flea Markets', 'Night Markets', 'Artisan Markets', 'Street Food Markets', 'Antique Markets'],
  'Event Ticketing': ['Concert Tickets', 'Theater Tickets', 'Sporting Events', 'Festivals', 'Comedy Shows', 'Exhibitions'],
  'Childcare Services': ['Daycare Centers', 'Nanny Services', 'Babysitting Services', 'Kids Activities', 'Tutoring Services', 'Summer Camps'],
  'Pet Services': ['Veterinary Clinics', 'Pet Grooming', 'Pet Boarding', 'Pet Supplies', 'Dog Walking', 'Pet Training'],
  'Language Classes or Translators': ['English Classes', 'Spanish Classes', 'French Classes', 'Mandarin Classes', 'Sign Language Classes', 'Translation Services'],
  'Medical Clinics or Pharmacies': ['General Practitioners', 'Dentists', 'Optometrists', 'Pharmacies', 'Urgent Care Clinics', 'Specialty Clinics'],
  'Transportation Services': ['Airport Shuttles', 'Taxi Services', 'Ride-sharing Services', 'Car Rentals', 'Public Transportation', 'Private Charters'],
  'Cultural Experiences': ['Traditional Performances', 'Art Exhibitions', 'Food Tours', 'Language Classes', 'Cooking Classes', 'Cultural Festivals'],
  'Day Tours': ['City Tours', 'Nature Tours', 'Food Tours', 'Adventure Tours', 'Historical Tours', 'Group Tours'],
  'Ice Cream': ['Frozen Yogurt', 'Italian Ice Cream', 'Gelato', 'Rolled Ice Cream', 'Nitrogen Ice Cream', 'Soft Serve and Traditional Ice Cream'],
};

const noSubActivities = ['Transportation Services', 'Boat Rentals or Cruises', 'Bicycle Rentals', 'Coffee'];

const Form = () => {
  const { isOpen, setIsOpen, setRestaurantLink, setIsRestaurant, setClickedBusiness, setSuggestedDisplayed, setLoadingOptions, displayOptions, setDisplayOptions } = useAppContext();
  const [currentPage, setCurrentPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);
  const [showSubOptions, setShowSubOptions] = useState(false);
  const itemsPerPage = 6;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentActivities = useMemo(() => activities.slice(startIndex, endIndex), [startIndex, endIndex]);
  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const [selectedActivityIds, setSelectedActivityIds] = useState([]);
  const [selectedActivityNames, setSelectedActivityNames] = useState([]);
  const [unselectedActivityNames, setUnselectedActivityNames] = useState([]);
  const [subOptionConcat, setSubOptionConcat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayBusinesses, setDisplayBusinesses] = useState([]);
  const [selectedDict, setSelectedDict] = useState({ "main": 0, 'sub': 0 });
  const [formPage, setFormPage] = useState('main');
  const [failed, setFailed] = useState(false);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage - 1);
    setPreviousPage((prevPage) => prevPage - 1);
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
    setPreviousPage((prevPage) => prevPage + 1);
  }, []);

  // console.log(currentActivities)

  const handleToOptions = useCallback(async () => {
    try {
      setShowSubOptions(false);
      setSuggestedDisplayed(true);
      setDisplayOptions(true);
      setLoading(true);
      setLoadingOptions(true);
      const prompt = await organizeQuery(selectedActivityIds);
      const response = await axios.post('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/OPAICreateConvo/', { query: prompt });
      const businessesFromResponse = response.data['response-payload'].split(': ')[1].trim();

      const multiBusinessResponse = businessesFromResponse.split(', ');
      const businessDataResponse = await axios.post('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/queryBusinessData/', { business: multiBusinessResponse });

      // console.log(businessDataResponse.data);

      //Filter out empty collections
      const filteredBusinessData = businessDataResponse.data.filter(business => Object.keys(business).length !== 0);

      filteredBusinessData.forEach(business => {
        // console.log(business)
        logEvent(business[0].id, 'recommendation');
        // console.log('logging event')
      });

      if (filteredBusinessData.length === 0) {
        throw new Error('All collections are empty.');
      }

      setDisplayBusinesses(filteredBusinessData);
      setLoading(false);
      setSuggestedDisplayed(true);
    } catch (error) {
      console.log(error);
      setFailed(true);
      setLoading(false);
      setDisplayOptions(true);
      setShowSubOptions(false);
    }
  }, [selectedActivityIds, setDisplayOptions, setLoadingOptions, setSuggestedDisplayed]);

  const handleActivitySelect = useCallback((activity, selectedIds, setSelectedIds, selectedNames, setSelectedNames, unselectedNames, setUnselectedNames) => {
    const isSelected = selectedIds.includes(activity);
    const updatedIds = isSelected
      ? selectedIds.filter((id) => id !== activity)
      : [...selectedIds, activity];

    if ((formPage === 'main' && selectedDict.main > 2)) {
      if (isSelected) {
        setSelectedIds(updatedIds);
        setUnselectedNames((prevNames) => [...prevNames, activity]);

      }
      return;
    }

    if ((formPage === 'sub' && selectedDict.sub > 2)) {
      if (isSelected) {
        setSelectedIds(updatedIds);
        setUnselectedNames((prevNames) => [...prevNames, activity]);
      }
      return;
    }

    setSelectedIds(updatedIds);
    if (isSelected) {
      setUnselectedNames((prevNames) => prevNames.filter((name) => name !== activity));
    } else {
      setSelectedNames((prevNames) => [...prevNames, activity]);
    }
    console.log(activity)
    // if (noSubActivities.includes(activity) && isSelected) {
    //   handleToOptions();
    // }
  }, [formPage, selectedDict, handleToOptions]);


  const handleToSub = useCallback(async () => {
    let count = 0;
    selectedActivityIds.forEach(activity => {
      if (noSubActivities.includes(activity)) {
        count++;
      }
    });

    if (selectedActivityIds.length === count) {
      handleToOptions();
    } else {
      let temp = [];
      setShowSubOptions(true);
      setFormPage('sub');
      for (let activity in selectedActivityIds) {
        temp.push(subActivities[selectedActivityIds[activity]]);
      }
      let merged = [].concat.apply([], temp);

      setSubOptionConcat(merged);
      setCurrentPage(0);
    }
  }, [selectedActivityIds, handleToOptions]);

  const handleBackButton = useCallback(() => {
    setShowSubOptions(false);
    setCurrentPage(previousPage);
    setFormPage('main');
    console.log(previousPage);
    if (selectedDict.sub > 0 && selectedDict.main > 0) {
      for (let i = selectedDict.sub + selectedDict.main; i >= selectedDict.main; i--) {
        selectedActivityIds.splice(i, 1);
      }
      setSelectedDict({ ...selectedDict, sub: 0 });
    }
  }, [selectedDict, selectedActivityIds, previousPage]);

  const handleBackToForm = useCallback(() => {
    console.log(selectedActivityIds[0])
    if(noSubActivities.includes(selectedActivityIds[0])){
      setDisplayOptions(false);
      setShowSubOptions(false);
      setSuggestedDisplayed(false);
      setFailed(false);
      setLoadingOptions(false);
    }else{
      setDisplayOptions(false);
      setShowSubOptions(true);
      setSuggestedDisplayed(false);
      setFailed(false);
      setLoadingOptions(false);
    }
  }, [selectedActivityIds, setDisplayOptions, setShowSubOptions, setSuggestedDisplayed, setFailed, setLoadingOptions]);

  const subTotalPages = Math.ceil(subOptionConcat.length / itemsPerPage);

  return (
    <div>
      {showSubOptions ? (
        <div className='flex mt-2 flex-wrap max-w-[55rem] flex-col justify-center items-center'>
          <p className='font-quicksand text-2xl mb-1'>What specifically are you looking for?</p>
          <div className='font-quicksand text-xl'>
            <p> {selectedActivityIds.length - selectedDict.main} / 3 selected </p>
          </div>
          <div className='flex flex-row flex-wrap'>
            <p className='font-quicksand text-2xl mb-1'>Selected Items: &nbsp;</p>
            {selectedActivityIds && selectedActivityIds?.map((activityId) => (
              <p key={activityId} className='font-quicksand text-2xl mb-1'>{" " + activityId + ','}&nbsp;</p>
            ))}
          </div>
        </div>
      ) : !loading && !displayOptions ? (
        <div className='flex w-full justify-center items-center mt-2 mx-auto flex-wrap flex-col'>
          <div className='font-quicksand text-xl'>
            <p> {selectedActivityIds.length} / 3 selected </p>
          </div>
          <div className='flex flex-row flex-wrap'>
            <p className='font-quicksand text-2xl mb-1'>Selected Items: &nbsp;</p>
            {selectedActivityIds?.map((activityId) => (
              <p key={activityId} className='font-quicksand text-2xl mb-1'>{" " + activityId + ','}&nbsp;</p>
            ))}
          </div>
        </div>
      ) : null}
      <div className="flex justify-center font-quicksand">
        {displayOptions ? (
          <>
            {loading ? (
              <div className='flex items-center justify-center w-[24vh] flex-col mb-4'>
                <p className='text-2xl text-black mx-auto text-center'>Finding the best options for you...</p>
                <Circles color="#5C0601" height={120} width={120} />
              </div>
            ) : (
              <div>
                {failed ? (
                  <>
                    <p className='text-3xl text-black mx-auto text-center mb-10 mt-9'>No options found for your selection. Please try again!</p>
                    <button className='bg-[#5C0601] py-5 px-4 rounded-lg text-white hover:scale-105 duration-300 ease-in-out' onClick={handleBackToForm}>Back to Form</button>
                  </>
                ) : (
                  <div className='flex flex-col'>
                    <p className='text-3xl text-black mx-auto text-center mb-4 mt-1'>Here are the best options for you!</p>
                    <p className='text-2xl text-black mx-auto text-center mb-1 mt-1'>We Found <span className='text-green-500'>{displayBusinesses.length}</span> please scroll to see them.</p>
                    <DisplayedOptions businesses={displayBusinesses} setIsOpen={setIsOpen} isOpen={isOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant} setClickedBusiness={setClickedBusiness} />
                    <button className='bg-[#5C0601] py-4 px-72 rounded-full text-white hover:scale-105 duration-300 ease-in-out text-3xl font-semibold' onClick={handleBackToForm}>Back to Form</button>
                    <a className='bg-[#5C0601] py-4 px-72 mt-4 rounded-full text-white hover:scale-105 duration-300 ease-in-out text-3xl font-semibold' href='/'>Back to Home</a>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            <button
              className="rounded-full bg-slate-50 border-2 shadow-md shadow-[#5C0601] text-black h-[500px] p-1 m-2 hover:scale-105 duration-300 ease-in-out"
              disabled={currentPage === 0}
              onClick={handlePrevPage}
            >
              <ChevronLeftIcon className="h-auto w-10" />
            </button>
            <div className={`grid place-items-center grid-cols-3 transition-opacity duration-500 ease-in-out`}>
              {!showSubOptions ? (
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
                    selectedDict={selectedDict}
                    handleToOptions={handleToOptions}
                    handleToSub={handleToSub}
                  />
                ))
              ) : (
                subOptionConcat.slice(startIndex, endIndex).map((subOption, index) => (
                  <ActivityCard
                    key={`subOption_${subOption}_${index}`}
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
                    setSelectedDict={setSelectedDict}
                    showSubOptions={showSubOptions}
                    selectedDict={selectedDict}
                    handleToSub={handleToSub}
                  />
                ))
              )}
            </div>
            <button
              className="rounded-full bg-slate-50 border-2 shadow-md shadow-[#5C0601] text-black h-[500px] p-1 m-2 hover:scale-105 duration-300 ease-in-out"
              disabled={showSubOptions ? currentPage === subTotalPages - 1 : currentPage === totalPages - 1}
              onClick={handleNextPage}
            >
              <ChevronRightIcon className="h-auto w-10" />
            </button>
          </>
        )}
      </div>
      <div className='flex flex-row justify-between mx-20 mt-2'>
        {displayOptions ? (<></>) : (showSubOptions ? (
          <>
            <button className='border-[3px] border-[#5C0601] text-[#5C0601] disabled:text-gray-400 rounded-full my-auto px-[4.6rem] py-3 text-2xl font-medium' disabled={formPage === 'main'} onClick={handleBackButton}>Back</button>
            {!loading && !displayOptions ? <p className='w-full flex text-lg font-quicksand font-bold justify-center items-center'>{showSubOptions ? `Page ${currentPage + 1} out of ${subTotalPages}` : `Page ${currentPage + 1} out of ${totalPages}`}</p> : null}
            <button className='my-auto border-[3px] border-[#5C0601] disabled:border-gray-400 disabled:bg-gray-400 text-2xl bg-[#5C0601] px-[4.7rem] py-0 text-white font-medium rounded-full transition duration-300 ease-in-out' disabled={selectedDict.sub === 0} onClick={handleToOptions}>Get Recommendations</button>
          </>
        ) : (
          <>
            <button className='border-[3px] border-[#5C0601] text-[#5C0601] disabled:border-gray-400 disabled:text-gray-400 rounded-full my-auto px-[4.6rem] py-3 text-2xl font-medium' disabled={formPage === 'main'} onClick={handleBackButton}>Back</button>
            {!loading && !displayOptions ? <p className='w-full flex text-lg font-quicksand font-bold justify-center items-center'>{showSubOptions ? `Page ${currentPage + 1} out of ${subTotalPages}` : `Page ${currentPage + 1} out of ${totalPages}`}</p> : null}
            <button className='my-auto border-[3px] border-[#5C0601] text-2xl bg-[#5C0601] disabled:border-gray-400 disabled:bg-gray-400 px-[4.7rem] py-3 text-white font-medium rounded-full transition duration-300 ease-in-out' disabled={selectedActivityIds.length === 0} onClick={handleToSub}>Select</button>
          </>
        ))}
      </div>
    </div>
  );
};

export default Form;

