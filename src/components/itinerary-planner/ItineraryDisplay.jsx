import React, { useEffect, useRef, useState } from 'react';

const ItineraryDisplay = ({ itinerary }) => {
  const [displayedText, setDisplayedText] = useState('');
  const index = useRef(0);

  useEffect(() => {
    const type = () => {
      if (index.current < itinerary.length) {
        setDisplayedText((prev) => prev + itinerary[index.current]);
        index.current += 1;
      }
    };

    const interval = setInterval(type, 25); // Adjust the speed as needed

    return () => clearInterval(interval);
  }, [itinerary]);

  const formattedText = displayedText.split('\n').map((str, index) => (
    <p key={index} className="whitespace-pre-wrap">{str}</p>
  ));

  return (
    <div className="max-w-2xl mx-auto p-4 border-black rounded bg-white">
      <h2 className="text-2xl font-bold mb-4">Your Itinerary</h2>
      <div className="text-xl leading-relaxed">{formattedText}</div>
    </div>
  );
};

export default ItineraryDisplay;


