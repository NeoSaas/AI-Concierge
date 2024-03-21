import { React } from 'react'

import Rating from '@mui/material/Rating';
import { FaWalking, FaCar, FaBus } from "react-icons/fa";

function BusinessCardDisplay({ business, setIsOpen, setRestaurantLink, setIsRestaurant}) {

  const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];

  if(business[0].business_tags.includes('Restaurant')){
    setIsRestaurant(true)
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[850px] mx-auto h-[30rem] grid grid-cols-2 gap-10" onClick={() => { setRestaurantLink(business[0].directions_url); setIsOpen(true); }} >
      <div className='w-full h-full flex justify-center items-center'>
        <img src={business[0].business_pictures} alt={business[0].name} className="w-max h-auto max-h-96 rounded-lg mx-auto mt-6" />
      </div>
      <div className='w-full h-auto flex justify-center items-center flex-col pr-10'>
        <h3 className="text-2xl font-semibold mb-2">{business[0].business_name}</h3>
        <p className="text-gray-600 mb-2 text-xl font-semibold">{business[0].business_address}</p>
        <p className='mt-2 font-semibold'>Todays Hours of Operation:</p>
        <div className='font-semibold'>{(business[0].hours_of_operation[day]).replace('-', ' - ')}</div>
        <div className='flex flex-row justify-center  mt-2'>
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
        <div className='mt-4 flex flex-row justify-center'>
            <Rating name="half-rating-read" className="mx-2" defaultValue={parseInt(business[0].business_rating)} precision={0.1} readOnly />
            <p>{business[0].business_rating} stars </p>
          </div>
      </div>
    </div>
  );
}

export default BusinessCardDisplay