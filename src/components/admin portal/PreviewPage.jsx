import React from 'react'
import { Slide } from 'react-slideshow-image';
import Rating from '@mui/material/Rating';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PreviewPage = ({values}) => {
    // values.business_tags && console.log(values.business_tags.split(','));
    // console.log(values)
    const validTags = [values.business_tags[1], values.business_tags[3], values.business_tags[4]];
  return (
    <div className='bg-white w-[770px] ml-[-90px] h-auto rounded-xl p-3'>
        <div
            as="h3"
            className="font-medium leading-6 text-gray-900"
        >
           <div className='flex flex-col text-center'>
                <div>
                    <p className='text-5xl mb-6 mt-4'>{values.business_name || "Name"}</p>
                    <p className='text-2xl font-normal'>{values.business_address || "Address"}</p>
                </div>
                <div className='my-auto text-2xl  flex flex-col mt-4 mb-3'>
                    <p>Phone Number:</p>
                    <p>{values.business_phone_number || "xxx-xxx-xxxx"}</p>
                </div>
            </div>
        </div>
        <div className="mt-20 flex-col justify-center items-center text-center">
            <>
            <div className='grid grid-cols-2 w-[100%] h-auto mx-auto'>
                <img src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg' alt='first-pic' className='w-[390px] h-[390px] max-h-[54rem] rounded-lg'/>
                <div className='w-[130%] ml-5 pr-[12rem]'>
                    <div>
                        <p className='mt-4 text-3xl font-semibold'>Description</p>
                        <p className='text-xl'>{values?.business_description || 'Description'}</p>
                    </div>
                    <div className='text-center flex flex-row mt-1 w-full justify-center items-center'>
                        <p className='text-2xl font-semibold'>Type: &nbsp;</p>
                        <div className='flex flex-row '>
                            <p className="text-lg text-secondary">{validTags.join(', ')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 max-w-full mt-[100px] gap-0 justify-center items-center'>
                <div className='w-[75%] flex flex-col justify-center items-center mt-[-150px]'>
                    <div className='pb-16 w-88 mt-12'>
                        <p className='text-2xl font-bold text-black '>Google Review Summary</p>
                        <p className='text-lg font-normal text-wrap'> {values?.google_reviews_summary}</p>
                    </div>
                    <div className='text-center flex flex-row mt-1 pt-0'>
                        <p className='text-2xl font-semibold mt-1'>Rating: &nbsp;</p>
                        <div className='flex flex-row mt-2'>
                        <p className='text-xl mr-3 '>{values?.business_rating} </p>
                        <Rating name="half-rating-read" className="" size="20" defaultValue={parseFloat(values?.business_rating)} precision={0.1} readOnly />
                        </div>
                    </div>
                    <div className='h-auto w-max shadow-md mt-1 px-5 rounded-xl right-0 border-2 border-black'>
                        <p className='text-2xl font-semibold text-center'>Hours of Operation:</p>
                        <div className='flex flex-col'>
                            <div className='flex-row flex border-b-2 border-gray-200'> <p className='text-2xl mt-3'>Monday:</p> <p className='text-2xl mt-3 mb-1'>{values.m_hours_of_operation}</p></div>
                            <div className='flex-row flex border-b-2 border-gray-200'> <p className='text-2xl mt-3'>Tuesday:</p> <p className='text-2xl mt-3 mb-1'>{values.tu_hours_of_operation}</p></div>
                            <div className='flex-row flex border-b-2 border-gray-200'> <p className='text-2xl mt-3'>Wendsday:</p> <p className='text-2xl mt-3 mb-1'>{values.w_hours_of_operation}</p></div>
                            <div className='flex-row flex border-b-2 border-gray-200'> <p className='text-2xl mt-3'>Thursday:</p> <p className='text-2xl mt-3 mb-1'>{values.th_hours_of_operation}</p></div>
                            <div className='flex-row flex border-b-2 border-gray-200'> <p className='text-2xl mt-3'>Friday:</p> <p className='text-2xl mt-3 mb-1'>{values.f_hours_of_operation}</p></div>
                            <div className='flex-row flex border-b-2 border-gray-200'> <p className='text-2xl mt-3'>Saturday:</p> <p className='text-2xl mt-3 mb-1'>{values.sa_hours_of_operation}</p></div>
                            <div className='flex-row flex border-b-2 border-gray-200'> <p className='text-2xl mt-3'>Sunday:</p> <p className='text-2xl mt-3 mb-1'>{values.sa_hours_of_operation}</p></div>
                            
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center mt-9'>
                    <Carousel width={420} dynamicHeight={true} autoPlay={true} interval={5000} infiniteLoop={true}>
                        <div className='flex justify-center items-center'> 
                        <img src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg' alt='second-pic' className='h-auto w-[40rem] rounded-lg'/> 
                        </div>
                        <div className='flex justify-center items-center'>
                        <img src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg' alt='third-pic' className='h-auto w-[40rem] rounded-lg'/>
                        </div>
                        <div className=' flex justify-center items-center'>
                        <img src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg' alt='second-pic' className='h-auto w-[40rem] rounded-lg'/>
                        </div>
                        <div className='flex justify-center items-center'>
                        <img src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg' alt='third-pic' className='h-auto w-[40rem] rounded-lg'/>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className='mt-20 flex-row flex justify-center items-center rounded-md p-3'>
                <div className='flex flex-col mr-10'>
                    <p className='mb-5 text-xl'>Scan the QR code for directions to the restaurant!</p>
                    <img src='https://cdn.britannica.com/17/155017-004-7812A49F/Example-QR-code.jpg?s=1500x700&q=85' alt='qrcode'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='mb-5 text-xl'>Take a picture of the promo-code and present it at the restaurant for Perks!</p>
                    <p className='mb-5 text-xl'>{values?.business_name}</p>
                    <p className='mb-5 text-xl'>{values?.business_barcode}</p>
                    <p className='mb-5 text-xl'>{"Promo code valid until: " + values?.business_barcode_date}</p>
                </div>
            </div>
            </> 
        </div>

        <div className="mt-4 w-full flex items-center justify-center">
            {/* <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-[#5C0601] px-4 py-2 text-sm font-medium text-white hover:bg-[#863633] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 duration-300 ease-in-out"
            onClick={closeModal}
            >
            Close Me
            </button> */}
        </div>
    </div>
  )
}

export default PreviewPage