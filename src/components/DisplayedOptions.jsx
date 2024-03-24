import React from 'react'
import BusinessCardDisplay from './BusinessCardDisplay'

function DisplayedOptions({ businesses, isOpen, setIsOpen, setRestaurantLink, setIsRestaurant, setClickedBusiness }) {
  

  return (
    <div className="grid grid-cols-1 gap-4 overflow-scroll max-h-[55rem] no-scrollbar">

      {businesses.map((business, index) => (
        <BusinessCardDisplay key={index} business={business} setIsOpen={setIsOpen} setRestaurantLink={setRestaurantLink} setIsRestaurant={setIsRestaurant} setClickedBusiness={setClickedBusiness} index={index}/>
      ))}
     

    </div >
  );
}

export default DisplayedOptions