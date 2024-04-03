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
        <div className="bg-[url(https://cdn.asdfinc.io/media/33665/alfond-inndji_0710-1-copy.jpg?center=0.27848101265822783,0.48739495798319327&mode=crop&width=1920&height=1080&rnd=133510848810000000&quality=80)] bg-cover">
            <Navbar />
            <WeatherWidget/>
            <div className='absolute gradient-top h-full w-full'></div>
            <div className='absolute gradient-bottom h-full w-full'></div>
            <BottomBanner/>
            <div className={`w-full h-screen flex justify-center items-center flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a className='py-2 px-6 bg-[#5C0601] rounded-lg text-white font-quicksand text-xl mb-12' href="/home">Back To Home</a>
                <img className='flex w-[90%] mx-auto' src='MapofAlfondInnProperty.png' alt='hotel-map'/>
            </div>
        </div>
    )
}

export default HotelMap