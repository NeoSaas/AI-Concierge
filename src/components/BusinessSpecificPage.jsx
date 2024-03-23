import React from 'react'
import Modal from 'react-modal'
import QRCode from "react-qr-code";
import Barcode from 'react-barcode';

const BusinessSpecificPage = ({modalOpen, directionsLink, setModalOpen}) => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleCloseModal = () => {
  };

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="business-specific-modal"
      >
            <div className="flex flex-col items-center justify-center h-40 w-80 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Business added successfully!</h2>
                <button onClick={handleCloseModal} className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Close</button>
            </div>
      </Modal>
    </div>
  )
}

export default BusinessSpecificPage