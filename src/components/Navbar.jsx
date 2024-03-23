import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-transparent absolute border-b-2 border-t-2 border-black w-full border-opacity-30 font-quicksand mt-32 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
            <div className=" items-center justify-between h-24">
              {/* <p className='absolute mt-16 text-xl font-quicksand left-5'>Alfond Inn</p> */}
                <div className="flex-row flex items-center justify-center text-black text-2xl">
                    <Link to="/home" className="hover:scale-105 duration-300 ease-in-out"><img className="h-auto w-20 mr-2" src="https://thealfondinn.com/media/29890/alfond-inn-favicon.svg?quality=30" alt="Logo" /></Link>
                    <Link to="/events_info" className="ml-20 font-bold text-black hover:text-gray-600 hover:scale-105 duration-300 ease-in-out">Events and Conferences</Link>
                    <Link to="/checkInOut" className=" ml-20 text-black hover:text-gray-600 font-bold hover:scale-105 duration-300 ease-in-out">Check-In, Check-Out</Link>
                    <FlyoutLink href="#" FlyoutContent={PricingContent}>
                      Amenities
                    </FlyoutLink>
                    <Link to="/property_map" className="ml-20 text-black hover:text-gray-600 font-bold hover:scale-105 duration-300 ease-in-out">Hotel Map</Link>
                </div>
            </div>
        </div>
    </nav>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = React.useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onClick={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-black font-bold ml-20 flex-row flex">
        {children} <MdKeyboardArrowDown size={30} style={open && {transform: 'rotate(180deg)'}}/>
        {/* <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        /> */}
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-[70%] top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">
          <a href="/spa" className="block hover:underline">
            Spa
          </a>
        </h3>
        
        <h3 className="font-semibold">
          <a href="/dining" className="block hover:underline">
            Dining
          </a>
        </h3>
        <h3 className="font-semibold">
          <a href="/event_Spaces" className="block hover:underline">
            Event Spaces
          </a>
        </h3>
        <h3 className="font-semibold">
          <a href="/rooms" className="block hover:underline">
            Rooms
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;