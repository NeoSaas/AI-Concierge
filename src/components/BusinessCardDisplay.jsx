import React from 'react'
import { Rating } from 'react-simple-star-rating';

function BusinessCardDisplay({business}) {
    console.log(business, "BUSINESS")

    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-[80%] mx-auto hover:scale-105 duration-300 ease-in-out h-80" >
          <h3 className="text-2xl font-semibold mb-2">{business[0].business_name}</h3>
          <p className="text-gray-600 mb-2 text-xl font-semibold">Distance: 5.3 miles</p>
          <img src={business[0].business_pictures} alt={business[0].name} className="w-full rounded-lg mb-2" />
          <div className='bottom-0 mt-32 inline-block'>
            <Rating initialValue={business[0].business_rating} SVGstyle={{'display' : 'inline'}}/>
            <p>{business[0].business_rating} stars </p>
          </div>
          {/* Additional information like ratings, amenities, etc. */}
        </div>
    );
}

export default BusinessCardDisplay