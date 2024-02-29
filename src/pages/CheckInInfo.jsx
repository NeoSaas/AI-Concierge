import React from 'react'
import { useState, useEffect } from 'react';

function CheckInInfo() {
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
        <div>
            <Navbar />
            <img className='w-36 absolute h-[90%] mt-56 right-0' src='wave-side.png' alt='wave'/>
            <img className='w-36 absolute h-[90%] mt-56 left-0' src='wave-transparent-left.png' alt='wave'/>
            <TopBanner />
            <BottomBanner/>
            <div className={`w-full h-screen flex justify-center items-center flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <img className='flex w-[90%] mx-auto' src='MapofAlfondInnProperty.png' alt='hotel-map'/>
            </div>
        </div>
    )
}

export default CheckInInfo