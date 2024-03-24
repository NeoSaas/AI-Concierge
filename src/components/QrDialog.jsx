import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import Barcode from 'react-barcode';
import { Slide } from 'react-slideshow-image';
import Rating from '@mui/material/Rating';


export default function MyDialog({isOpen, setIsOpen, qrCode, otherLink, isRestaurant, clickedBusiness}) {

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  console.log(clickedBusiness)

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={isRestaurant ? `w-full transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all text-left` : `w-max transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all text-center`}>
                <Dialog.Title
                  as="h3"
                  className="font-medium leading-6 text-gray-900"
                >
                  {isRestaurant ? 
                  <div className='flex flex-row'>
                  <div>
                    <p className='text-4xl'>{clickedBusiness.business_name}</p>
                    <p className='text-2xl'>{clickedBusiness.business_address}</p>
                  </div>
                  <div className='my-auto text-2xl pl-16 flex flex-col'>
                    <p>Phone Number:</p>
                    <p>{clickedBusiness.business_phone_number}</p>
                  </div>
                    
                  </div>
                  :
                  <p className='text-xl mb-5'>Scan the Qr Code for Further Directions!</p>
                  }
                </Dialog.Title>
                <div className="mt-2 flex-col justify-center items-center text-center">
        
                  {isRestaurant ? 
                  <>
                    <div className='grid grid-cols-2 w-[90%] h-auto gap-8 mx-auto'>
                      <img src={clickedBusiness.business_pictures[0]} alt='first-pic' className='max-h-[36rem]'/>
                      <div className='grid grid-cols-2 grid-rows-2 gap-3 w-[90%]'>
                        <img src={clickedBusiness.business_pictures[0]} alt='second-pic'/>
                        <img src={clickedBusiness.business_pictures[0]} alt='third-pic'/>
                        <img src={clickedBusiness.business_pictures[0]} alt='second-pic'/>
                        <img src={clickedBusiness.business_pictures[0]} alt='third-pic'/>
                      </div>
                    </div>
                    <div className='grid grid-cols-[60%_40%] max-w-full gap-20'>
                      <div>
                        <p className='mt-4 text-2xl font-semibold'>Description</p>
                        <p className='text-lg'>{clickedBusiness.business_description}</p>
                      </div>
                      <div>
                        <div className='text-left'>
                          <p className='text-2xl font-semibold mt-4'>Type:</p>
                          <div className='flex flex-row'>
                            {clickedBusiness.business_tags.map((tag) => {
                              return <p className='text-xl '>{tag + ","}</p>
                            })}
                          </div>
                        </div>
                        <div className='text-left flex flex-col'>
                          <p className='text-2xl font-semibold mt-4'>Rating</p>
                          <div className='flex flex-row'>
                            <Rating name="half-rating-read" className="" size="20" defaultValue={parseInt(clickedBusiness.business_rating)} precision={0.1} readOnly />
                            <p className='text-xl ml-10'>{clickedBusiness.business_rating} stars </p>
                          </div>
                        </div>
                        <div className='h-auto w-max shadow-md px-5 rounded-xl right-0'>
                          <p className='text-2xl font-semibold mt-12 text-left'>Hours of Operation:</p>
                          <div className='flex flex-col'>
                            {Object.entries(clickedBusiness.hours_of_operation).map(([key,value]) => {
                              return <div className='flex-row flex border-b-2 border-gray-200'> <p className='text-2xl mt-3'>{key + ":"}</p> <p className='text-2xl mt-3 mb-1'>{value}</p></div>
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-8 flex-row flex justify-center items-center rounded-md shadow-xl p-3'>
                      <div className='flex flex-col '>
                        <p className='mb-5 text-xl'>Scan the QR code for directions to the restaurant!</p>
                        <QRCode value={otherLink} className='m-auto'/>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <p className='mb-5 text-xl'>Take a picture of the barcode and present it at the restaurant for Perks!</p>
                        <Barcode value={clickedBusiness.business_barcode} width={1.4}/>
                      </div>
                    </div>
                  </> : <QRCode value={otherLink} className='m-auto'/>}
                </div>

                <div className="mt-4 w-full flex items-center justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 duration-300 ease-in-out"
                    onClick={closeModal}
                  >
                    Close Me
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
      
      
    </>
  )
}