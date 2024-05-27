import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import TopBanner from '../../components/TopBanner';
import BottomBanner from '../../components/BottomBanner';
import WeatherWidget from '../../components/weatherComponents/WeatherWidget';
import MyDialog from '../../components/QrDialog';
import TimeoutRedirect from '../../components/Timeout';
import { useAppContext } from '../../AppContext';

function AmenitiesDining() {
    const { isOpen, setIsOpen} = useAppContext();
    const [isLoaded, setIsLoaded] = useState(false);
    const [qrOpen, setQrOpen] = useState(false);
    const qrCodes = ['https://thealfondinn.com/hamiltons-kitchen/caf%C3%A9-morning-menu', 'https://thealfondinn.com/hamiltons-kitchen/caf%C3%A9-evening-menu', 'https://resy.com/cities/orl/hamiltons-kitchen', 'https://resy.com/cities/orl/hamiltons-kitchen'];
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
        // console.log(index);
        setQrCode(qrCodes[index]);
        setIsOpen(true);
    }

    return (
        <div className='h-[90vh] bg-[url(https://aiconcierge.b-cdn.net/main/mainbg.jpg)] bg-cover'>
            
            {isTimerComplete ? <TimeoutRedirect /> : null}
            <WeatherWidget />
            <Navbar />
            <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} qrCode={null} otherLink={qrCode}/>
            <div className='absolute gradient-top h-full w-full'></div>
            <div className='absolute gradient-bottom h-full w-full'></div>
            <BottomBanner />
            <div
                className={`w-full h-[70vh] overflow-y-hidden flex justify-center items-center flex-col transition-opacity duration-1000 mt-[-10px] ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
                <a className='py-2 px-6 bg-[#5C0601] rounded-lg text-white font-quicksand text-xl mb-2' href="/home">Back To Home</a>
                <div className="py-8 font-quicksand flex-col overflow-auto bg-white p-8 rounded-lg shadow-md "> 
                    <div className="max-w-4xl mx-auto max-h-[70rem]">
                        <p className="text-4xl text-center mb-4">HAMILTON'S KITCHEN A WINTER PARK RESTAURANT</p>
                        {/* Items */}
                        <div className="grid gap-10">

                            {/* 1st item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://cdn.asdfinc.io/media/33690/display_case_light_2023.jpeg?anchor=center&mode=crop&width=500&height=375&rnd=133498914190000000&quality=80' width={420} height={405} alt="Features 01" />
                                </div>
                                {/* Content */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                        <h3 className="text-2xl mb-3 font-quicksand">The Cafe At the Alfond Inn</h3>
                                        <p className="text-xl font-quicksand text-black">Experience our newly opened artisanal café, featuring a wide selection of dining options. Start your morning with an artfully crafted grab-and-go section. As the sun sets, the ambiance transforms to feature sophisticated bar offerings with a selection of high-end beverages.</p>
                                        <button className='text-xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out mt-2' onClick={() => handleButton(0)} >Cafe Morning Menu</button>
                                        <button className='text-xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out mt-1' onClick={() => handleButton(1)} >Cafe Evening Menu</button>
                                    </div>
                                </div>
                            </div>

                            {/* 2nd item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Hamilton%20Kitchen%20images%20to%20be%20used%20in%20website/Adjusted-2-gigapixel-high-fidelity-v2-4x.jpg' width={460} height={405} alt="Features 02" />
                                </div>
                                {/* Content */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                        <h3 className="text-2xl mb-3">Modern Southern Cuisine</h3>
                                        <p className="text-xl text-black mb-3">Welcome to Hamilton's Kitchen, our restaurant in Winter Park, Florida offering a distinct Central Florida culinary experience fusing locally sourced ingredients with the rustic, open-table charm of a bygone era. Here you will discover traditional Southern fare, prepared with a modern twist and served in a warm setting that brings together friends, family and the greater Winter Park, Florida community at one of the best restaurants in Winter Park. Hamilton's Kitchen is an inviting space where new relationships can be forged and friendships can be nurtured over food and drink – just as they were by the family hearth.</p>
                                    </div>
                                </div>
                            </div>

                            {/* 3rd item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 rtl" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://cdn.asdfinc.io/media/29746/alfond-137.jpg?anchor=center&mode=crop&width=500&height=375&rnd=133289820150000000&quality=80' width={420} height={405} alt="Features 02" />
                                </div>
                                {/* Content */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-1 xl:pl-16">
                                        <h3 className="text-2xl mb-3">Hamiltons Legacy</h3>
                                        <p className="text-xl text-black mb-3">Named in honor of Hamilton Holt, president of Rollins College from 1925 to 1949, our Winter Park restaurant and lounge embodies one man's pursuit of innovation, quality design and philanthropy. Even Hamilton's eccentricities are on display in our dining room, where different styles of chairs pay homage to his unique brand of hospitality. As the story goes, the iconic eighth president - who lived just a few blocks away - had a habit of inviting too many people to his home for dinner gatherings. "If you can find a chair," he would say," you're welcome in my kitchen." Come in and join us to see what our restaurant in Winter Park, Florida has to offer! Indeed our kitchen is steeped in history. But it's how we are carrying on Hamilton's legacy that truly creates a lasting impact. Whether staying at The Alfond Inn or simply savoring a glass of wine, your patronage supports scholarships for students to attend Rollins College, one of the nation's premier liberal arts institutions.</p>
                                        <button className='text-2xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out' onClick={() => handleButton(2)} >Make a reservation</button>
                                    </div>
                                </div>
                            </div>
                            {/* 4th item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://aiconcierge.b-cdn.net/Alfond%20Inn%20Hamilton%20Kitchen%20images%20to%20be%20used%20in%20website/Adjusted-1-gigapixel-high-fidelity-v2-4x.jpg' width={460} height={405} alt="Features 02" />
                                </div>
                                {/* Content */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                        <h3 className="text-2xl mb-3">Chef Stephen Doyle</h3>
                                        <p className="text-xl text-black mb-3">Chef Stephen Doyle of Hamilton's Kitchen brings more than two decades of experience as a chef in Orlando-area restaurants. Focusing on using natural and organic products, Chef Doyle's cooking is defined by letting Florida flavors and ingredients shine through in everything that he prepares. Born in Dublin, Chef Doyle has lived in the U.S. since the early 1990's and most recently served as the Executive Sous Chef at The Alfond Inn at Rollins. Prior to that, he was Executive Chef at Healthy Chef Creations in Winter Park. A veteran of such Orlando restaurants as Church Street Station and Pebbles, Chef Doyle was also the Banquet Chef at Dubsdread Golf Course in Orlando for a decade. At The Alfond Inn, Chef Doyle oversees Hamilton's Kitchen, with its exposed beams, farmer's table, and Dutch oak floors, the backdrop for Brunch, served seven days a week, as well as Lunch and Dinner. His menu features seasonal specialties, made from scratch items and popular favorites. Our Winter Park restaurant also has a private dining room, accommodating up to 18 guests.</p>
                                        <button className='text-2xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out' onClick={() => handleButton(3)} >Make a reservation</button>
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

export default AmenitiesDining