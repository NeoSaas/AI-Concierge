import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import './../index.css';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const Navbar = lazy(() => import('./../components/Navbar'));
const BottomBanner = lazy(() => import('../components/BottomBannerLanding'));
const WeatherWidget = lazy(() => import('../components/weatherComponents/WeatherWidget'));
const MyDialog = lazy(() => import('../components/QrDialog'));
const HotelQrDialog = lazy(() => import('../components/hotel specific/HotelQrDialog'));

function Landing() {
  const { setIsHotelSpecific, isHotelSpecific, isOpen, setIsOpen, setRestaurantLink, setIsRestaurant, setClickedBusiness, restaurantLink, isRestaurant, clickedBusiness, suggestedDisplayed, setSuggestedDisplayed, isTimerComplete, setIsTimerComplete, setIsItinerary, isItinerary } = useAppContext();
  const bgImages = ["https://aiconcierge.b-cdn.net/Main%20Page/compressed/Ajusted-2-Alfond-Inn-Collage-Main-2-gigapixel-high-fidelity-v2-6x%20(1)_IMGCentury.jpg"];
  const [fetchedUrl, setFetchedUrl] = useState(bgImages[0]);
  const nav = useNavigate();

  const updatePhoto = useCallback(() => {
    let randomIndex = Math.floor(Math.random() * bgImages.length);
    setFetchedUrl(bgImages[randomIndex]);
  }, [bgImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      updatePhoto();
    }, 20000); // Change 5000 to the desired interval in milliseconds
    return () => clearInterval(interval);
  }, [updatePhoto]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <WeatherWidget />
        <Navbar />
        <BottomBanner />
      </Suspense>
      <div
        style={{ '--image-url': `url(${fetchedUrl})` }}
        className='h-[80vh] w-full bg-[url("/public/newbackground.png")] bg-cover flex justify-center items-center transition-all ease-in-out duration-500'
      >
        {isOpen && (
          isHotelSpecific ? (
            <HotelQrDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={restaurantLink} />
          ) : (
            <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={restaurantLink} isRestaurant={isRestaurant} clickedBusiness={clickedBusiness} />
          )
        )}
        <div className={'flex justify-center items-center text-black mt-12'}>
          {/* <div className='absolute h-[5%] w-[80%] mx-auto rounded-xl bg-gradient-to-t from-black via-transparent to-transparent mt-[60rem]'></div> */}
          <div className='flex justify-center items-center flex-col h-full w-[100%] text-center'>
            {/* <h1 className=' font-quicksand z-10 text-7xl mb-10'>Explore</h1>
            <h1 className=' font-cursive z-10 text-9xl flex flex-row'> Winter Park</h1>
            <h2 className=' font-quicksand z-10 text-3xl'>Find great places to eat, drink, shop and discover</h2>
            <h2 className=' font-quicksand z-10 mt-5 text-3xl'>Click one of the logos below to begin</h2> */}
            <div className='w-full flex-grid grid grid-cols-2 z-10 font-quicksand'>
              <div className='flex flex-col justify-center items-center mt-3 col-span-2 '>
                <button
                  onClick={() => { setIsItinerary(true); nav("/home"); }}
                  className=' text-black font-quicksand text-2xl px-8 py-3 rounded-lg mt-4 z-10'
                >
                  <img
                      className='w-96 h-68'
                      src='itinerary.png'
                      alt='Alfond Inn Logo'
                    />
                </button>
                <h1 className=' text-4xl font-bold'>AI Itinerary</h1>
              </div>
              <div className='col-span-2 flex-row flex gap-8'>
                <div className='flex flex-col justify-center items-center mt-1'>
                  <button
                    onClick={() => { setIsHotelSpecific(true); nav("/home"); }}
                    className='  font-quicksand text-2xl px-8 py-3 rounded-lg mt-1 z-10 col-span-2'
                  >
                    <img
                      className='w-96 h-68'
                      src='explorealfond.png'
                      alt='Alfond Inn Logo'
                    />
                  </button>
                  <p className='text-4xl font-bold'> Explore The Alfond Inn</p>
                </div>

                <div className='flex flex-col justify-center items-center'>
                  <button
                    onClick={() => { setIsHotelSpecific(false); nav("/home"); }}
                    className='  font-quicksand text-2xl px-8 py-3 rounded-lg mt-1 z-10'
                  >
                    <img
                      className='w-96 h-68'
                      src='explorewinterpark.png'
                      alt='Winter Park Logo'
                    />
                  </button>
                  <p className='text-4xl font-bold'> Explore Winter Park</p>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
