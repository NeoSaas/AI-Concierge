import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import TopBanner from '../components/TopBanner';
import BottomBanner from '../components/BottomBanner';
import Form from '../components/Form';

const Home = () => {

    const [isLoaded, setIsLoaded] = useState(false);

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
