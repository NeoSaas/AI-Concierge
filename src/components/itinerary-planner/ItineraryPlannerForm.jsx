import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import ActivityCard from '../ActivityCard';
import axios from 'axios';
import organizeQuery from '../general functions/organizeQuery';
import DisplayedOptions from '../DisplayedOptions';
import 'react-loader-spinner';
import { Circles } from 'react-loader-spinner';

const activities = ['Bars and Nightlife', 'Local Restaurants', 'Local Attractions', 'Shopping Districts', 'Specialty Food Shops', 'Art Galleries', 'Day Tours', 'Spa and Wellness Centers', 'Outdoor Activities', 'Fitness Centers', 'Golf Courses', 'Wine Tastings and Tours',  'Boat Rentals or Cruises', 'Cultural Experiences', 'Bicycle Rentals', 'Cooking Classes', 'Photography Services', 'Hair and Beauty Salons', 'Local Markets', 'Event Ticketing', 'Childcare Services', 'Pet Services', 'Language Classes or Translators', 'Medical Clinics or Pharmacies', 'Transportation Services'];

const subActivities = {
  'Bars and Nightlife': ['Clubs', 'Dive Bars', 'Piano Bars', 'Karaoke Bars', 'Sports Bars', 'Wine Bar', 'Up Scale Bar'],
  'Local Restaurants': ['Michelin Restaurants','Italian', 'Mexican', 'Chinese', 'Indian', 'Thai', 'Fancy', 'American' ,'Argentinean','Australian','Belgian','Brazilian','British', 'Cajun/Creole','Caribbean', 'Chinese','Cuban','Ethiopian', 'Filipino', 'French', 'German', 'Greek', 'Hawaiian', 'Hungarian','Indian', 'Irish', 'Israeli','Italian','Jamaican','Japanese', 'Korean','Lebanese','Malaysian','Mediterranean','Mexican','Moroccan','New Zealand','Nigerian','Persian','Peruvian','Portuguese','Russian','Scandinavian','Spanish','Swiss','Thai','Turkish','Turkish','Vietnamese'],
  'Local Attractions': ['Museums', 'Historical Sites', 'Amusement Parks', 'Zoos', 'Gardens', 'Landmarks'],
  'Specialty Food Shops': ['Bakeries', 'Delis', 'Cheese Shops', 'Chocolate Shops', 'Farmers Markets', 'Gourmet Groceries'],
  'Wine Tastings and Tours': ['Vineyards', 'Wineries', 'Wine Bars', 'Wine Festivals', 'Wine Courses', 'Wine-themed Tours'],
  'Shopping Districts': ['Boutiques', 'Malls', 'Flea Markets', 'Antique Shops', 'Local Crafts', 'Souvenir Stores'],
  'Art Galleries': ['Contemporary Art', 'Traditional Art', 'Photography Exhibits', 'Sculpture Gardens', 'Art Classes', 'Artist Studios'],
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
  // Define sub-activities for other main activities
};

const noSubActivities = ['Transportation Services', 'Boat Rentals or Cruises', 'Bicycle Rentals']

