import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import ActivityCard from './ActivityCard';
import axios from 'axios';
import organizeQuery from './functions/organizeQuery';
import DisplayedOptions from './DisplayedOptions';
import 'react-loader-spinner';
import { Circles } from 'react-loader-spinner';

const activities = ['Bars and Nightlife', 'Local Restaurants', 'Transportation Services', 'Local Attractions', 'Cultural Experiences', 'Shopping Districts', 'Day Tours', 'Spa and Wellness Centers', 'Outdoor Activities', 'Fitness Centers', 'Golf Courses', 'Wine Tastings and Tours', 'Art Galleries', 'Specialty Food Shops', 'Boat Rentals or Cruises', 'Bicycle Rentals', 'Cooking Classes', 'Photography Services', 'Hair and Beauty Salons', 'Local Markets', 'Event Ticketing', 'Childcare Services', 'Pet Services', 'Language Classes or Translators', 'Medical Clinics or Pharmacies'];

const subActivities = {
  'Bars and Nightlife': ['Clubs', 'Dive Bars', 'Piano Bars', 'Karaoke Bars', 'Sports Bars', 'Wine Bar'],
  'Local Restaurants': ['Italian', 'Mexican', 'Chinese', 'Indian', 'Thai', 'American', 'Fancy'],
  'Transportation Services': ['Airport Shuttles', 'Taxi Services', 'Ride-sharing Services', 'Car Rentals', 'Public Transportation', 'Private Charters'],
  'Local Attractions': ['Museums', 'Historical Sites', 'Amusement Parks', 'Zoos', 'Gardens', 'Landmarks'],
  'Cultural Experiences': ['Traditional Performances', 'Art Exhibitions', 'Food Tours', 'Language Classes', 'Cooking Classes', 'Cultural Festivals'],
  'Shopping Districts': ['Boutiques', 'Malls', 'Flea Markets', 'Antique Shops', 'Local Crafts', 'Souvenir Stores'],
  'Day Tours': ['City Tours', 'Nature Tours', 'Food Tours', 'Adventure Tours', 'Historical Tours', 'Group Tours'],
  'Spa and Wellness Centers': ['Massage Services', 'Facials', 'Body Treatments', 'Yoga Studios', 'Fitness Classes', 'Alternative Therapies'],
  'Outdoor Activities': ['Hiking Trails', 'Camping Sites', 'Water Sports', 'Cycling Paths', 'Rock Climbing', 'Fishing Spots'],
  'Fitness Centers': ['Gyms', 'Yoga Studios', 'Pilates Studios', 'Personal Trainers', 'Group Classes', 'Sports Facilities'],
  'Golf Courses': ['Public Courses', 'Private Clubs', 'Driving Ranges', 'Golf Lessons', 'Pro Shops', 'Mini-golf'],
  'Wine Tastings and Tours': ['Vineyards', 'Wineries', 'Wine Bars', 'Wine Festivals', 'Wine Courses', 'Wine-themed Tours'],
  'Art Galleries': ['Contemporary Art', 'Traditional Art', 'Photography Exhibits', 'Sculpture Gardens', 'Art Classes', 'Artist Studios'],
  'Specialty Food Shops': ['Bakeries', 'Delis', 'Cheese Shops', 'Chocolate Shops', 'Farmers Markets', 'Gourmet Groceries'],
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
  'Medical Clinics or Pharmacies': ['General Practitioners', 'Dentists', 'Optometrists', 'Pharmacies', 'Urgent Care Clinics', 'Specialty Clinics']
  // Define sub-activities for other main activities
};

