import { React } from 'react'

import Rating from '@mui/material/Rating';
import { FaWalking, FaCar, FaBus } from "react-icons/fa";

function BusinessCardDisplay({ index, business, setIsOpen, setRestaurantLink, setIsRestaurant, setClickedBusiness}) {

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];
  if(business[0].business_tags.includes('Restaurant')){
    setIsRestaurant(true)
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const validTags = [business[0].business_tags[1], business[0].business_tags[3], business[0].business_tags[4]];
  const randomTags = shuffleArray(validTags).slice(0, 3);
  // console.log(validTags)
  // console.log(business[0].hours_of_operation["Monday"])
  // console.log(day.toString())


  // console.log(business[0].walk_time);
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[900px] mx-auto h-[28rem] grid grid-cols-2 gap-10 border-2 border-black" onClick={() => { setRestaurantLink(business[0].directions_url); setIsOpen(true); setClickedBusiness(business); }} >
      <div className='w-full h-full flex justify-center items-center'>
        <img src={`https://ai-concierge-main-0b4b3d25a902.herokuapp.com/${business[0].business_image_1}`} alt={business[0].name} className="w-[600px] h-[400px] max-h-[54rem] rounded-lg mx-auto mt-2" />
      </div>
      <div className='w-full h-auto flex justify-center items-center flex-col pr-10'>
        <h3 className="text-2xl font-semibold mb-2">{business[0].business_name}</h3>
        <p className="text-gray-600 mb-6 text-xl font-semibold">{business[0].business_address}</p>
        <div className='flex flex-col w-96'>
          {validTags.map((tag, index) => (
            <p className="text-black mb-2 text-xl font-semibold">
              {tag}{index < validTags.length - 1 && ', '}&nbsp;
            </p>
          ))}
        </div>
        
        <p className='mt-2 text-xl font-semibold'>Todays Hours of Operation:</p>
        <div className='font-semibold text-xl'>{(business[0].hours_of_operation[day])}</div>
        <div className='flex flex-row justify-center text-xl mt-6'>
          {parseInt(business[0].walk_time.split(' ')[0]) >= 25 ? 
            null
          :
            <div className='flex flex-row items-center mx-3 text-green-500'>
              <FaWalking className='mx-2' />
              {business[0].walk_time}
            </div>
          }
          <div className='flex flex-row items-center mx-3 text-blue-500'>
            <FaCar className='mx-2' />
            {business[0].drive_time}
          </div>
          
        </div>
        <div className='mt-4 flex flex-row justify-center text-xl'>
            <Rating name="half-rating-read" className="mx-2" defaultValue={parseInt(business[0].business_rating)} precision={0.1} readOnly />
            <p>{business[0].business_rating} stars </p>
          </div>
      </div>
    </div>
  );
}

export default BusinessCardDisplay