import React from 'react'
import { useState, useEffect } from 'react';
import ConferenceItem from '../components/ConferenceItem';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';
import BottomBanner from '../components/BottomBanner';
import MyDialog from '../components/QrDialog';
import WeatherWidget from '../components/weatherComponents/WeatherWidget';
import TimeoutRedirect from '../components/Timeout';

function EventsInfo() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [qrOpen, setQrOpen] = useState(false);
    const qrCodes = ['easterbrunch.png', 'easterbrunch.png', 'sidewalkart.png'];
    const [qrCode, setQrCode] = useState(null);
    const [isTimerComplete, setIsTimerComplete] = useState(false);

    const handleButton = (index) => {
        // console.log(index);
        setQrCode(qrCodes[index]);
        setQrOpen(true);
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
                <MyDialog isOpen={qrOpen} setIsOpen={setQrOpen} qrCode={qrCode}/>
                <ConferenceItem
                    eventName="EASTER BRUNCH & EGG HUNT AT THE ALFOND INN"
                    description="Hop on over to The Alfond Inn for our Annual Easter Brunch and Egg Hunt on Sunday, March 31st! Parents can sip on unlimited mimosas while the little ones enjoy Easter activities and a visit from the Easter Bunny. We have two seatings available, at 10 am and 1 pm. Join us for a day of family fun and a delicious feast! "
                    imageUrl="https://cdn.asdfinc.io/media/34650/processed-37984faf-c064-4cd1-a9df-96c7f74baa16.jpeg?center=0.5,0.5&mode=crop&width=600&height=320&quality=80"
                    date="March 31st"
                    time="10:00 am - 2:00 pm"
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