import React from 'react';

const ConferenceItem = ({ eventName, description, imageUrl, date, time, handleButton, index }) => {
 

  return (
    <div className="flex items-center justify-center my-3">
      <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden mx-16 ">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="w-full h-48 object-cover md:w-48 mx-2 rounded-lg my-16" src={imageUrl} alt="Event" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-[#5C0601] font-semibold">{eventName}</div>
            <p className="mt-2 text-gray-600">{description}</p>
            <p className="mt-2 text-black">{date}</p>
            <p className="mt-2 text-gray-800">{time}</p>
            <button className='my-auto  text-2xl bg-[#5C0601] px-6 py-2 text-white font-medium rounded-md transition duration-300 ease-in-out mt-10' onClick={() => handleButton(index)}>Get Qr Code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceItem;