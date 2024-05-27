import React from 'react'
import { useState, useEffect } from 'react';
import ConferenceItem from '../components/ConferenceItem';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';
import BottomBanner from '../components/BottomBanner';
import MyDialog from '../components/QrDialog';
import WeatherWidget from '../components/weatherComponents/WeatherWidget';
import TimeoutRedirect from '../components/Timeout';
import { useAppContext } from '../AppContext';

function EventsInfo() {
    const { isOpen, setIsOpen} = useAppContext();
    const [isLoaded, setIsLoaded] = useState(false);
    const [qrOpen, setQrOpen] = useState(false);
    const qrCodes = ['https://thealfondinn.com/the-hotel/upcoming-events', 'https://go.activecalendar.com/rollins/site/arts/event/alfond-inn-sunday-tour-1/', 'https://www.wpsaf.org/'];
    const [qrCode, setQrCode] = useState(null);
    const [isTimerComplete, setIsTimerComplete] = useState(false);

    const handleButton = (index) => {
        // console.log(index);
        setQrCode(qrCodes[index]);
        setIsOpen(true);
    }

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

    return (
        <>

        <WeatherWidget/>
        <Navbar />
        <div className='h-[90vh] bg-[url(https://aiconcierge.b-cdn.net/main/mainbg.jpg)] mt-[-100px] bg-cover'>
            
            {isTimerComplete ? <TimeoutRedirect /> : null}
            
            {/* <p className='text-4xl font-bold text-center mt-[35rem] mx-auto w-screen absolute'>Events</p> */}
            <div className='absolute gradient-top h-full w-full'></div>
            <div className='absolute gradient-bottom h-full w-full'></div>
            <BottomBanner/>
            
            <div className={`w-full h-[70vh] flex justify-center items-center flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <a className='py-2 px-6 bg-[#5C0601] rounded-lg text-white font-quicksand text-xl' href="/home">Back To Home</a>
                <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} otherLink={qrCode}/>
                <ConferenceItem
                    eventName="WINE DOWN WEDNESDAYS AT THE CAFÉ"
                    description="Enjoy our great wine deals starting at $5 per glass and $20 per bottle, indulge in elevated desserts at $9, live music, and more! A cash bar will also be available. No reservation required and no tickets needed. "
                    imageUrl="https://cdn.asdfinc.io/media/34650/processed-37984faf-c064-4cd1-a9df-96c7f74baa16.jpeg?center=0.5,0.5&mode=crop&width=600&height=320&quality=80"
                    date="May 15, 2024"
                    time="4:00 PM"
                    handleButton={handleButton}
                    index='0'
                />
                <ConferenceItem
                    eventName="SUNDAY GALLERY TOURS"
                    description="Join us for a guided tour of selections from The Alfond Collection of Contemporary Art, on view at The Alfond Inn. Meet us in the hotel lobby for a new tour every Sunday."
                    imageUrl="https://cdn.asdfinc.io/media/31872/alfond-happy-hour-tours.png?center=0.5,0.5&mode=crop&width=600&height=320&quality=80"
                    date="March 31st"
                    time="1:00 pm"
                    handleButton={handleButton}
                    index='1'
                />
                <ConferenceItem
                    eventName="WINTER PARK SIDEWALK ART FESTIVAL"
                    description="The Winter Park Sidewalk Art Festival is one of the nation’s oldest, largest, and most prestigious outdoor art festivals. The festival debuted in March 1960 as a community project to bring local artists and art lovers together. The festival consistently ranks among the top juried fine-art festivals in the country."
                    imageUrl="https://cdn.asdfinc.io/media/33418/winter-park-sidewalk-fest.png?center=0.5,0.5&mode=crop&width=600&height=320&quality=80"
                    date="March 31st"
                    time="9:00 am"
                    handleButton={handleButton}
                    index='2'
                />
            </div>
        </div>
        </>
    )
}

export default EventsInfo