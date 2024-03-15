import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import BottomBanner from '../components/BottomBanner';
import Form from '../components/Form';
import WeatherWidget from '../components/weatherComponents/WeatherWidget';
import MyDialog from '../components/QrDialog';

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [restaurantLink, setRestaurantLink] = useState(null);
    const [isRestaurant, setIsRestaurant] = useState(false);

    useEffect(() => {
        //simulating a delay before content fades in (you can adjust this timing)
        const timeout = setTimeout(() => {
            setIsLoaded(true);
        }, 300);

        //clean up the timeout
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className={`h-screen bg-[url(https://cdn.asdfinc.io/media/33665/alfond-inndji_0710-1-copy.jpg?center=0.27848101265822783,0.48739495798319327&mode=crop&width=1920&height=1080&rnd=133510848810000000&quality=80)] bg-cover`} >
                <div className=''>
                    <WeatherWidget/>
                </div>
                <div className='absolute gradient-top h-full w-full'></div>
                <div className='absolute gradient-bottom h-full w-full'></div>
                <div className={`h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={restaurantLink} isRestaurant={isRestaurant}/>
                    {/* <img className='w-36 absolute h-[100%] mt-0 right-0' src='wave-side.png' alt='wave'/>
                    <img className='w-36 absolute h-[100%] mt-0 left-0' src='wave-transparent-left.png' alt='wave'/> */}
                    <Navbar />
                    <Header isOpen={isOpen} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant}/>
                    <BottomBanner/>
                </div>
            </div>
        </>
  );
};

export default Home;
