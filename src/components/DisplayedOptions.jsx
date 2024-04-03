import React from 'react'
import BusinessCardDisplay from './BusinessCardDisplay'
import { PiArrowBendRightDownBold } from "react-icons/pi";


function DisplayedOptions({ businesses, isOpen, setIsOpen, setRestaurantLink, setIsRestaurant, setClickedBusiness }) {
  

  return (
    <div className="grid grid-cols-1 gap-4 overflow-scroll max-h-[54rem] no-scrollbar">
      <div className='flex flex-row justify-start text-lg'>
        <p classname=''>Click me </p><PiArrowBendRightDownBold size={26} className='ml-1 mt-3'/>
      </div>
      {businesses.map((business, index) => (
        <BusinessCardDisplay key={index} business={business} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant} setClickedBusiness={setClickedBusiness} index={index}/>
      ))}
     

    </div >
  );
}

export default DisplayedOptions