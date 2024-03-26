import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import Barcode from 'react-barcode';
import { Slide } from 'react-slideshow-image';
import Rating from '@mui/material/Rating';
import 'react-slideshow-image/dist/styles.css';


export default function MyDialog({isOpen, setIsOpen, qrCode, otherLink, isRestaurant, clickedBusiness}) {

  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

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
              <Dialog.Panel className={isRestaurant ? `w-full transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all text-left h-[110rem]` : `w-max transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all text-center`}>
                <Dialog.Title
                  as="h3"
                  className="font-medium leading-6 text-gray-900"
                >
                  {isRestaurant ? 
                  <div className='flex flex-row'>
                  <div>
                    <p className='text-4xl'>{clickedBusiness[0].business_name}</p>
                    <p className='text-2xl'>{clickedBusiness[0].business_address}</p>
                  </div>
                  <div className='my-auto text-2xl pl-16 flex flex-col'>
                    <p>Phone Number:</p>
                    <p>{clickedBusiness[0].business_phone_number}</p>
                  </div>
                    
                  </div>
                  :
                  <p className='text-xl mb-5'>Scan the Qr Code for Further Directions!</p>
                  }
                </Dialog.Title>
                <div className="mt-2 flex-col justify-center items-center text-center">
        
                  {isRestaurant ? 
                  <>
                    <div className='grid grid-cols-2 w-[70%] h-auto gap-8 mx-auto'>
                      <img src={`https://rr3l1d2s-8000.use.devtunnels.ms${clickedBusiness[0].business_image_1}`} alt='first-pic' className='max-h-[36rem] rounded-lg'/>
                      <div className='w-[90%]'>
                        <Slide>
                          <div className=' each-slide-effect flex justify-center items-center'> 
                          <img src={`https://rr3l1d2s-8000.use.devtunnels.ms${clickedBusiness[0].business_image_2}`} alt='second-pic' className='rounded-lg'/> 
                            {/* <img src={clickedBusiness.business_pictures[1]} alt='second-pic' className=''/> */}
                          </div>
                          <div className=' each-slide-effect '>
                            <img src={`https://rr3l1d2s-8000.use.devtunnels.ms${clickedBusiness[0].business_image_3}`} alt='third-pic' className='rounded-lg'/>
                          </div>
                          <div className=' each-slide-effect '>
                            <img src={`https://rr3l1d2s-8000.use.devtunnels.ms${clickedBusiness[0].business_image_4}`} alt='second-pic' className='rounded-lg'/>
                          </div>
                          <div className=' each-slide-effect '>
                            <img src={`https://rr3l1d2s-8000.use.devtunnels.ms${clickedBusiness[0].business_video_1}`} alt='third-pic' className='rounded-lg'/>
                          </div>
                        </Slide>
                        {/* <img src={clickedBusiness.business_pictures[1]} alt='second-pic' className=' h-full'/>
                        <img src={clickedBusiness.business_pictures[2]} alt='third-pic' className=' h-full '/>
                        <img src={clickedBusiness.business_pictures[3]} alt='second-pic' className=' h-full '/>
                        <img src={clickedBusiness.business_pictures[4]} alt='third-pic' className=' h-full '/> */}
                      </div>
                    </div>
                    <div className='grid grid-cols-[60%_40%] max-w-full gap-20'>
                      <div>
                        <p className='mt-4 text-2xl font-semibold'>Description</p>
                        <p className='text-lg'>{clickedBusiness[0].business_description}</p>
                      </div>
                      <div>
                        <div className='text-left'>
                          <p className='text-2xl font-semibold mt-4'>Type:</p>
                          <div className='flex flex-row'>
                            {clickedBusiness[0].business_tags.map((tag) => {
                              return <p className='text-xl '>{tag + ","}</p>
                            })}
                          </div>
                        </div>
                        <div className='text-left flex flex-col'>
                          <p className='text-2xl font-semibold mt-4'>Rating</p>
                          <div className='flex flex-row'>
                            <Rating name="half-rating-read" className="" size="20" defaultValue={parseInt(clickedBusiness[0].business_rating)} precision={0.1} readOnly />
                            <p className='text-xl ml-10'>{clickedBusiness[0].business_rating} stars </p>
                          </div>
                        </div>
                        <div className='h-auto w-max shadow-md px-5 rounded-xl right-0'>
                          <p className='text-2xl font-semibold mt-12 text-left'>Hours of Operation:</p>
                          <div className='flex flex-col'>
                            {Object.entries(clickedBusiness[0].hours_of_operation).map(([key,value]) => {
                              return <div className='flex-row flex border-b-2 border-gray-200'> <p className='text-2xl mt-3'>{key + ":"}</p> <p className='text-2xl mt-3 mb-1'>{value}</p></div>
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-20 flex-row flex justify-center items-center rounded-md p-3'>
                      <div className='flex flex-col '>
                        <p className='mb-5 text-xl'>Scan the QR code for directions to the restaurant!</p>
                        <QRCode value={otherLink} className='m-auto'/>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <p className='mb-5 text-xl'>Take a picture of the barcode and present it at the restaurant for Perks!</p>
                        <Barcode value={clickedBusiness[0].business_barcode} width={1.4}/>
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