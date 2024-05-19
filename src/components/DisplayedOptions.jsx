import React from 'react'
import BusinessCardDisplay from './BusinessCardDisplay'
import { PiArrowBendLeftDownBold } from "react-icons/pi";


function DisplayedOptions({ businesses, isOpen, setIsOpen, setRestaurantLink, setIsRestaurant, setClickedBusiness }) {
  

  return (
    <div className="grid grid-cols-1 gap-4 overflow-scroll max-h-[55rem] no-scrollbar mb-10">
      <div className='flex flex-row justify-start text-xl'>
      <PiArrowBendLeftDownBold size={34} className='ml-1 mt-1'/><p classname=''>Click to see company profile </p>
      </div>
      {businesses.map((business, index) => (
        <BusinessCardDisplay key={index} business={business} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant} setClickedBusiness={setClickedBusiness} index={index}/>
      ))}
     

    </div >
  );
}

export default DisplayedOptions