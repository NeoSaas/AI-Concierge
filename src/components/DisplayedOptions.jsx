import React from 'react'
import BusinessCardDisplay from './BusinessCardDisplay'

function DisplayedOptions({ businesses, isOpen, setIsOpen, setRestaurantLink, setIsRestaurant }) {
  

  return (
    <div className="grid grid-cols-1 gap-4 overflow-auto max-h-[55rem] overflow-x-hidden">

      {businesses.map((business, index) => (
        <BusinessCardDisplay key={index} business={business} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant}/>
      ))}
     

    </div >
  );
}

export default DisplayedOptions