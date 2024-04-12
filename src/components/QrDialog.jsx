import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import Barcode from 'react-barcode';
import { Slide } from 'react-slideshow-image';
import Rating from '@mui/material/Rating';
import 'react-slideshow-image/dist/styles.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



export default function MyDialog({isOpen, setIsOpen, qrCode, otherLink, isRestaurant, clickedBusiness}) {

  let d = new Date();
  let day = d.getDay();
  let month = d.getMonth();
  let dateString = `${month}/${day}`;
  // console.log(clickedBusiness)

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
          leave="ease-in duration-300"
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
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={isRestaurant ? `w-full transform overflow-auto overflow-x-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all text-left h-[162rem]` : `w-max transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all text-center`}>
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
                    <div className='grid grid-cols-2 w-[98%] h-auto mx-auto'>
                      <img src={`https://rr3l1d2s-8000.use.devtunnels.ms${clickedBusiness[0].business_image_1}`} alt='first-pic' className='w-[840px] h-[840px] max-h-[54rem] rounded-lg'/>
                      <div className='w-[130%] ml-5 pr-[12rem]'>
                        <div>
                          <p className='mt-4 text-3xl font-semibold'>Description</p>
                          <p className='text-xl'>{clickedBusiness[0].business_description}</p>
                        </div>
                        
                      </div>
                    </div>
                    <div className='grid grid-cols-[35%_65%] max-w-full mt-5 gap-0'>
                      <div>
                        <div className='text-left'>
                          <p className='text-2xl font-semibold mt-4'>Type:</p>
                          <div className='flex flex-row'>
                            {clickedBusiness[0].business_tags.map((tag) => {
                              return <p className='text-xl text-center'>{tag}, &nbsp;</p>
                            })}
                          </div>
                        </div>
                        <div className='text-left flex flex-col'>
                          <p className='text-2xl font-semibold mt-4'>Rating:</p>
                          <div className='flex flex-row'>
                            <Rating name="half-rating-read" className="" size="20" defaultValue={parseInt(clickedBusiness[0].business_rating)} precision={0.1} readOnly />
                            <p className='text-xl ml-3'>{clickedBusiness[0].business_rating} stars </p>
                          </div>
                        </div>
                        <div className='h-auto w-max shadow-md px-5 rounded-xl right-0'>
                          <p className='text-2xl font-semibold mt-12 text-left'>Hours of Operation:</p>
                          <div className='flex flex-col'>
                            {Object.entries(clickedBusiness[0].hours_of_operation).map(([key,value]) => {
                              return <div className='flex-row flex border-b-2 border-gray-200'> <p className='text-2xl mt-6'>{key + ":"} &nbsp;</p> <p className='text-2xl mt-6 mb-3'>{value}</p></div>
                            })}
                          </div>
                        </div>
                        <div className='flex flex-col text-left pr-32 mt-4'>
                          <p className='mb-5 text-xl'>Scan the QR code for directions to the restaurant!</p>
                          <QRCode value={otherLink} className='m-auto'/>
                        </div>
                      </div>
                      <div className='w-full flex justify-center mt-9'>
                        <Carousel width={800} autoPlay={true} interval={5000} infiniteLoop={true}>
                          <div className='flex justify-center items-center'> 
                            <img src={`https://rr3l1d2s-8000.use.devtunnels.ms${clickedBusiness[0].business_image_2}`} alt='second-pic' className='h-auto w-[950px] rounded-lg'/> 
                          </div>
                          <div className='flex justify-center items-center'>
                            <img src={`https://rr3l1d2s-8000.use.devtunnels.ms${clickedBusiness[0].business_image_3}`} alt='third-pic' className='h-auto w-[950px] rounded-lg'/>
                          </div>
                          <div className=' flex justify-center items-center'>
                            <img src={`https://rr3l1d2s-8000.use.devtunnels.ms${clickedBusiness[0].business_image_4}`} alt='second-pic' className='h-auto w-[950px] rounded-lg'/>
                          </div>
                          <div className='flex justify-center items-center'>
                            <img src={`https://rr3l1d2s-8000.use.devtunnels.ms${clickedBusiness[0].business_video_1}`} alt='third-pic' className='h-auto w-[950px] rounded-lg'/>
                          </div>
                        </Carousel>
                      </div>
                    </div>
                    <div className='flex-row flex justify-center items-center rounded-md p-3 pt-32'>
                      {/* <div className='flex flex-col '>
                        <p className='mb-5 text-xl'>Scan the QR code for directions to the restaurant!</p>
                        <QRCode value={otherLink} className='m-auto'/>
                      </div> */}
                      <div className='flex flex-col items-center justify-center'>
                        <p className='mb-5 text-xl'>Take a picture of the barcode and present it at the restaurant for Perks!</p>
                        {parseInt(clickedBusiness[0]?.business_barcode_dates?.split('/')[0]) <= parseInt(dateString.split('/')[0]) && parseInt(clickedBusiness[0]?.business_barcode_dates?.split('/')[1]) <= parseInt(dateString.split('/')[1]) ?
                        <>
                        <p className='mb-5 text-xl'>{clickedBusiness[0].business_barcode}</p>
                        <p className='mb-5 text-xl'>{clickedBusiness[0].busness_name}</p>
                        <p className='mb-5 text-xl'>{"Promo code valid until: " + clickedBusiness[0].business_barcode_date}</p>
                        </>
                        :
                        <p className='mb-5 text-xl'>No Promo Code available</p>
                        }
                        
                      </div>
                    </div>
                  </> : <QRCode value={otherLink} className='m-auto'/>}
                </div>

                <div className="mt-4 w-full flex items-center justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-full border border-transparent w-full bg-[#5C0601] px-4 py-3 text-2xl font-medium text-white hover:bg-[#863633] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 duration-300 ease-in-out"
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