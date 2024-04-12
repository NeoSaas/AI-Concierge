import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import BottomBanner from '../components/BottomBanner';
import Form from '../components/Form';
import WeatherWidget from '../components/weatherComponents/WeatherWidget';
import MyDialog from '../components/QrDialog';
import HotelQrDialog from '../components/hotel specific/HotelQrDialog';

const Home = ({ setIsHotelSpecific, isHotelSpecific }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [restaurantLink, setRestaurantLink] = useState(null);
    const [isRestaurant, setIsRestaurant] = useState(true);
    const [clickedBusiness, setClickedBusiness] = useState([]);
    
    

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
            <div className={`h-[85vh] bg-[url(https://aiconcierge.b-cdn.net/MainPage/Alfond-Inn-Main-Image-26-x-48-Inches.png)] bg-cover`} >
                <div className=''>
                    <WeatherWidget/>
                </div>
                {/* <div className='absolute gradient-top h-full w-full opacity-70'></div>
                <div className='absolute gradient-bottom h-full w-full opacity-70'></div> */}
                <div className={`h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {isOpen ? 
                        isHotelSpecific ?
                        <HotelQrDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={restaurantLink} />
                        :
                        <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={restaurantLink} isRestaurant={isRestaurant} clickedBusiness={clickedBusiness}/> 
                    : null}
                    {/* <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={restaurantLink} isRestaurant={isRestaurant} clickedBusiness={clickedBusiness}/> */}
                    {/* <img className='w-36 absolute h-[100%] mt-0 right-0' src='wave-side.png' alt='wave'/>
                    <img className='w-36 absolute h-[100%] mt-0 left-0' src='wave-transparent-left.png' alt='wave'/> */}
                    <Navbar />
                    
                    <div className='w-full h-[88%] flex justify-center items-center'>
                        
                        <Header isOpen={isOpen} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant} setClickedBusiness={setClickedBusiness} isHotelSpecific={isHotelSpecific} setIsHotelSpecific={setIsHotelSpecific}/>
                    </div>
                    
                    
                </div>
                <BottomBanner/>
            </div>
        </>
  );
};

export default Home;
