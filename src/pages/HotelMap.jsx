import React from 'react';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';
import BottomBanner from '../components/BottomBanner';
import { useState, useEffect } from 'react';
import WeatherWidget from '../components/weatherComponents/WeatherWidget';

function HotelMap() {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        //simulating a delay before content fades in (you can adjust this timing)
        const timeout = setTimeout(() => {
            setIsLoaded(true);
        }, 8);

        //clean up the timeout
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <Navbar />
            <WeatherWidget/>
            <img className='w-36 absolute h-[100%] mt-0 right-0' src='wave-side.png' alt='wave'/>
            <img className='w-36 absolute h-[100%] mt-0 left-0' src='wave-transparent-left.png' alt='wave'/>
            <BottomBanner/>
            <div className={`w-full h-screen flex justify-center items-center flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <img className='flex w-[90%] mx-auto' src='MapofAlfondInnProperty.png' alt='hotel-map'/>
            </div>
        </div>
    )
}

export default HotelMap