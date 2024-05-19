import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import BottomBanner from '../components/BottomBanner';
import Form from '../components/Form';
import WeatherWidget from '../components/weatherComponents/WeatherWidget';
import MyDialog from '../components/QrDialog';
import HotelQrDialog from '../components/hotel specific/HotelQrDialog';
import TimeoutRedirect from '../components/Timeout';

const Home = ({ setIsHotelSpecific, isHotelSpecific }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [restaurantLink, setRestaurantLink] = useState(null);
    const [isRestaurant, setIsRestaurant] = useState(true);
    const [clickedBusiness, setClickedBusiness] = useState([]);
    const [isTimerComplete, setIsTimerComplete] = useState(false);
    const [suggestedDisplayed, setSuggestedDisplayed] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTimerComplete(true);
        }, 2 * 60 * 1000); // 4 minutes in milliseconds

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        //simulating a delay before content fades in (you can adjust this timing)
        const timeout = setTimeout(() => {
            setIsLoaded(true);
        }, 300);
        //clean up the timeout
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <WeatherWidget/>
            <Navbar />
            <div className={`h-[90vh] bg-[url(https://aiconcierge.b-cdn.net/Main%20Page/Ajusted-2-Alfond-Inn-Collage-Main-2-gigapixel-high-fidelity-v2-6x.jpg)] mt-[-100px] bg-cover`} >
                {isTimerComplete ? <TimeoutRedirect /> : null}
                {suggestedDisplayed ? <><div className='absolute gradient-top h-[85%] w-full opacity-70'></div>
                <div className='absolute gradient-bottom h-[85%] w-full opacity-70'></div></> : null }
                {/* <div className='absolute gradient-top h-full w-full opacity-70'></div>
                <div className='absolute gradient-bottom h-full w-full opacity-70'></div> */}
                <div className={`h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {isOpen ? 
                        isHotelSpecific ?
                        <HotelQrDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={restaurantLink} />
                        :
                        <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={restaurantLink} isRestaurant={isRestaurant} clickedBusiness={clickedBusiness}/> 
                    : null}
                    {/* <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={restaurantLink} isRestaurant={isRestaurant} clickedBusiness={clickedBusiness}/> */}
                    {/* <img className='w-36 absolute h-[100%] mt-0 right-0' src='wave-side.png' alt='wave'/>
                    <img className='w-36 absolute h-[100%] mt-0 left-0' src='wave-transparent-left.png' alt='wave'/> */}
                    
                    
                    <div className='w-full h-[88%] flex justify-center items-center'>
                        
                        <Header suggestedDisplayed={suggestedDisplayed} setSuggestedDisplayed={setSuggestedDisplayed} isOpen={isOpen} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant} setClickedBusiness={setClickedBusiness} isHotelSpecific={isHotelSpecific} setIsHotelSpecific={setIsHotelSpecific}/>
                    </div>
                    
                    
                </div>
                <BottomBanner/>
            </div>
        </div>
  );
};

export default Home;
