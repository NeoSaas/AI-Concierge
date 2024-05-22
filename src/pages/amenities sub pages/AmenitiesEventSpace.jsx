import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import TopBanner from '../../components/TopBanner';
import BottomBanner from '../../components/BottomBanner';
import WeatherWidget from '../../components/weatherComponents/WeatherWidget';
import MyDialog from '../../components/QrDialog';
import TimeoutRedirect from '../../components/Timeout';

function AmenitiesEventSpace() {
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
        // console.log(index);
        setQrCode(qrCodes[index]);
        setQrOpen(true);
    }

    return (
        <div className='h-[90vh] bg-[url(https://aiconcierge.b-cdn.net/main/mainbg.jpg)] mt-[-100px] bg-cover'>
            <Navbar />
            {isTimerComplete ? <TimeoutRedirect /> : null}
            <WeatherWidget />
            <MyDialog isOpen={qrOpen} setIsOpen={setQrOpen} qrCode={null} otherLink={qrCode}/>
            <div className='absolute gradient-top h-full w-full'></div>
            <div className='absolute gradient-bottom h-full w-full'></div>
            <BottomBanner />
            <div
                className={`w-full h-[95vh] overflow-y-hidden flex justify-center items-center flex-col transition-opacity duration-1000 mt-[-10px] ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
                <a className='py-2 px-6 bg-[#5C0601] rounded-lg text-white font-quicksand text-xl mb-2' href="/home">Back To Home</a>
                <div className="py-8 font-quicksand flex-col overflow-auto bg-white p-8 rounded-lg shadow-md"> 
                    <div className="max-w-4xl mx-auto max-h-[70rem]">
                        <p className="text-4xl text-center mb-2">Event Spaces</p>
                        
                        <div className="grid gap-10">

                            
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://cdn.asdfinc.io/media/29744/4g3a9141.jpg?anchor=center&mode=crop&width=1600&height=1200&rnd=133289820150000000&quality=80' width={420} height={405} alt="Features 01" />
                                </div>
                                
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                        <h3 className="text-2xl mb-3 font-quicksand">Extraordinary Meeting & Event venue</h3>
                                        <p className="text-xl font-quicksand text-black">From private dinners to weddings and everything in between, The Alfond Inn has a multitude of meeting and event spaces to offer. Book our Event Venue in Winter Park for your next Business Meeting or Social Event.</p>
                                        <button className='text-2xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out mt-2' onClick={() => handleButton(3)} >Book Event</button>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://cdn.asdfinc.io/media/32676/600px_017.jpeg?anchor=center&mode=crop&width=1600&height=1200&rnd=133457453490000000&quality=80' width={460} height={405} alt="Features 02" />
                                </div>
                                
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                        <h3 className="text-2xl mb-3">Park Avenue Ballroom</h3>
                                        <p className="text-xl text-black mb-3">5,000 square feet of flexible and hi-tech space makes it the perfect location for hosting a large meeting or corporate event. The Ballroom is divisible into five spaces and can accommodate a number of customized break-out and conference requirements. All spaces feature pull down screens and projectors. The Ballroom's elegant design and size is pristine for your Winter Park Wedding Venue choice.</p>
                                        <button className='text-2xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out' onClick={() => handleButton(4)} >Inquire</button>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 rtl" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://cdn.asdfinc.io/media/32677/600px_028.jpeg?anchor=center&mode=crop&width=1600&height=1200&rnd=133457454610000000&quality=80' width={420} height={405} alt="Features 02" />
                                </div>
                                
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-1 xl:pl-16">
                                        <h3 className="text-2xl mb-3">The Conservatory</h3>
                                        <p className="text-xl text-black mb-3">Considered the heart of The Alfond Inn, the Conservatory features a soaring glass domed ceiling, creating a light- filled space overlooking the Courtyard that is ideal for receptions and dinner. Beyond the Conservatory is 10,000 square feet of lushly landscaped green space in the garden Courtyard with built-in fire pits and an area designed for team building and al fresco events. This area is what makes The Alfond Inn the optimal choice in Winter Park Wedding Venues.</p>
                                        <button className='text-2xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out' onClick={() => handleButton(5)} >Check Availablity</button>
                                    </div>
                                </div>
                            </div>

                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://cdn.asdfinc.io/media/32678/600px_011.jpeg?anchor=center&mode=crop&width=1600&height=1200&rnd=133457455140000000&quality=80' width={460} height={405} alt="Features 02" />
                                </div>
                                
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                        <h3 className="text-2xl mb-3">Event Deck</h3>
                                        <p className="text-xl text-black mb-3">Nestled on the second floor of The Alfond Inn, the Event Deck provides an ideal setting for a day of relaxation at the spa. Additionally, it offers the perfect venue for receptions or special events, with a capacity to accommodate up to 125 guests.</p>
                                        <button className='text-2xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out' onClick={() => handleButton(6)} >Reserve Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 rtl" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://cdn.asdfinc.io/media/32679/600px_012.jpeg?anchor=center&mode=crop&width=1600&height=1200&rnd=133457457050000000&quality=80' width={420} height={405} alt="Features 02" />
                                </div>
                                
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-1 xl:pl-16">
                                        <h3 className="text-2xl mb-3">Private Dining Room</h3>
                                        <p className="text-xl text-black mb-3">Two private dining spaces at The Alfond Inn offer the ideal backdrop for a truly personal and intimate gathering. Our Private Dining Room, located in Hamilton's Kitchen accommodates up to 18 and our Lyman Room, located adjacent to the Library, accommodates up to 50 guests. From anniversary dinners to birthday and rehearsal dinners, your milestone event will be designed to your specific taste and preference.</p>
                                        <button className='text-2xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out' onClick={() => handleButton(7)} >Reserve Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://cdn.asdfinc.io/media/32680/600px_027.jpeg?anchor=center&mode=crop&width=1600&height=1200&rnd=133457458500000000&quality=80' width={460} height={405} alt="Features 02" />
                                </div>
                                
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                        <h3 className="text-2xl mb-3">New England Meeting Rooms</h3>
                                        <p className="text-xl text-black mb-3">With just over 2,000 square feet of fully-equipped space, the New England Room is divisible in half for smaller conferences. The room's proximity to the Ballroom makes it ideal for use as a break-out space, featuring glass doors that open and create a seamless flow from indoors to the south lawn outside.</p>
                                        <button className='text-2xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out' onClick={() => handleButton(8)} >Book Meeting</button>
                                    </div>
                                </div>
                            </div>

                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 rtl" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://cdn.asdfinc.io/media/32683/600px_001.jpeg?anchor=center&mode=crop&width=1600&height=1200&rnd=133457472690000000&quality=80' width={420} height={405} alt="Features 02" />
                                </div>
                                
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-1 xl:pl-16">
                                        <h3 className="text-2xl mb-3">The Boardroom</h3>
                                        <p className="text-xl text-black mb-3">Florida sunshine also pours into The Boardroom, a 1,000 square foot corporate meeting space adjacent to the library lounge and lobby reception areas. The Boardroom is wired with the latest in A/V technology and designed with comfortable board-style seating and amenities. The elegant room is flexible enough to additionally serve as private dining space for small groups.</p>
                                        <button className='text-2xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out' onClick={() => handleButton(9)} >Book Event</button>
                                    </div>
                                </div>
                            </div>

                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                
                                <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src='https://cdn.asdfinc.io/media/32681/600px_014.jpeg?anchor=center&mode=crop&width=1600&height=1200&rnd=133457461200000000&quality=80' width={460} height={405} alt="Features 02" />
                                </div>
                                
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-12 xl:pl-16 mb-6">
                                        <h3 className="text-2xl mb-3">More Amenities</h3>
                                        <p className="text-xl text-black mb-3">A library lounge located between the front desk and the bar offers comfortable soft seating for informal meetings or quiet relaxation. Two workstations provide flexible business services for traveling guests and a hi-tech virtual concierge allows visitors to connect with Winter Park attractions and up to date flight information.</p>
                                        <button className='text-2xl mx-20 bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out' onClick={() => handleButton(10)} >Inquire Now</button>
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

export default AmenitiesEventSpace