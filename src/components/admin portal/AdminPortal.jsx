import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import Modal from 'react-modal';

const AddBusinessPage = () => {

    const [success, setSuccess] = React.useState(false);

    const handleSubmit = (values) => {
        axios.post('https://rr3l1d2s-8000.use.devtunnels.ms/api/addBusiness/', values) // Adjust the endpoint URL as per your API
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
            <div className='grid grid-cols-2'>
                
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
                            business_barcode: null
                        }}
                        onSubmit={handleSubmit}
                        >
                        <Form className="mt-8 space-y-6">
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Your Business</h2>
                                </div>
                                <div className=''>
                                    <label htmlFor="business_name" className="">Business Name</label>
                                    <Field type="text" name="business_name" id="business_name" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Name" />
                                </div>
                                <div>
                                    <label htmlFor="business_tags" className="">Business Tags (comma-separated)</label>
                                    <Field type="text" name="business_tags" id="business_tags" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" />
                                </div>
                                <div className=''>
                                    <label htmlFor="business_rating" className="">Business Rating</label>
                                    <Field type="number" name="business_rating" id="business_rating" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Rating" />
                                </div>
                                <div>
                                    <label htmlFor="business_address" className="">Business Address</label>
                                    <Field type="text" name="business_address" id="business_address" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Address" />
                                </div>
                                <div >
                                    <label htmlFor="business_pictures" className="">Business Picture (comma-separated)</label>
                                    <Field type="file" name="business_pictures" id="business_pictures" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Pictures (comma-separated)" />
                                </div>
                                <label htmlFor="business_pictures" className="">Business Hours (please enter 'closed' if closed)</label>
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
                                    <label htmlFor="business_barcode" className="">Business Barcode</label>
                                    <input type="text" name="business_barcode" id="business_barcode" placeholder="Text for barcode" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
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
                <div className='grid-flow-col'>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 flex justify-center items-center">How to Fill out the fields</h2>
                    <div className='h-16 w-full text-center mt-6 bg-white rounded-xl flex-col justify-center items-center border-2 border-black shadow-sm'>
                        <p className='text-xl font-semibold'>Business Name</p>
                        <p>Simply enter the name of your business in the field</p>
                    </div>
                    <div className='h-72 w-full text-center mt-6 bg-white rounded-xl flex-col justify-center items-center border-2 border-black shadow-sm'>
                        <p className='text-xl font-semibold'>Business Tags</p>
                        <p>Enter some tags that associate with your business, please choose from the following list:
                        Bars and Nightlife, Local Restaurants, Transportation Services, Local Attractions, Cultural Experiences, Shopping Districts, Day Tours, Spa and Wellness Centers, Outdoor Activities, Fitness Centers, Golf Courses, Wine Tastings and Tours, Art Galleries, Specialty Food Shops, Boat Rentals or Cruises, Bicycle Rentals, Cooking Classes, Photography Services, Hair and Beauty Salons, Local Markets, Event Ticketing, Childcare Services, Pet Services, Language Classes or Translator, Medical Clinics or Pharmacies
                        </p>
                    </div>
                    <div className='h-20 w-full text-center mt-6 bg-white rounded-xl flex-col border-2 border-black justify-center items-center shadow-sm'>
                        <p className='text-xl font-semibold'>Rating</p>
                        <p>Enter the star rating for your business. For example you would want to enter 4.25. It must be 2 decimal places</p>
                    </div>
                    <div className='h-20 w-full text-center mt-6 bg-white rounded-xl flex-col border-2 border-black justify-center items-center shadow-sm'>
                        <p className='text-xl font-semibold'>Business Hours</p>
                        <p>For the business hours please follow the format shown in the placeholder text of the field. In other words you should enter it as "8am-10pm" as an example</p>
                    </div>
                    <div className='h-20 w-full text-center mt-6 bg-white rounded-xl flex-col border-2 border-black justify-center items-center shadow-sm'>
                        <p className='text-xl font-semibold'>Barcode</p>
                        <p>For the barcode please input the text youd like to appear to let your employees know what barcode the customer provided. For Example if youd like to provide a 10% off coupon to customers with the barcode, you should enter: "This code from the alfond inn AI-concierge represents 10% off the total"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBusinessPage;

