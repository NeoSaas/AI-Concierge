import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import Modal from 'react-modal';
import Tooltip from '@mui/material/Tooltip';
import { FaInfoCircle } from "react-icons/fa";

const AddBusinessPage = () => {

    const [success, setSuccess] = React.useState(false);

    const handleSubmit = (values) => {
        axios({
            method: 'POST',
            url: 'https://rr3l1d2s-8000.use.devtunnels.ms/api/addBusiness/',
            data: values,
            headers: {
                'content-Type': 'multipart/form-data',
            }
        }) // Adjust the endpoint URL as per your API
        .then(response => {
            console.log('Business added successfully:', response.data);
            setSuccess(true);
            // Handle success, e.g., show a success message or redirect
        })
        .catch(error => {
            console.error('Error adding business:', error);
            // Handle error, e.g., show an error message
        });
    };


    const handleCloseModal = () => {
        setSuccess(false);
    };

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

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Modal
                isOpen={success}
                onRequestClose={handleCloseModal}
                style={customStyles}
                contentLabel="Success"
            >
                    <div className="flex flex-col items-center justify-center h-40 w-80 text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Business added successfully!</h2>
                        <button onClick={handleCloseModal} className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Close</button>
                    </div>
            </Modal>
            <div className=''>
                
                <div className="max-w-md w-full space-y-8 grid-flow-col">
                    
                    <Formik
                        initialValues={{
                            business_name: '',
                            business_tags: '',
                            business_rating: 0.00,
                            business_place_id: '',
                            business_address: '',
                            business_pictures: '',
                            walk_time: '',
                            drive_time: '',
                            transit_time: '',
                            directions_url: '',
                            hours_of_operation: '',
                            business_barcode: ''
                        }}
                        onSubmit={handleSubmit}
                        >
                        <Form className="mt-8 space-y-6" encType='multipart/form-data'>
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Your Business</h2>
                                </div>
                                <div className=''>
                                
                                    <Tooltip title={<h1 style={{fontSize: '1rem'}}>Simply enter the name of your business in the field</h1>} placement="top-start" arrow>
                                        <label htmlFor="business_name" className="flex flex-row items-center">Business Name<FaInfoCircle className='mx-2' />
                                        </label>
                                    </Tooltip>
                                    <Field type="text" name="business_name" id="business_name" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Name" />
                                </div>
                                <div>
                                    <Tooltip title={<h1 style={{fontSize: '0.75rem'}}>Enter three tags that fit your business, please choose one from the following list: Bars and Nightlife, Local Restaurants, Transportation Services, Local Attractions, Cultural Experiences, Shopping Districts, Day Tours, Spa and Wellness Centers, Outdoor Activities, Fitness Centers, Golf Courses, Wine Tastings and Tours, Art Galleries, Specialty Food Shops, Boat Rentals or Cruises, Bicycle Rentals, Cooking Classes, Photography Services, Hair and Beauty Salons, Local Markets, Event Ticketing, Childcare Services, Pet Services, Language Classes or Translators, Medical Clinics or Pharmacies and at least 2 from this list: Clubs, Dive Bars, Piano Bars, Karaoke Bars, Sports Bars, Wine Bar,Italian, Mexican, Chinese, Indian, Thai, American, Fancy,Airport Shuttles, Taxi Services, Ride-sharing Services, Car Rentals, Public Transportation, Private ChartersMuseums, Historical Sites, Amusement Parks, Zoos, Gardens, Landmarks,Traditional Performances, Art Exhibitions, Food Tours, Language Classes, Cooking Classes, Cultural Festivals,Boutiques, Malls, Flea Markets, Antique Shops, Local Crafts, Souvenir Stores,City Tours, Nature Tours, Food Tours, Adventure Tours, Historical Tours, Group Tours,Massage Services, Facials, Body Treatments, Yoga Studios, Fitness Classes, Alternative Therapies,Hiking Trails, Camping Sites, Water Sports, Cycling Paths, Rock Climbing, Fishing Spots,Gyms, Yoga Studios, Pilates Studios, Personal Trainers, Group Classes, Sports Facilities,Public Courses, Private Clubs, Driving Ranges, Golf Lessons, Pro Shops, Mini-golf,Vineyards, Wineries, Wine Bars, Wine Festivals, Wine Courses, Wine-themed Tours,Contemporary Art, Traditional Art, Photography Exhibits, Sculpture Gardens, Art Classes, Artist Studios,Bakeries, Delis, Cheese Shops, Chocolate Shops, Farmers Markets, Gourmet Groceries,Sailboat Rentals, Kayak Rentals, Yacht Charters, Sightseeing Cruises, Fishing Charters, River Cruises,City Bike Rentals, Mountain Bike Rentals, Tandem Bike Rentals, Electric Bike Rentals, Bike Tours, Bike Repair Shops,International Cuisines, Baking Classes, Vegetarian Cooking, Molecular Gastronomy, Wine Pairing, Kids Cooking Classes,Portrait Studios, Wedding Photography, Event Photography, Landscape Photography, Photography Tours, Photo Printing Services,Hair Salons, Barber Shops, Nail Salons, Makeup Services, Waxing Services, Tanning Salons,Farmers Markets, Flea Markets, Night Markets, Artisan Markets, Street Food Markets, Antique Markets,Concert Tickets, Theater Tickets, Sporting Events, Festivals, Comedy Shows, Exhibitions,Daycare Centers, Nanny Services, Babysitting Services, Kids Activities, Tutoring Services, Summer Camps,Veterinary Clinics, Pet Grooming, Pet Boarding, Pet Supplies, Dog Walking, Pet Training, Classes, Spanish Classes, French Classes, Mandarin Classes, Sign Language Classes, Translation Services,General Practitioners, Dentists, Optometrists, Pharmacies, Urgent Care Clinics, Specialty Clinics</h1>} placement="top-start" arrow>
                                        <label htmlFor="business_tags" className="flex flex-row items-center">Business Tags <FaInfoCircle className='mx-2' /></label>
                                        <Field type="text" name="business_tags" id="business_tags" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" />
                                    </Tooltip>
                                </div>
                                <div>
                                    <label htmlFor="business_phone_number" className="">Business Phone Number</label>
                                    <Field type="text" name="business_phone_number" id="business_phone_number" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone Number" />
                                    
                                </div>
                                <div className=''>
                                    <Tooltip title={<h1 style={{fontSize: '1rem'}}>Enter the star rating for your business. For example you would want to enter 4.25. It must be 2 decimal places</h1>} placement="top-start" arrow>
                                        <label htmlFor="business_rating" className="flex flex-row items-center">Business Rating<FaInfoCircle className='mx-2' />
                                        </label>
                                    </Tooltip>
                                    
                                    <Field type="number" name="business_rating" id="business_rating" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Rating" />
                                </div>
                                <div>
                                    <label htmlFor="business_address" className="">Business Address
                                    </label>
                                    <Field type="text" name="business_address" id="business_address" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Address" />
                                </div>
                                <div className=''>
                                    <Tooltip title={<h1 style={{fontSize: '1rem'}}>Enter a description for your business, doesnt have to be too long.</h1>} placement="top-start" arrow>
                                        <label htmlFor="business_description" className="flex flex-row items-center">Business Description<FaInfoCircle className='mx-2' />
                                        </label>
                                    </Tooltip>
                                    
                                    <Field type="text" name="business_description" id="business_description" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Description" />
                                </div>
                                <div >
                                    <Tooltip title={<h1 style={{fontSize: '1rem'}}>Upload up to 4 pictures and 1 video or 5 pictures</h1>} placement="top-start" arrow>
                                        <label htmlFor="business_pictures" className="flex flex-row items-center">Main Picture <FaInfoCircle className='mx-2' /></label>
                                        <Field type="file" name="business_picture1" id="business_picture1"  placeholder="Business Pictures (comma-separated)" >
                                            {({ field, form }) => (
                                                <input
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                type="file"
                                                onChange={(event) => {
                                                    form.setFieldValue(field.name, event.currentTarget.files[0]);
                                                }}
                                                />
                                            )}
                                        </Field>
                                        <label htmlFor="business_pictures" className="flex flex-row items-center">4 Pictures for Slide Show</label>
                                        <Field type="file" name="business_picture2" id="business_picture2"  placeholder="Business Pictures (comma-separated)" >
                                            {({ field, form }) => (
                                                <input
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                type="file"
                                                onChange={(event) => {
                                                    form.setFieldValue(field.name, event.currentTarget.files[0]);
                                                }}
                                                />
                                            )}
                                        </Field>
                                        <Field type="file" name="business_picture3" id="business_picture3"  placeholder="Business Pictures (comma-separated)" >
                                            {({ field, form }) => (
                                                <input
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                type="file"
                                                onChange={(event) => {
                                                    form.setFieldValue(field.name, event.currentTarget.files[0]);
                                                }}
                                                />
                                            )}
                                        </Field>
                                        <Field type="file" name="business_picture4" id="business_picture4" placeholder="Business Pictures (comma-separated)" >
                                            {({ field, form }) => (
                                                <input
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                type="file"
                                                onChange={(event) => {
                                                    form.setFieldValue(field.name, event.currentTarget.files[0]);
                                                }}
                                                />
                                            )}
                                        </Field>
                                        <Field type="file" name="business_video1" id="business_video1" placeholder="Business Pictures (comma-separated)" >
                                            {({ field, form }) => (
                                                <input
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                type="file"
                                                onChange={(event) => {
                                                    form.setFieldValue(field.name, event.currentTarget.files[0]);
                                                }}
                                                />
                                            )}
                                        </Field>
                                    </Tooltip>
                                </div>
                                <div>
                                    <Tooltip title={<h1 style={{fontSize: '1rem'}}>Use format shown in the placeholder text of the field. I.e enter it as '8am-10pm', if closed on a specific day just type the word 'closed'.</h1>} placement="top-start" arrow>
                                        <label htmlFor="business_hours" className="flex flex-row items-center">Business Hours<FaInfoCircle className='mx-2' />
                                        </label>
                                    </Tooltip>
                               </div>
                                <div className='flex flex-row justify-between'>
                                    <div>
                                        <div>
                                            <label htmlFor="hours_of_operation" className="">Monday</label>
                                            <Field type="text" name="m_hours_of_operation" id="m_hours_of_operation" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Format 12am-12pm" />
                                        </div>
                                        <div>
                                            <label htmlFor="hours_of_operation" className="">Tuesday</label>
                                            <Field type="text" name="tu_hours_of_operation" id="tu_hours_of_operation" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Format 12am-12pm" />
                                        </div>
                                        <div>
                                            <label htmlFor="hours_of_operation" className="">Wednesday</label>
                                            <Field type="text" name="w_hours_of_operation" id="w_hours_of_operation" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Format 12am-12pm" />
                                        </div>
                                        <div>
                                            <label htmlFor="hours_of_operation" className="">Thursday</label>
                                            <Field type="text" name="th_hours_of_operation" id="th_hours_of_operation" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Format 12am-12pm" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="hours_of_operation" className="">Friday</label>
                                            <Field type="text" name="f_hours_of_operation" id="f_hours_of_operation" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Format 12am-12pm" />
                                        </div>
                                        <div>
                                            <label htmlFor="hours_of_operation" className="">Saturday</label>
                                            <Field type="text" name="sa_hours_of_operation" id="sa_hours_of_operation" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Format 12am-12pm" />
                                        </div>
                                        <div>
                                            <label htmlFor="hours_of_operation" className="">Sunday</label>
                                            <Field type="text" name="su_hours_of_operation" id="su_hours_of_operation" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Format 12am-12pm" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Tooltip title={<h1 style={{fontSize: '1rem'}}>For Example if youd like to provide a 10% off coupon to customers with the barcode, you should enter: 'This code from the alfond inn AI-concierge represents 10% off the total'</h1>} placement="top-start" arrow>
                                        <label htmlFor="business_barcode" className="flex flex-row items-center">Business Barcode<FaInfoCircle className='mx-2'/>
                                        </label>
                                    </Tooltip>
                                    <Field type="text" name="business_barcode" id="business_barcode" placeholder="Text for barcode" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Add Business
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
                
            </div>
        </div>
    );
};

export default AddBusinessPage;

