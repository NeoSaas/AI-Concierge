import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

const TimeoutRedirect = ({ timeoutPeriod = 60000 }) => {
  const [isActive, setIsActive] = useState(true);
  const [countdown, setCountdown] = useState(60000 / 1000);
  const nav = useNavigate();

  useEffect(() => {
    Modal.setAppElement('div');
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '200px',
        width: '400px',
      },
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isActive) {
        // Redirect to the starting page
        nav('/')
      }
    }, timeoutPeriod);

    return () => clearTimeout(timeout);
  }, [isActive, timeoutPeriod]);

  useEffect(() => {
    if (countdown <= 0) {
      setIsActive(false);
    }
  }, [countdown]);

  const resetActivity = () => {
    setIsActive(true);
    setCountdown(timeoutPeriod / 1000); // Reset the countdown when the user is active
  };

  // Setup event listeners for user activity
  useEffect(() => {
    const events = ['click', 'mousemove', 'keypress'];
    events.forEach(event => window.addEventListener(event, resetActivity));

    return () => events.forEach(event => window.removeEventListener(event, resetActivity));
  }, []);

  return (
    <Modal
    isOpen={!isActive}
    onRequestClose={resetActivity}
    style={customStyles}
    contentLabel="timeout-modal"
    >
        <div className="flex flex-col items-center justify-center h-40 w-80 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Returning to the home page in {countdown} due to inactivity...</h2>
            <button onClick={resetActivity} className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Close</button>
        </div>
    </Modal>
  );
};

export default TimeoutRedirect;
