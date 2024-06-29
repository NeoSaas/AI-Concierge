import React, { useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import 'react-loader-spinner';
import { Circles } from 'react-loader-spinner';
import organizeItineraryQuery from './functions/organizeItineraryQuery';
import ItineraryDisplay from './ItineraryDisplay';
import { useAppContext } from '../../AppContext';

const ItineraryPlannerForm = () => {
  const { isOpen, setIsOpen, setRestaurantLink, setIsRestaurant, setClickedBusiness, setSuggestedDisplayed, setLoadingOptions, displayOptions, setDisplayOptions } = useAppContext();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedActivityIds, setSelectedActivityIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [itinerary, setItinerary] = useState('');

  const questions = [
    {
      question: "How long of a duration do you have for your tour or itinerary?",
      options: [
        "Morning: Half-Day Tour (8am to 1pm)",
        "Afternoon: Half-Day Tour (12pm to 6pm)",
        "Full-Day Tour (8am to 6pm)",
        "Evening/Night Itinerary (6pm to Until)",
        "Multi-Day Tour"
      ]
    },
    {
      question: "How many members are in your group?",
      options: [
        "Solo Traveler",
        "Couple",
        "Small Group (2-6 members)",
        "Medium Group (7 to 15 members)",
        "Large Group (16 to 25 Members)"
      ]
    },
    {
      question: "What mode of transportation will you be needing or using for your itinerary?",
      options: [
        "Will be Walking or Biking",
        "Have my own vehicle transportation",
        "Need rental car services",
        "Will use ride-share services (Uber, Lyft, others)"
      ]
    },
    {
      question: "What type of itinerary are you looking for?",
      options: [
        "Art Galleries",
        "Attractions",
        "City Sightseeing Tours/Historical Sites Tours",
        "Entertainment/Theater/Plays/Movies",
        "Evening/Night Life",
        "Food Tasting Tour",
        "Museums Tours",
        "Outdoor Adventures Tours",
        "Shopping",
        "Spa/Fitness/Salons",
        "Wine Tasting Tour",
        "Bars or Clubbing"
      ]
    },
    {
      question: "Do you want to include food/drink recommendations within your itinerary?",
      options: ["Yes please pick all the recommendations for me Ai-Concierge i trust you!",  "Yes but ill spend 3 more minutes to pick out my own options because im a picky eater :)", "No"]
    },
    {
      question: "Do you want to select your type of Cuisine?",
      options: ["No, you recommend from our local favorites", "Yes"],
      condition: (answers) => answers["Do you want to include food/drink recommendations within your itinerary?"] === "Yes but ill spend 3 more minutes to pick out my own options because im a picky eater :)"
    },
    {
      question: "If Yes, show me my cuisine options. (Select 1)",
      options: [
        "American",
        "Italian",
        "French",
        "Asian",
        "Mexican",
        "Mediterranean",
        "Fusion/Contemporary"
      ],
      condition: (answers) => answers["Do you want to select your type of Cuisine?"] === "Yes"
    },
    {
      question: "Are there any dietary restrictions or preferences we should consider?",
      options: [
        "No specific dietary restrictions",
        "Dairy-free",
        "Farm-to-table",
        "Gluten-free",
        "Halal",
        "Kosher",
        "Nut-free",
        "Organic/local ingredients",
        "Vegan",
        "Vegetarian"
      ],
      multiple: true,
      condition: (answers) => answers["Do you want to include food/drink recommendations within your itinerary?"] === "Yes but ill spend 3 more minutes to pick out my own options because im a picky eater :)"
    },
    {
      question: "What is your pricing range?",
      options: [
        "No Preference",
        "Budget-Friendly",
        "Moderate",
        "Splurge-Worthy"
      ],
      multiple: true,
      condition: (answers) => answers["Do you want to include food/drink recommendations within your itinerary?"] === "Yes but ill spend 3 more minutes to pick out my own options because im a picky eater :)"
    },
    {
      question: "How would you describe your dining atmosphere?",
      options: [
        "No preference required",
        "Casual/Family-Friendly",
        "Cozy/Intimate",
        "Fine Dining/Elegant",
        "Outdoor Dining/Patio",
        "Rustic/Charming",
        "Trendy/Modern",
        "Upscale/Cosmopolitan"
      ],
      multiple: true,
      condition: (answers) => answers["Do you want to include food/drink recommendations within your itinerary?"] === "Yes but ill spend 3 more minutes to pick out my own options because im a picky eater :)"
    },
    {
      question: "Are looking for any specialty dishes or features?",
      options: [
        "No preference",
        "Chef's Specials",
        "Craft Cocktails/Bar Selection",
        "Local/Regional Cuisine",
        "Seafood",
        "Signature Desserts",
        "Steakhouse",
        "Vegetarian/Vegan Options"
      ],
      multiple: true,
      condition: (answers) => answers["Do you want to include food/drink recommendations within your itinerary?"] === "Yes but ill spend 3 more minutes to pick out my own options because im a picky eater :)"
    },
    {
      question: "Are you looking for any ambiance features?",
      options: [
        "No preference",
        "Fireplace/Outdoor Firepit",
        "Live Music/Entertainment",
        "Lounge/Bar Area",
        "Open Kitchen/Chef's Table",
        "Private Dining/Event Space",
        "Scenic Views/Waterfront",
        "Wine Cellar/Tasting Room"
      ],
      multiple: true,
      condition: (answers) => answers["Do you want to include food/drink recommendations within your itinerary?"] === "Yes but ill spend 3 more minutes to pick out my own options because im a picky eater :)"
    },
    {
      question: "Are you for independent cuisine special ratings?",
      options: [
        "No Preference",
        "Michelin Guide",
        "AAA Diamond Awards",
        "James Beard Foundation Awards",
        "Listed as Favorites/Popular among locals by independent press."
      ],
      multiple: true,
      condition: (answers) => answers["Do you want to include food/drink recommendations within your itinerary?"] === "Yes but ill spend 3 more minutes to pick out my own options because im a picky eater :)"
    }
  ];

  const handleActivitySelect = useCallback((activity, question) => {
    setSelectedOptions((prev) => {
      const newOptions = { ...prev };
      if (Array.isArray(newOptions[question])) {
        if (newOptions[question].includes(activity)) {
          newOptions[question] = newOptions[question].filter((opt) => opt !== activity);
        } else {
          newOptions[question].push(activity);
        }
      } else {
        newOptions[question] = activity;
      }
      return newOptions;
    });
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleBackToForm = useCallback(() => {
    setDisplayOptions(false);
    setSuggestedDisplayed(false);
    setFailed(false);
    setLoadingOptions(false);
  }, [setDisplayOptions, setSuggestedDisplayed, setLoadingOptions]);

  const handleToOptions = async () => {
    try {
      setSuggestedDisplayed(true);
      setDisplayOptions(true);
      setLoading(true);
      setLoadingOptions(true);

      const prompt = await organizeItineraryQuery(selectedOptions);
      const response = await axios.post('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/OPAICreateConvo/', { query: prompt });
      setLoading(false);
      setItinerary(response.data['response-payload']);
    } catch (error) {
      //console.log(error);
      setFailed(true);
      setLoading(false);
      setDisplayOptions(true);
    }
  };

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => !q.condition || q.condition(selectedOptions));
  }, [questions, selectedOptions]);

  const questionsPerPage = 5;
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);

  const startIndex = currentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = filteredQuestions.slice(startIndex, endIndex);

  return (
    <div>
      <div className="flex justify-center font-quicksand">
        {displayOptions ?
          <>
            {loading ?
              <div className='flex items-center justify-center w-[24vh] flex-col mb-4'>
                <p className='text-2xl text-black mx-auto text-center'>Getting Ready to build your itinerary....</p>
                <Circles color="#5C0601" height={120} width={120} />
              </div>
              :
              <div>
                {failed ? 
                  <>
                    <p className='text-3xl text-black mx-auto text-center mb-10 mt-9'>Can't Build Itinerary. Please try again!</p> 
                    <button className=' bg-[#5C0601] py-5 px-4 rounded-lg text-white hover:scale-105 duration-300 ease-in-out' onClick={handleBackToForm}>Back to Form</button>
                  </>
                  : 
                  <div className='flex flex-col'>
                    <ItineraryDisplay itinerary={itinerary} />
                    <button className=' bg-[#5C0601] py-4 px-72 rounded-full text-white hover:scale-105 duration-300 ease-in-out text-3xl font-semibold' onClick={handleBackToForm}>Back to Form</button>
                    <a className=' bg-[#5C0601] py-4 px-72 mt-4 rounded-full text-white hover:scale-105 duration-300 ease-in-out text-3xl font-semibold' href='/'>Back to Home</a>
                  </div>
                }
              </div>
            }
          </>
          :
          <div className="w-full max-w-2xl mx-auto p-4">
            <div>
              {currentQuestions.map((currentQuestion, qIndex) => (
                <div key={qIndex} className="mb-4">
                  <p className="text-xl font-bold mb-2">{currentQuestion.question}</p>
                  <select
                    className="w-full p-2 border rounded text-lg"
                    value={selectedOptions[currentQuestion.question] || ""}
                    onChange={(e) => handleActivitySelect(e.target.value, currentQuestion.question)}
                  >
                    <option value="">Select an option</option>
                    {currentQuestion.options.map((option, oIndex) => (
                      <option key={oIndex} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            <div className={currentPage > 0 ? "flex justify-between mt-4 font-bold" : "flex justify-end mt-4 font-bold"}>
              {currentPage > 0 && (
                <button
                  className="my-auto border-[3px] border-[#5C0601] text-2xl bg-[#5C0601] disabled:border-gray-400 disabled:bg-gray-400 px-[3.5rem] py-3 text-white font-bold rounded-full transition duration-300 ease-in-out"
                  onClick={handlePrevPage}
                >
                  Previous
                </button>
              )}
              {currentPage < totalPages - 1 && (
                <button
                  className="my-auto border-[3px] border-[#5C0601] text-2xl bg-[#5C0601] disabled:border-gray-400 disabled:bg-gray-400 px-[4.7rem] py-3 text-white font-bold rounded-full transition duration-300 ease-in-out"
                  onClick={handleNextPage}
                >
                  Next Page
                </button>
              )}
              {currentPage === totalPages - 1 && (
                <button
                  className="my-auto border-[3px] border-[#5C0601] text-2xl bg-[#5C0601] disabled:border-gray-400 disabled:bg-gray-400 px-[4.7rem] py-3 text-white font-bold rounded-full transition duration-300 ease-in-out"
                  onClick={handleToOptions}
                >
                  Get Itinerary
                </button>
              )}
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default ItineraryPlannerForm;