const Form = ({ isOpen, setIsOpen, setRestaurantLink, setIsRestaurant }) => {
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
  const [loading, setLoading] = useState(false);
  const [displayOptions, setDisplayOptions] = useState(false);
  const [displayBusinesses, setDisplayBusinesses] = useState([]);
  const [selectedCountes, setSelectedCounts] = useState({});


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

    // Limit to three options at most
    if (updatedIds.length > 3) {
      return; // Do not update state if more than three activities are selected
    }

    // Update the state with the selected ids
    // console.log(selectedActivityIds.length, "REEE")
    setSelectedIds(updatedIds);

    // Update the state with the selected and unselected names
    if (isSelected) {
      setUnselectedNames((prevNames) => prevNames.filter((name) => name !== activity));

    } else {
      setSelectedNames((prevNames) => [...prevNames, activity]);
    }

  };
  console.log(selectedActivityIds);

  const handleToSub = async () => {
    var temp = []
    setShowSubOptions(true)

    for (let k in subActivities) {
      temp.push(subActivities[k])
      // console.log(subActivities[k]);
    }


    var merged = [].concat.apply([], temp);
    console.log(merged, "HERE");
    setSubOptionConcat(merged);
    setCurrentPage(0);
    // console.log(businessTags, "BUSINESS TAGS")
  };

  const handleToOptions = async () => {
    const prompt = await organizeQuery(selectedActivityIds);
    setLoading(true);
    const response = await axios.post('http://127.0.0.1:8000/api/OPAICreateConvo/', { query: prompt });
    const businessesFromResponse = response.data['response-payload'].split(': ')[1].trim();
    console.log(businessesFromResponse);
    var multiBusinessResponse = businessesFromResponse.split(', ');
    var businessDataResponse;
    if (multiBusinessResponse.length > 1) {
      console.log(multiBusinessResponse, "MULTI")
      businessDataResponse = await axios.post('http://127.0.0.1:8000/api/queryBusinessData/', { business: multiBusinessResponse });
    }
    else {
      businessDataResponse = await axios.post('http://127.0.0.1:8000/api/queryBusinessData/', { business: businessesFromResponse });
    }
    setShowSubOptions(false);
    setDisplayBusinesses(businessDataResponse.data);
    setDisplayOptions(true);
    setTimeout(() => setLoading(false), 5000);
    console.log("THIS", businessDataResponse);
  }

  // setTimeout(() => {
  //   setLoading(false);
  //   setDisplayOptions(false);
  //   setShowSubOptions(false);
  // }, 1000000);

  const subTotalPages = Math.ceil(subOptionConcat.length / itemsPerPage);

  return (
    <div>
      {showSubOptions ? (<p className='font-quicksand text-2xl mb-10'>What kind of {selectedActivityIds.length > 2 ? "specific activities" : selectedActivityIds.join(', and ')} are you looking for?</p>) : (<></>)}
      <div className="flex justify-center font-quicksand">
        {displayOptions ?
          <>
            {loading ?
              <div className='flex items-center justify-center w-screen flex-col mb-12'>
                <p className='text-2xl text-black mx-auto text-center'>Finding the best options for you...</p>
                <Circles color="#0066FF" height={90} width={90} />
              </div>
              :
              <div>
                <a className=' bg-[#0066FF] py-5 px-4 rounded-lg text-white hover:scale-105 duration-300 ease-in-out' href='/home'>Back to Start</a>
                <p className='text-xl text-black mx-auto text-center mb-10 mt-9'>Here are the best options for you!</p>

                <DisplayedOptions businesses={displayBusinesses} setIsOpen={setIsOpen} isOpen={isOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant} />
              </div>
            }
          </>
          :
          <>
            <button
              className="rounded-full bg-slate-50 border-2 shadow-sm shadow-blue-500 text-black h-[500px] p-1 m-2 hover:scale-105 duration-300 ease-in-out"
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
                  />
                ))
              )
              }
            </div>
            <button
              className="rounded-full bg-slate-50 border-2 shadow-sm shadow-blue-500 text-black h-[500px] p-1 m-2 hover:scale-105 duration-300 ease-in-out"
              disabled={showSubOptions ? currentPage === subTotalPages - 1 : currentPage === totalPages - 1}
              onClick={handleNextPage}
            >
              <ChevronRightIcon className="h-auto w-10" />
            </button>
          </>
        }

      </div>
      <div className='flex flex-row justify-between mx-20'>

        {displayOptions ? (<></>) : (showSubOptions ? <><button className='my-auto py-11 px-4 text-2xl font-medium' onClick={() => setShowSubOptions(false)}>Back</button> <button className='my-auto  text-2xl bg-[#0066FF] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out ' onClick={() => handleToOptions()}>Get Recommendations</button></> : <><button className='my-auto py-11 px-4 text-2xl font-medium' onClick={() => setShowSubOptions(false)}>Back</button>  <button className='my-auto  text-2xl bg-[#0066FF] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out ' onClick={() => handleToSub()}>Select</button></>)}

      </div>
    </div>
  );
};

export default Form;
