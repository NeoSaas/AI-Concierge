import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const AddBusinessPage = () => {
  const handleSubmit = (values) => {
    axios.post('http://127.0.0.1:8000/api/addBusiness/', values) // Adjust the endpoint URL as per your API
      .then(response => {
        console.log('Business added successfully:', response.data);
        // Handle success, e.g., show a success message or redirect
      })
      .catch(error => {
        console.error('Error adding business:', error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Your Business</h2>
        </div>
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
                <input type="file" name="business_barcode" id="business_barcode" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
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
  );
};

export default AddBusinessPage;

