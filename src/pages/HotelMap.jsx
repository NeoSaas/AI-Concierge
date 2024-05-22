import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { useAppContext } from '../AppContext';

const Navbar = lazy(() => import('../components/Navbar'));
const TopBanner = lazy(() => import('../components/TopBanner'));
const BottomBanner = lazy(() => import('../components/BottomBanner'));
const WeatherWidget = lazy(() => import('../components/weatherComponents/WeatherWidget'));
const TimeoutRedirect = lazy(() => import('../components/Timeout'));


function HotelMap() {
  const [isTimerComplete, setIsTimerComplete] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTimerComplete(true);
    }, 4 * 60 * 1000); // 4 minutes in milliseconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Simulating a delay before content fades in
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 8);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-[90vh] bg-[url(https://aiconcierge.b-cdn.net/main/mainbg.jpg)] mt-[-100px] bg-cover">
      <Suspense fallback={<div>Loading...</div>}>
        <WeatherWidget />
        <Navbar />
        {isTimerComplete ? <TimeoutRedirect /> : null}
        <div className='absolute gradient-top h-full w-full'></div>
        <div className='absolute gradient-bottom h-full w-full'></div>
        <BottomBanner />
      </Suspense>
      <div className={`w-full h-screen flex justify-center items-center flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <a className='py-2 px-6 bg-[#5C0601] rounded-lg text-white font-quicksand text-xl mb-12' href="/home">Back To Home</a>
        <img className='flex w-[90%] mx-auto' src='MapofAlfondInnProperty.png' alt='hotel-map' />
      </div>
    </div>
  );
}

export default HotelMap;
