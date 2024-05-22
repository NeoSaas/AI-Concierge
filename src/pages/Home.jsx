import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { useAppContext } from '../AppContext';

const ItineraryHeader = lazy(() => import('../components/itinerary-planner/ItineraryHeader'));
const Navbar = lazy(() => import('../components/Navbar'));
const Header = lazy(() => import('../components/Header'));
const BottomBanner = lazy(() => import('../components/BottomBanner'));
const Form = lazy(() => import('../components/Form'));
const WeatherWidget = lazy(() => import('../components/weatherComponents/WeatherWidget'));
const MyDialog = lazy(() => import('../components/QrDialog'));
const HotelQrDialog = lazy(() => import('../components/hotel specific/HotelQrDialog'));
const TimeoutRedirect = lazy(() => import('../components/Timeout'));


const Home = () => {
    const { setIsHotelSpecific, isHotelSpecific, isOpen, setIsOpen, setRestaurantLink, setIsRestaurant, setClickedBusiness, restaurantLink, isRestaurant, clickedBusiness, suggestedDisplayed, setSuggestedDisplayed, isTimerComplete, setIsTimerComplete, setIsItinerary, isItinerary } = useAppContext();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulating a delay before content fades in
        const timeout = setTimeout(() => {
            setIsLoaded(true);
        }, 300);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <WeatherWidget />
                <Navbar />
            </Suspense>
            <div className={`h-[90vh] bg-[url(https://aiconcierge.b-cdn.net/main/mainbg.jpg)] mt-[-100px] bg-cover`} >
                {isTimerComplete ? <TimeoutRedirect /> : null}
                {suggestedDisplayed && (
                    <>
                        <div className='absolute gradient-top h-[85%] w-full opacity-70'></div>
                        <div className='absolute gradient-bottom h-[85%] w-full opacity-70'></div>
                    </>
                )}
                <div className={`h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {isOpen && (
                        isHotelSpecific ? (
                            <HotelQrDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={restaurantLink} />
                        ) : (
                            <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={restaurantLink} isRestaurant={isRestaurant} clickedBusiness={clickedBusiness} />
                        )
                    )}
                    <div className='w-full h-[88%] flex justify-center items-center'>
                        <Suspense fallback={<div>Loading...</div>}>
                            {isItinerary ? 
                            <ItineraryHeader
                                suggestedDisplayed={suggestedDisplayed}
                                setSuggestedDisplayed={setSuggestedDisplayed}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                setRestaurantLink={setRestaurantLink}
                                setIsRestaurant={setIsRestaurant}
                                setClickedBusiness={setClickedBusiness}
                                isHotelSpecific={isHotelSpecific}
                                setIsHotelSpecific={setIsHotelSpecific}
                            />
                            : 
                            <Header
                                suggestedDisplayed={suggestedDisplayed}
                                setSuggestedDisplayed={setSuggestedDisplayed}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                setRestaurantLink={setRestaurantLink}
                                setIsRestaurant={setIsRestaurant}
                                setClickedBusiness={setClickedBusiness}
                                isHotelSpecific={isHotelSpecific}
                                setIsHotelSpecific={setIsHotelSpecific}
                            />}
                            
                        </Suspense>
                    </div>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <BottomBanner />
                </Suspense>
            </div>
        </div>
    );
};

export default Home;
