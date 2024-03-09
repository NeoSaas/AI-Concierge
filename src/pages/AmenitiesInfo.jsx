import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';
import BottomBanner from '../components/BottomBanner';
import WeatherWidget from '../components/weatherComponents/WeatherWidget';
import MyDialog from '../components/QrDialog';

function AmenitiesInfo() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [qrOpen, setQrOpen] = useState(false);
    const qrCodes = ['https://thealfondinn.com/the-hotel/rooms-suites', 'https://thealfondinn.com/hamiltons-kitchen/the-restaurant', 'https://thealfondinn.com/meetings-events/meetings-and-event-space-information'];
    const [qrCode, setQrCode] = useState(null);

    useEffect(() => {
        //simulating a delay before content fades in (you can adjust this timing)
        const timeout = setTimeout(() => {
            setIsLoaded(true);
        }, 300);

        //clean up the timeout
        return () => clearTimeout(timeout);
    }, []);

    const handleButton = (index) => {
        console.log(index);
        setQrCode(qrCodes[index]);
        setQrOpen(true);
    }

    return (
        <div>
            <Navbar />
            <WeatherWidget />
            <MyDialog isOpen={qrOpen} setIsOpen={setQrOpen} qrCode={null} otherLink={qrCode}/>
            <img
                className="w-36 absolute h-[100%] mt-0 right-0"
                src="wave-side.png"
                alt="wave"
            />
            <img
                className="w-36 absolute h-[100%] mt-0 left-0"
                src="wave-transparent-left.png"
                alt="wave"
            />
            <BottomBanner />
            <div
                className={`w-full h-screen flex justify-center items-center flex-col transition-opacity duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
                <div className="py-8 ">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6">Amenities</h1>

                    <h2 className="text-2xl font-bold mb-4">General</h2>
                    <p className="mb-3 text-xl">
                    Unwind in your luxurious room equipped with a Keurig coffeemaker to start your day right. Complimentary coffee and tea pods are provided for your convenience. Stay connected with free WiFi throughout the hotel, or catch up on your favorite shows on the flat-screen TV in your room. Each room features a spacious work area with multiple outlets, a docking station, and USB connections, making it ideal for business travelers.
                    </p>
                    <button className='mb-5 text-2xl bg-[#0066FF] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out mt-10' onClick={() => handleButton(1)} >More Info</button>
                    <h2 className="text-2xl font-bold mb-4">In Room</h2>
                    <p className="mb-3 text-xl">
                    Indulge in the comfort of our plush towels and designer toiletries. All rooms come equipped with a hair dryer for your convenience. In-room amenities may vary depending on the room you choose. Some rooms offer the added luxury of a balcony, perfect for enjoying the fresh Florida air. Relax on a sleeper sofa (available in select rooms) or unwind in a separate living area (also offered in some rooms). Create a gourmet meal in your open galley kitchen (featured in specific room types), or utilize the full-size refrigerator and microwave for a quick bite (available in select rooms).
                    </p>
                    <button className='mb-5 text-2xl bg-[#0066FF] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out mt-10' onClick={() => handleButton(0)}>More Info</button>
                    <h2 className="text-2xl font-bold mb-4">Other Amenities</h2>
                    <p className="mb-3 text-xl">
                    For a truly rejuvenating experience, visit The Spa at The Alfond Inn. Treat yourself to a variety of pampering massages, facials, and body treatments designed to melt away stress and leave you feeling refreshed.  The Alfond Inn also boasts impressive event spaces, perfect for hosting weddings, conferences, or social gatherings. Their dedicated event staff is there to ensure your function is a resounding success.
                    </p>
                    <button className='mb-5 text-2xl bg-[#0066FF] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out mt-10' onClick={() => handleButton(2)}>More Info</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AmenitiesInfo