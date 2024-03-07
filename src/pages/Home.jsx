import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import TopBanner from '../components/TopBanner';
import BottomBanner from '../components/BottomBanner';
import Form from '../components/Form';
import ReactWeather, { useWeatherBit } from 'react-open-weather';

const Home = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    const { data, isLoading, errorMessage } = useWeatherBit({
        key: 'f90fd93e842f4f408cb2c83c5c10ddcd',
        lat: '28.6000',
        lon: '81.3392',
        lang: 'en',
        unit: 'I', // values are (M,S,I)
    });

    const customStyles = {
        fontFamily:  'Quicksand, sans-serif',
        gradientStart:  '#0181C2',
        gradientMid:  '#04A7F9',
        gradientEnd:  '#4BC4F7',
        locationFontColor:  '#FFF',
        todayTempFontColor:  '#FFF',
        todayDateFontColor:  '#B5DEF4',
        todayRangeFontColor:  '#B5DEF4',
        todayDescFontColor:  '#B5DEF4',
        todayInfoFontColor:  '#B5DEF4',
        todayIconColor:  '#FFF',
        forecastBackgroundColor:  '#FFF',
        forecastSeparatorColor:  '#DDD',
        forecastDateColor:  '#777',
        forecastDescColor:  '#777',
        forecastRangeColor:  '#777',
        forecastIconColor:  '#4BC4F7',
    };

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
            {/* w-full h-screen bg-[url(/public/bgpattern.png)] bg-auto md:bg-cover bg-center*/}
            <div className={`h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} >
                <div className='absolute w-[80%] h-32 top-0 flex-row mx-24'>
                {/* <ReactWeather
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    data={data}
                    lang="en"
                    locationLabel="Winter Park, FL"
                    unitsLabels={{ temperature: 'F', windSpeed: 'Mph' }}
                    showForecast = {false}
                    theme={customStyles}
                /> */}
                </div>
                <img className='w-36 absolute h-[100%] mt-0 right-0' src='wave-side.png' alt='wave'/>
                <img className='w-36 absolute h-[100%] mt-0 left-0' src='wave-transparent-left.png' alt='wave'/>
                {/* <img className='w-60 absolute h-auto bottom-12 right-[-150px]' src='poly.png' alt='wave'/>
                <img className='w-60 absolute h-auto bottom-12 left-[-120px]' src='poly.png' alt='wave'/> */}
                <Navbar />
                <Header />
                <BottomBanner/>
            </div>
        </>
  );
};

export default Home;
