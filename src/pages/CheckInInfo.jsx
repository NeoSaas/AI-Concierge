import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';
import BottomBanner from '../components/BottomBanner';
import WeatherWidget from '../components/weatherComponents/WeatherWidget';
import MyDialog from '../components/QrDialog';
import TimeoutRedirect from '../components/Timeout';
import { useAppContext } from '../AppContext';

function CheckInInfo() {
    const { isOpen, setIsOpen} = useAppContext();
    const [isLoaded, setIsLoaded] = useState(false);
    const [qrOpen, setQrOpen] = useState(false);
    const qrCodes = [`https://thealfondinn.com/the-hotel/rooms-suites#/booking/step-1?data=('hBhd!'alfond-inn'~ae706dt716fs.~rBat!2~cn!0~cg.~al9po5gp5rn.)Ary5rk5re.~rr*)Aax!0~cy5ds!('pe5ls5as5st*)~my9se5ce5ne*)*!null.8%5D5*~6%2F2024'~7!'03%2F18!%5B9!false~A%5D~Bs8('%01BA98765.*_`, 'https://thealfondinn.com/the-hotel/rooms-suites'];
    const [qrCode, setQrCode] = useState(null);
    const [isTimerComplete, setIsTimerComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTimerComplete(true);
        }, 4 * 60 * 1000); // 4 minutes in milliseconds

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

    const handleCheckIn = () => {
        console.log('check in');
        setQrCode(qrCodes[0]);
        setIsOpen(true);
    }

    const handleCheckOut = () => {
        setQrCode(qrCodes[1]);
        setIsOpen(true);
    }

    return (
        <>
        <WeatherWidget/>
            <Navbar />
        <div className='h-[90vh] bg-[url(https://aiconcierge.b-cdn.net/main/mainbg.jpg)] mt-[-100px] bg-cover'>
            {isTimerComplete ? <TimeoutRedirect /> : null}
            
            <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={qrCode}/>
            <div className='absolute gradient-top h-full w-full'></div>
            <div className='absolute gradient-bottom h-full w-full'></div>
            <BottomBanner/>
            <div className={`w-full h-[70vh] flex justify-center items-center flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <a className='py-2 px-6 bg-[#5C0601] rounded-lg text-white font-quicksand text-xl' href="/home">Back To Home</a>
                <div className="py-8">
                    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                        <h1 className="text-3xl font-bold mb-6">Check-in & Check-out Information</h1>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">Check-in</h2>
                            <p className="mb-8 text-xl">
                                Check-in time starts at 3:00 PM. Early check-in may be available upon request and subject to availability.
                            </p>
                            <p className="mb-8 text-xl">
                                Upon arrival, please have your valid photo ID and booking confirmation ready to present at the front desk.
                            </p>
                            <p className="mb-1 text-xl" >
                                If you need any special assistance or have specific requirements, please let us know in advance so we can make the necessary arrangements.
                            </p>
                            <button className='my-auto  text-2xl bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out mt-10' onClick={() => handleCheckIn()}>Check In Qr Code</button>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">Check-out</h2>
                            <p className="mb-8 text-xl">
                                Check-out time is at 11:00 AM. Late check-out may be available upon request and subject to availability and additional charges.
                            </p>
                            <p className="mb-8 text-xl">
                                Please ensure that all room keys are returned to the front desk upon check-out. Any outstanding charges or incidentals will need to be settled at this time.
                            </p>
                            <p className="mb-1 text-xl">
                                If you need any assistance with transportation or have any other requests, our staff will be happy to assist you.
                            </p>
                            <button className='  text-2xl bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out mt-10' onClick={() => handleCheckOut()}>Check Out Qr Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CheckInInfo