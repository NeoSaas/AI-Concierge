import React from 'react'
import BusinessCardDisplay from './BusinessCardDisplay'

function DisplayedOptions({ businesses, isOpen, setIsOpen, setRestaurantLink, setIsRestaurant }) {
  console.log(businesses, "BUSINESSES")

  return (
    <div className="grid grid-cols-1 gap-4 overflow-auto max-h-[55rem] overflow-x-hidden">

      {businesses.map((business, index) => (
        <BusinessCardDisplay key={index} business={business} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant}/>
      ))}
      <div className="absolute bottom-[284px] left-[114px] right-0 h-28  w-[850px] bg-gradient-to-b from-transparent to-gray-200"></div>

    </div >
  );
}

export default DisplayedOptions