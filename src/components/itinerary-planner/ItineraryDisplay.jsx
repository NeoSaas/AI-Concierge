import React, { useEffect, useRef, useState } from 'react';
import { saveAs } from 'file-saver';
import QRCode from 'react-qr-code';
import 'react-loader-spinner';
import { Circles } from 'react-loader-spinner';
import axios from 'axios';
import logEvent from '../utils/logEvent';

const ItineraryDisplay = ({ itinerary }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [documentUrl, setDocumentUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const index = useRef(0);

  useEffect(() => {
    const type = () => {
      if (index.current < itinerary.length) {
        setDisplayedText((prev) => prev + itinerary[index.current]);
        index.current += 1;
      }
    };

    const interval = setInterval(type, 0.0000025); // Adjust the speed as needed

    return () => clearInterval(interval);
  }, [itinerary]);

  useEffect(() => {
    const createGoogleDoc = async () => {
      try {
        const response = await axios.get('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/createGoogleDoc/', {
          params: { itinerary },
        });
        setDocumentUrl(response.data.documentUrl);
        setLoading(false);
      } catch (error) {
        console.error('Error creating Google Doc:', error);
        setLoading(false);
      }
    };
    const updateMakeAndLocalVariables = async () => {
      const response = await axios.post('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/makeUpdateScenarioVariable/', {
        itinerary: itinerary,
      });
      const triggerResponse = await axios.post('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/makeTriggerScenario/');
      //debounce by 5 seconds to let make scenario update the team variable
      setTimeout(async () => {
        const variableResponse = await axios.get('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/makeGetScenarioVariables/');
        //console.log('Response:', variableResponse);
        try {
          for (let i = 0; i < variableResponse.data.message.teamVariables[3].value.split(",").length; i++) {
            let name = variableResponse.data.message.teamVariables[3].value.split(",")[i];
            // //console.log(name);
            const businessResponse = await axios({
              url:`https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/queryBusinessData/`, 
              method: 'POST',
              data: { business: [name] }
            });
            // //console.log(businessResponse.data[0][0]);
            if(businessResponse.data[0][0]?.id){
              logEvent(businessResponse.data[0][0]?.id, 'itinerary recommendation');
            }
            else{
              logEvent(businessResponse.data[0]?.id, 'itinerary recommendation');
            }
            // logEvent(variableResponse.data[i].id, 'scenario');
            // //console.log(variableResponse.data.message.teamVariables[2].value.split(","))
          }
        } catch (error) {
          console.error('Error updating local variables:', error);
        }
      }, 5000); //5 seconds debounce
    };
    
    updateMakeAndLocalVariables();
    createGoogleDoc();
  }, [itinerary]);

  const parseText = (text) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('#')) {
        // Heading
        return <h1 key={index} className="text-2xl font-bold mb-2">{line.slice(1).trim()}</h1>;
      } else {
        // Process inline bold text
        const parts = line.split('**');
        return (
          <p key={index}>
            {parts.map((part, idx) => (
              idx % 2 === 0 ? part : <span key={idx} className="font-bold">{part}</span>
            ))}
          </p>
        );
      }
    });
  };

  const formattedText = parseText(displayedText);

  return (
    <div className="max-w-4xl mx-auto p-4 border-black rounded bg-white grid grid-cols-2 ">
      <div className='max-h-[40rem] overflow-y-hidden relative'>
        <h2 className="text-2xl font-bold mb-4">Your Itinerary</h2>
        <div className="text-xl leading-relaxed">{formattedText}</div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
      <div>
        {loading ? (
            <div className="flex items-center justify-center flex-col">
              <div className="loader"><Circles color="#5C0601" height={120} width={120} /></div>
              <p className="ml-2 text-2xl">Generating document...</p>
            </div>
          ) : (
            <div className='flex justify-center items-center flex-col ml-8 h-full'>
              <p className="text-center mb-2 text-2xl font-bold">Scan the QR code to download the itinerary and view it on your phone:</p>
              <QRCode value={documentUrl} />
            </div>
          )}
      </div>
    </div>
  );
};

export default ItineraryDisplay;


