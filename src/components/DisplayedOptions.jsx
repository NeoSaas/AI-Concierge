import React from 'react'
import BusinessCardDisplay from './BusinessCardDisplay'

function DisplayedOptions({ businesses, isOpen, setIsOpen, setRestaurantLink }) {
  console.log(businesses, "BUSINESSES")

  return (
    <div className="grid grid-cols-1 gap-4 w-screen overflow-auto max-h-[55rem] overflow-x-hidden ">
      {businesses.map((business, index) => (
        <BusinessCardDisplay key={index} business={business} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink}/>
      ))}

    </div>
  );
}

export default DisplayedOptions