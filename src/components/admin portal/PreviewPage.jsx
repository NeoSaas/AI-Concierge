import React from 'react'
import { Slide } from 'react-slideshow-image';
import Rating from '@mui/material/Rating';

const PreviewPage = ({values}) => {
    // values.business_tags && console.log(values.business_tags.split(','));
    // console.log(values)
  return (
    <div className='bg-white w-[770px] ml-[-90px] h-auto rounded-xl p-3'>
        <div
            as="h3"
            className="font-medium leading-6 text-gray-900"
        >
            <div className='flex flex-row'>
            <div>
            <p className='text-4xl'>{values.business_name || 'Business Name'}</p>
            <p className='text-2xl'>{values.business_address || 'Address'}</p>
            </div>
            <div className='my-auto text-2xl pl-16 flex flex-col'>
            <p>Phone Number:</p>
            <p>{values.business_phone_number || 'xxx-xxx-xxx'}</p>
            </div>
            
            </div>
            
        </div>
        <div className="mt-20 flex-col justify-center items-center text-center">
            <>
            <div className='grid grid-cols-2 w-[100%] h-auto mx-auto'>
                <div className='flex flex-col'>
                    <p>Main Image will appear here</p>
                    <img src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg' alt='first-pic' className='max-h-[36rem] rounded-lg'/>
                </div>
                
                <div className='w-[130%] pr-40'>
                <div>
                    <p className='mt-4 text-2xl font-semibold'>Description</p>
                    <p className='text-lg'>{values.business_description || 'Description'}</p>
                </div>
                
                </div>
            </div>
            <div className='grid grid-cols-[40%_60%] max-w-full mt-12'>
                <div>
                <div className='text-left'>
                    <p className='text-2xl font-semibold mt-4'>Type:</p>
                    <div className='flex flex-row w-[36rem]'>
                    {values.business_tags && values.business_tags.split(',').length > 1 && 
                        values.business_tags.split(',').map((tag) => {
                            return <p className='text-xl text-center'>{tag + ","}&nbsp;</p>
                        })
                    }
                    {/* <p className='text-xl text-center'>{values.business_tags + " , "}</p>
                    <p className='text-xl text-center'>{values.sub_business_tags + " ,"}</p>
                    <p className='text-xl text-center'>{values.sub_business_tags2}</p> */}
                    
                    </div>
                </div>
                <div className='text-left flex flex-col'>
                    <p className='text-2xl font-semibold mt-4'>Rating:</p>
                    <div className='flex flex-row'>
                    <Rating name="half-rating-read" className="" size="20" defaultValue={parseInt(values?.business_rating)} precision={0.1} readOnly />
                    <p className='text-xl ml-3'>{values.business_rating || ''} stars </p>
                    </div>
                </div>
                <div className='h-auto w-max shadow-md px-5 rounded-xl right-0'>
                    <p className='text-2xl font-semibold mt-12 text-left'>Hours of Operation:</p>
                    <div className='flex flex-col'>
                    {/* {values.hours_of_operation &&
                        Object.entries(values.hours_of_operation).map(([key,value]) => {
                            return <div className='flex-row flex border-b-2 border-gray-200'> <p className='text-2xl mt-3'>{key + ":"}</p> <p className='text-2xl mt-3 mb-1'>{value}</p></div>
                        })
                    } */}
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
                <div className='flex-1 mt-32'>
                    <p> Images for slide show will appear here</p>
                    <Slide>
                        <div className=' each-slide-effect flex justify-center items-center'> 
                        <img src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg' alt='second-pic' className='rounded-lg h-full'/> 
                        </div>
                        <div className=' each-slide-effect flex justify-center items-center'>
                        <img src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg' alt='third-pic' className='rounded-lg'/>
                        </div>
                        <div className=' each-slide-effect flex justify-center items-center'>
                        <img src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg' alt='second-pic' className='rounded-lg'/>
                        </div>
                        <div className=' each-slide-effect flex justify-center items-center'>
                        <img src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg' alt='third-pic' className='rounded-lg'/>
                        </div>
                    </Slide>
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