const ItineraryPlannerForm = ({ isOpen, setIsOpen, setRestaurantLink, setIsRestaurant, setClickedBusiness, setSuggestedDisplayed, setLoadingOptions, displayOptions, setDisplayOptions }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showSubOptions, setShowSubOptions] = useState(false);
  const itemsPerPage = 6;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentActivities = activities.slice(startIndex, endIndex);
  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const [selectedActivityIds, setSelectedActivityIds] = useState([]);
  const [selectedActivityNames, setSelectedActivityNames] = useState([]);
  const [unselectedActivityNames, setUnselectedActivityNames] = useState([]);
  const [subOptionConcat, setSubOptionConcat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayBusinesses, setDisplayBusinesses] = useState([]);
  const [selectedDict, setSelectedDict] = useState({"main" : 0, 'sub' : 0});
  const [formPage, setFormPage] = useState('main');
  const [failed, setFailed] = useState(false);

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

      
     // Check if the maximum limit is reached
  if ((formPage === 'main' && selectedDict.main > 2)) {
    // If the maximum limit is reached and the activity is already selected, allow deselecting it
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
    // Update the state with the selected ids
    setSelectedIds(updatedIds);
    // Update the state with the selected and unselected names
    if (isSelected) {
      setUnselectedNames((prevNames) => prevNames.filter((name) => name !== activity));

    } else {
      setSelectedNames((prevNames) => [...prevNames, activity]);
    }

  };

  const handleToSub = async () => {

    var count = 0;
    selectedActivityIds.forEach(activity => {
      if (noSubActivities.includes(activity)){
        count++;
      }
    });

    if(selectedActivityIds.length == count) {
      handleToOptions();
    }
    var temp = []
    setShowSubOptions(true)
    setFormPage('sub')

    for (let activity in selectedActivityIds) {
      temp.push(subActivities[selectedActivityIds[activity]])
    }

    var merged = [].concat.apply([], temp);
    setSubOptionConcat(merged);
    setCurrentPage(0);
  };

  const handleToOptions = async () => {
    try {
      setShowSubOptions(false);
      setSuggestedDisplayed(true);
      setDisplayOptions(true);
      setLoading(true);
      setLoadingOptions(true);
      const prompt = await organizeQuery(selectedActivityIds);
      const response = await axios({
        method: 'post',
        url: 'https://rr3l1d2s-8000.use.devtunnels.ms/api/OPAICreateConvo/',
        data: { query: prompt },
      });
      const businessesFromResponse = response.data['response-payload'].split(': ')[1].trim();

      var multiBusinessResponse = businessesFromResponse.split(', ');
      var businessDataResponse;
      if (multiBusinessResponse.length > 1) {

        businessDataResponse = await axios({
          method: 'post',
          url: 'https://rr3l1d2s-8000.use.devtunnels.ms/api/queryBusinessData/',
          data: { business: multiBusinessResponse },
        });
      }
      else {
        businessDataResponse = await axios({
          method: 'post',
          url: 'https://rr3l1d2s-8000.use.devtunnels.ms/api/queryBusinessData/',
          data: { business: businessesFromResponse },
        });
      }
      setDisplayBusinesses(businessDataResponse.data);
      setLoading(false);
      setSuggestedDisplayed(true);
    } catch (error) {
      console.log(error);
      setFailed(true);
      setLoading(false);
      setDisplayOptions(true);
      setShowSubOptions(false);
    }
    

  }

  // setTimeout(() => {
  //   setLoading(false);
  //   setDisplayOptions(false);
  //   setShowSubOptions(false);
  // }, 1000000);

  function handleBackButton() {
    setShowSubOptions(false)
    setFormPage('main')
    if(selectedDict.sub > 0 && selectedDict.main > 0) {
      for (let i = selectedDict.sub + selectedDict.main; i >= selectedDict.main; i--) {
        delete selectedActivityIds[i];
      }
      selectedDict.sub = 0;
    }
    
  }

  const handleBackToForm = () => {
    setDisplayOptions(false);
    setShowSubOptions(true);
    setSuggestedDisplayed(false);
    setFailed(false);
    setLoadingOptions(false);
  }

  const subTotalPages = Math.ceil(subOptionConcat.length / itemsPerPage);

  return (
    <div>
      {showSubOptions ? (<div className='mt-2 flex-wrap max-w-[55rem]'><p className='font-quicksand text-2xl mb-1'>What specifically are you looking for?</p><div className='flex flex-row flex-wrap w-full justify-center'><p className='font-quicksand text-2xl mb-1 text-wrap '>Selected Items: &nbsp;</p>{selectedActivityIds?.map((activityId) => {return <p className='font-quicksand text-2xl mb-1'>{activityId + ","}&nbsp;</p>})}</div></div>) : !loading && !displayOptions ? (<div className='flex flex-row w-full justify-center mt-2 mx-auto flex-wrap'><p className='font-quicksand text-2xl mb-1'>Selected Items: &nbsp;</p>{selectedActivityIds?.map((activityId) => {return <p className='font-quicksand text-2xl mb-1'>{" " + activityId + ','}&nbsp;</p>})}  </div>): null}
      <div className="flex justify-center font-quicksand">
        {displayOptions ?
          <>
            {loading ?
              <div className='flex items-center justify-center w-[24vh] flex-col mb-4'>
                <p className='text-2xl text-black mx-auto text-center'>Finding the best options for you...</p>
                <Circles color="#5C0601" height={120} width={120}/>
              </div>
              :
              <div>
                {failed ? 
                <>
                  <p className='text-3xl text-black mx-auto text-center mb-10 mt-9'>No options found for your selection. Please try again!</p> 
                  <button className=' bg-[#5C0601] py-5 px-4 rounded-lg text-white hover:scale-105 duration-300 ease-in-out' onClick={handleBackToForm}>Back to Form</button>
                </>
                : 
                <div className='flex flex-col'>
                  
                  <p className='text-3xl text-black mx-auto text-center mb-10 mt-1'>Here are the best options for you!</p>
                  <DisplayedOptions businesses={displayBusinesses} setIsOpen={setIsOpen} isOpen={isOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant} setClickedBusiness={setClickedBusiness}/>
                  <button className=' bg-[#5C0601] py-4 px-72 rounded-full text-white hover:scale-105 duration-300 ease-in-out text-3xl font-semibold' onClick={handleBackToForm}>Back to Form</button>
                  <a className=' bg-[#5C0601] py-4 px-72 mt-4 rounded-full text-white hover:scale-105 duration-300 ease-in-out text-3xl font-semibold' href='/'>Back to Home</a>
                </div>
                }
                
              </div>
            }
          </>
          :
          <>
            <button
              className="rounded-full bg-slate-50 border-2 shadow-md shadow-[#5C0601] text-black h-[500px] p-1 m-2 hover:scale-105 duration-300 ease-in-out"
              disabled={currentPage === 0}
              onClick={handlePrevPage}
            >
              <ChevronLeftIcon className="h-auto w-10" />
            </button>
            <div className={`grid place-items-center grid-cols-3 transition-opacity duration-500 ease-in-out `}>
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
                    selectedDict = {selectedDict}
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
                    selectedDict = {selectedDict}
                  />
                ))
              )
              }
            </div>
            <button
              className="rounded-full bg-slate-50 border-2 shadow-md shadow-[#5C0601] text-black h-[500px] p-1 m-2 hover:scale-105 duration-300 ease-in-out"
              disabled={showSubOptions ? currentPage === subTotalPages - 1 : currentPage === totalPages - 1}
              onClick={handleNextPage}
            >
              <ChevronRightIcon className="h-auto w-10" />
            </button>
          </>
        }

      </div>
      <div className='flex flex-row justify-between mx-20 mt-2'>

        {displayOptions ? (<></>) : (showSubOptions ? 
        <>
          <button className=' border-[3px] border-[#5C0601] text-[#5C0601] disabled:text-gray-400 rounded-full my-auto px-[4.6rem] py-3 text-2xl font-medium ' disabled={formPage == 'main'} onClick={() => handleBackButton()}>Back</button>
          {!loading && !displayOptions ? <p className='w-full flex text-lg font-quicksand font-bold justify-center items-center'>{showSubOptions ? `Page ${currentPage + 1} out of ${subTotalPages}` : `Page ${currentPage + 1} out of ${totalPages}`}</p> : null} 
          <button className='my-auto border-[3px] border-[#5C0601] disabled:border-gray-400 disabled:bg-gray-400 text-2xl bg-[#5C0601] px-[4.7rem] py-0 text-white font-medium rounded-full transition duration-300 ease-in-out ' disabled={selectedDict.sub == 0} onClick={() => handleToOptions()}>Get Recommendations</button>
        </> 
        : 
        <>
          <button className=' border-[3px] border-[#5C0601] text-[#5C0601] disabled:border-gray-400 disabled:text-gray-400 rounded-full my-auto px-[4.6rem] py-3 text-2xl font-medium ' disabled={formPage == 'main'} onClick={() => handleBackButton()}>Back</button> 
          {!loading && !displayOptions ? <p className='w-full flex text-lg font-quicksand font-bold justify-center items-center'>{showSubOptions ? `Page ${currentPage + 1} out of ${subTotalPages}` : `Page ${currentPage + 1} out of ${totalPages}`}</p> : null}
          <button className='my-auto border-[3px] border-[#5C0601] text-2xl bg-[#5C0601] disabled:border-gray-400 disabled:bg-gray-400 px-[4.7rem] py-3 text-white font-medium rounded-full transition duration-300 ease-in-out' disabled={selectedActivityIds.length == 0} onClick={() => handleToSub()}>Select</button>
        </>
        )}
        
      </div>
      {/* {!loading && !displayOptions ? <p className='w-full flex text-lg font-quicksand font-bold mt-5 justify-center align-top'>{showSubOptions ? `Page ${currentPage + 1} out of ${subTotalPages}` : `Page ${currentPage + 1} out of ${totalPages}`}</p> : null} */}
      
    </div>
  );
};

export default ItineraryPlannerForm;
