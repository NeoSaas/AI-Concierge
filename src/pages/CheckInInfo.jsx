import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';
import BottomBanner from '../components/BottomBanner';
import WeatherWidget from '../components/weatherComponents/WeatherWidget';

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
            <WeatherWidget/>
            <img className='w-36 absolute h-[90%] mt-56 right-0' src='wave-side.png' alt='wave'/>
            <img className='w-36 absolute h-[90%] mt-56 left-0' src='wave-transparent-left.png' alt='wave'/>
            <BottomBanner/>
            <div className={`w-full h-screen flex justify-center items-center flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="bg-gray-100 min-h-screen py-8">
                    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                        <h1 className="text-3xl font-bold mb-6">Check-in & Check-out Information</h1>

                        <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Check-in</h2>
                        <p className="mb-4">
                            Check-in time starts at 3:00 PM. Early check-in may be available upon request and subject to availability.
                        </p>
                        <p className="mb-4">
                            Upon arrival, please have your valid photo ID and booking confirmation ready to present at the front desk.
                        </p>
                        <p>
                            If you need any special assistance or have specific requirements, please let us know in advance so we can make the necessary arrangements.
                        </p>
                        </div>

                        <div>
                        <h2 className="text-2xl font-bold mb-4">Check-out</h2>
                        <p className="mb-4">
                            Check-out time is at 11:00 AM. Late check-out may be available upon request and subject to availability and additional charges.
                        </p>
                        <p className="mb-4">
                            Please ensure that all room keys are returned to the front desk upon check-out. Any outstanding charges or incidentals will need to be settled at this time.
                        </p>
                        <p>
                            If you need any assistance with transportation or have any other requests, our staff will be happy to assist you.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckInInfo