import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import TopBanner from '../../components/TopBanner';
import BottomBanner from '../../components/BottomBanner';
import WeatherWidget from '../../components/weatherComponents/WeatherWidget';
import MyDialog from '../../components/QrDialog';
import TimeoutRedirect from '../../components/Timeout';
import { useAppContext } from '../../AppContext';

function AmenitiesSpa() {
    const { isOpen, setIsOpen} = useAppContext();
    const [isLoaded, setIsLoaded] = useState(false);
    const [qrOpen, setQrOpen] = useState(false);
    const qrCodes = ['https://na.spatime.com/tai32789/5228842/home', 'https://qrco.de/bebESs', 'https://tai32789.na.book4time.com/spagift/', 'https://thealfondinn.com/meetings-events/event-inquiry-form', 'https://thealfondinn.com/meetings-events/event-inquiry-form', 'https://thealfondinn.com/meetings-events/event-inquiry-form', 'https://thealfondinn.com/meetings-events/event-inquiry-form', 'https://thealfondinn.com/meetings-events/event-inquiry-form', 'https://thealfondinn.com/meetings-events/event-inquiry-form', 'https://thealfondinn.com/meetings-events/event-inquiry-form', 'https://thealfondinn.com/meetings-events/event-inquiry-form'];
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

    const handleButton = (index) => {
        // //console.log(index);
        setQrCode(qrCodes[index]);
        setIsOpen(true);
    }

    return (
        <div className='h-[90vh] bg-[url(https://aiconcierge.b-cdn.net/main/mainbg.jpg)] bg-cover'>
            
            {isTimerComplete ? <TimeoutRedirect /> : null}
            <WeatherWidget />
            <Navbar />
            <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={qrCode}/>
            <div className='absolute gradient-top h-[85%] w-full'></div>
            <div className='absolute gradient-bottom h-[85%] w-full'></div>
            <BottomBanner />
            <div
                className={`w-full h-[56vh] overflow-y-hidden flex justify-center items-center flex-col transition-opacity duration-1000 mt-12 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
                <a className='py-2 px-6 bg-[#5C0601] rounded-lg text-white font-quicksand text-xl mb-2' href="/home">Back To Home</a>
                <div className="py-8 font-quicksand flex-col overflow-auto bg-white p-8 rounded-lg shadow-md"> 
                    <div className="max-w-4xl mx-auto max-h-[70rem]">
                        <p className="text-4xl text-center mb-2">THE SPA AT THE ALFOND INN</p>
                        {/* Items */}
                        <div className="grid gap-10">

                            {/* 1st item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://cdn.asdfinc.io/media/32214/1000px_alfond-inn-ii_o6a8664-1.jpeg?anchor=center&mode=crop&width=1600&height=900&rnd=133428955650000000&quality=30' width={420} height={405} alt="Features 01" />
                                </div>
                                {/* Content */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                        <h3 className="text-2xl mb-3 font-quicksand">
                                            Elevated Elegance
                                        </h3>
                                        <p className="text-xl font-quicksand text-black">Enhance beauty and elevate wellness at The Spa at The Alfond Inn, Winter Park’s newest sought-after spa destination. Free yourself from the stressors of daily life, clear your headspace, or recapture your vitality in exclusive style.</p>
                                        <button className='text-2xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out mt-2' onClick={() => handleButton(0)} >More Info</button>
                                    </div>
                                </div>
                            </div>

                            {/* 2nd item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://cdn.asdfinc.io/media/34525/alfond-inn-ii_o6a8776-1.jpg?anchor=center&mode=crop&width=1600&height=900&rnd=133528997500000000&quality=30' width={460} height={405} alt="Features 02" />
                                </div>
                                {/* Content */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                        <h3 className="text-2xl mb-3">Spa Menu</h3>
                                        <p className="text-xl text-black mb-3">Our treatments at The Spa at The Alfond Inn offer a luxurious escape into relaxation and rejuvenation. Inspired by Winter Park's rich heritage and natural beauty, our world-class therapies incorporate local elements like temple oranges and botanical gardens to enhance the sensory experience. </p>
                                        <button className='text-2xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out' onClick={() => handleButton(1)} >More Info</button>
                                    </div>
                                </div>
                            </div>

                            {/* 3rd item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 rtl" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://cdn.asdfinc.io/media/34526/alfond-inn-ii_o6a9204-1.jpg?anchor=center&mode=crop&width=960&height=540&rnd=133529001490000000&quality=30' width={420} height={405} alt="Features 02" />
                                </div>
                                {/* Content */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-1 xl:pl-16">
                                        <h3 className="text-2xl mb-3">Spa Menu</h3>
                                        <p className="text-xl text-black mb-3">Our treatments at The Spa at The Alfond Inn offer a luxurious escape into relaxation and rejuvenation. Inspired by Winter Park's rich heritage and natural beauty, our world-class therapies incorporate local elements like temple oranges and botanical gardens to enhance the sensory experience. </p>
                                        <button className='text-2xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out' onClick={() => handleButton(2)} >More Info</button>
                                    </div>
                                </div>
                            </div>
                            {/* 4th item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 justify-center items-center">
                                {/* Content */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-1 xl:pl-16 text-center">
                                        <h3 className="text-2xl mb-3">Hours Of Operation</h3>
                                        <p className="text-xl text-black mb-4">{"Monday - Sunday:  10:00 am - 6:00 pm"}</p>
                                        <p className="text-xl text-black mb-4">{"FITNESS CENTER HOURS: Monday - Sunday: 6:00 am - 10:00 pm"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmenitiesSpa