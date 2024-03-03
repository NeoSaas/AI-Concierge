import React from 'react'
import BusinessCardDisplay from './BusinessCardDisplay'

function DisplayedOptions({businesses}) {
    console.log(businesses, "BUSINESSES")
    return (
        <div className="grid grid-cols-1 gap-4 w-screen">
          {businesses.map((business, index) => (
            <BusinessCardDisplay key={index} business={business} />
          ))}
        </div>
      );
}

export default DisplayedOptions