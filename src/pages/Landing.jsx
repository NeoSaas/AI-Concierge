import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import './../index.css';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const Navbar = lazy(() => import('./../components/Navbar'));
const BottomBanner = lazy(() => import('../components/BottomBanner'));
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
        className='h-[90vh] mt-[-100px] w-full bg-[url(https://aiconcierge.b-cdn.net/main/mainbg.jpg)] bg-cover flex justify-center items-center transition-all ease-in-out duration-500'
      >
        {isOpen && (
            isHotelSpecific ? (
                <HotelQrDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={restaurantLink} />
            ) : (
                <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={restaurantLink} isRestaurant={isRestaurant} clickedBusiness={clickedBusiness} />
            )
        )}
        <div className={'flex justify-center items-center mb-[672px]'}>
          <div className='absolute h-[32%] w-[80%] mx-auto rounded-xl bg-gradient-to-b from-black via-black to-black opacity-90'></div>
          <div className='absolute h-[32%] w-[80%] mx-auto rounded-xl bg-gradient-to-t from-black via-transparent to-transparent'></div>
          <div className='absolute h-[6%] w-[80%] mx-auto rounded-xl bg-gradient-to-b from-black via-black to-black opacity-100 mt-[60rem]'>
            <div className='flex flex-col justify-center items-center mt-3'>
                <h1 className='text-white text-xl'>Or Build your Itinerary!</h1>
                <button
                  onClick={() => { setIsItinerary(true); nav("/home"); }}
                  className=' text-black bg-white font-quicksand text-2xl px-8 py-3 rounded-lg mt-4 z-10 animate-pulse'
                >
                  Build Itinerary
                </button>
              </div>
           </div>
          {/* <div className='absolute h-[5%] w-[80%] mx-auto rounded-xl bg-gradient-to-t from-black via-transparent to-transparent mt-[60rem]'></div> */}
          <div className='flex justify-center items-center flex-col h-full w-[100%] text-center'>
            <h1 className='text-white font-quicksand z-10 text-7xl mb-10'>Explore</h1>
            <h1 className='text-white font-cursive z-10 text-9xl flex flex-row'> Winter Park</h1>
            <h2 className='text-white font-quicksand z-10 text-3xl'>Find great places to eat, drink, shop and discover</h2>
            <h2 className='text-white font-quicksand z-10 mt-5 text-3xl'>Click one of the logos below to begin</h2>
            <div className='w-full flex flex-row justify-between h-auto z-10 font-quicksand'>
              <div className='flex flex-col justify-center items-center mt-10'>
                <button
                  onClick={() => { setIsHotelSpecific(true); nav("/home"); }}
                  className=' text-white font-quicksand text-2xl px-8 py-3 rounded-lg mt-4 z-10'
                >
                  <img
                    className='w-32 h-32'
                    src='https://thealfondinn.com/media/29890/alfond-inn-favicon.svg?quality=30'
                    alt='Alfond Inn Logo'
                  />
                </button>
                <p className='text-3xl text-white'> Explore The Alfond Inn</p>
              </div>
              
              <div className='flex flex-col justify-center items-center mt-5'>
                <button
                  onClick={() => { setIsHotelSpecific(false); nav("/home"); }}
                  className=' text-white font-quicksand text-2xl px-8 py-3 rounded-lg mt-4 z-10'
                >
                  <img
                    className='w-36 h-36'
                    src='https://cityofwinterpark.org/wp-content/uploads/2019/12/city-of-winter-park-seal.png'
                    alt='Winter Park Logo'
                  />
                </button>
                <p className='text-3xl text-white'> Explore Winter Park</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
