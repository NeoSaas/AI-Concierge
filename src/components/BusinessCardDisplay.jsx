import { React } from 'react'

import Rating from '@mui/material/Rating';
import { FaWalking, FaCar, FaBus } from "react-icons/fa";

function BusinessCardDisplay({ business, setIsOpen, setRestaurantLink}) {
  console.log("BUSINESS DISPLAY", business)


  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[80%] mx-auto hover:scale-105 duration-300 ease-in-out h-[30rem] overflow-y-hidden" onClick={() => {setRestaurantLink(business[0].directions_url); setIsOpen(true);}} >
      <h3 className="text-2xl font-semibold mb-2">{business[0].business_name}</h3>
      <p className="text-gray-600 mb-2 text-xl font-semibold">{business[0].business_address}</p>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-row items-center mx-3'>
          <FaWalking className='mx-2' />
          {business[0].walk_time}
        </div>
        <div className='flex flex-row items-center mx-3'>
          <FaCar className='mx-2' />
          {business[0].drive_time}
        </div>
        <div className='flex flex-row items-center mx-3'>
          <FaBus className='mx-2' />
          {business[0].transit_time}
        </div>

      </div>
      <img src={business[0].business_pictures} alt={business[0].name} className="w-max h-60 rounded-lg mx-auto mt-12" />
      <div className='inline-block mt-4'>
        <Rating name="half-rating-read" defaultValue={business[0].business_rating} precision={0.1} readOnly />
        <p>{business[0].business_rating} stars </p>
      </div>
    </div>
  );
}

export default BusinessCardDisplay