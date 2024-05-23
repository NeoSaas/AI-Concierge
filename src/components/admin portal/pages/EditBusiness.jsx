import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import Modal from 'react-modal';
import Tooltip from '@mui/material/Tooltip';
import { FaInfoCircle } from "react-icons/fa";
import PreviewPage from '../PreviewPage';
import 'react-loader-spinner';
import { Circles } from 'react-loader-spinner';
import AdminPortalNav from '../AdminPortalNav';
import * as Yup from 'yup';
import { typeOptions, subTypeOptions, dietaryOptions, 
    groupSizeOptions, promoOptions, specialOptions, 
    awardOptions, budgetOptions, atmosphereOptions, 
    restaurantTypeOptions} from '../arrays/Arrays';
import { DynamicFormDropdowns, DynamicFormDropdowns2, DynamicFormDropdowns3} from '../DynamicFormDropdowns';

const EditBusiness = ({ logout, response }) => {

    axios.defaults.withCredentials = true;
    const [formData, setFormData] = React.useState({});
    const [success, setSuccess] = React.useState(false);
    const [fail, setFail] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [editPage, setEditPage] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const dates = ['3/1/24', '3/2/24', '3/3/24', '3/4/24', '3/5/24', '3/6/24', '3/7/24', '3/8/24', '3/9/24', '3/10/24', '3/11/24', '3/12/24', '3/13/24', '3/14/24', '3/15/24', '3/16/24', '3/17/24', '3/18/24', '3/19/24', '3/20/24', '3/21/24', '3/22/24', '3/23/24', '3/24/24', '3/25/24', '3/26/24', '3/27/24', '3/28/24', '3/29/24', '3/30/24', '4/1/24', '4/1/24', '4/2/24', '4/3/24', '4/4/24', '4/5/24', '4/6/24', '4/7/24', '4/8/24', '4/9/24', '4/10/24', '4/11/24', '4/12/24', '4/13/24', '4/14/24', '4/15/24', '4/16/24', '4/17/24', '4/18/24', '4/19/24', '4/20/24', '4/21/24', '4/22/24', '4/23/24', '4/24/24', '4/25/24', '4/26/24', '4/27/24', '4/28/24', '4/29/24', '4/30/24'];

    // console.log('User business data:', response.data);
    setFormData({
        business_tags: response.data.business_tags,
        business_name: response.data.business_name,
        business_rating: response.data.business_rating,
        business_place_id: response.data.business_place_id,
        business_address: response.data.business_address,
        business_pictures: response.data.business_pictures,
        hours_of_operation: response.data.hours_of_operation,
        business_barcode: response.data.business_barcode,
        m_hours_of_operation: response.data.hours_of_operation["Monday"],
        tu_hours_of_operation: response.data.hours_of_operation["Tuesday"],
        w_hours_of_operation: response.data.hours_of_operation["Wednesday"],
        th_hours_of_operation: response.data.hours_of_operation["Thursday"],
        f_hours_of_operation: response.data.hours_of_operation["Friday"],
        sa_hours_of_operation: response.data.hours_of_operation["Saturday"],
        su_hours_of_operation: response.data.hours_of_operation["Sunday"],
        walk_time: response.data.walk_time,
        drive_time: response.data.drive_time,
        transit_time: response.data.transit_time,
        directions_url: response.data.directions_url,
    });

    

    const handleFormChange = (values) => {
        // console.log('Form values:', values);
        setFormData(values);
        values?.business_type_tag1 == "Restaurant" ? (values.business_tags = values.business_type_tag1 + ', ' + values.business_restaurant_sub_tag1 + ', ' + values.business_restaurant_sub_tag2 + ', ' + values.business_restaurant_sub_tag3 + ', ' + values.business_restaurant_sub_tag4 + ', ' + values.business_restaurant_sub_tag5 + ', ' + values.business_restaurant_sub_tag6 + ', ' + values.business_restaurant_sub_tag7 + ', ' + values.sub_business_tags1 + ', ' + values.sub_business_tags2) 
        : (values.business_tags = formData.business_type_tag1 + ', ' + formData.business_type_tag2 + ', ' + formData.business_type_tag3 + ', ' + values.sub_business_tags + ', ' + values.sub_business_tags1 + ', ' + values.sub_business_tags2)
    };

    const handleSubmit = (values) => {
        console.log('Form values:', values);
        setLoading(true);
        values?.business_type_tag1 == "Restaurant" ? (values.business_tags = formData.business_type_tag1 + ', ' + formData.business_restaurant_sub_tag1 + ', ' + formData.business_restaurant_sub_tag2 + ', ' + formData.business_restaurant_sub_tag3 + ', ' + formData.business_restaurant_sub_tag4 + ', ' + formData.business_restaurant_sub_tag5 + ', ' + formData.business_restaurant_sub_tag6 + ', ' + formData.business_restaurant_sub_tag7 + ', ' + formData.sub_business_tags1 + ', ' + formData.sub_business_tags2) 
        : (values.business_tags = formData.business_type_tag1 + ', ' + formData.business_type_tag2 + ', ' + formData.business_type_tag3 + ', ' + formData.sub_business_tags + ', ' + formData.sub_business_tags1 + ', ' + formData.sub_business_tags2)
        // console.log('Form values:', values);
        axios({
            method: 'POST',
            url: 'https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/updateBusinessData/',
            data: values,
            headers: {
                'content-Type': 'multipart/form-data',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            withCredentials: true,
        }) 
        .then(response => {
            // console.log('Business added successfully:', response.data);
            setLoading(false);
            setSuccess(true);
            for (let key in values) {
                console.log(values[key])
                values[key] = response.data[key];
            }
        })
        .catch(error => {
            console.error('Error adding business:', error);
            setFail(true);
        });
    };


    const handleCloseModal = () => {
        setLoading(false);
        setSuccess(false);
        setFail(false);
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
        <>
        {!editPage ?  
        <div className='grid grid-cols-2 bg-gray-50' >
            
            <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
                <Modal
                    isOpen={loading}
                    onRequestClose={handleCloseModal}
                    style={customStyles}
                    contentLabel="loading"
                >
                        <div className="flex flex-col items-center justify-center h-40 w-80 text-center">
                            <p>Adding Business....</p>
                            <Circles color="#0066FF" height={90} width={90} />
                        </div>
                </Modal>
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
                <Modal
                    isOpen={fail}
                    onRequestClose={handleCloseModal}
                    style={customStyles}
                    contentLabel="Failure"
                >
                        <div className="flex flex-col items-center justify-center h-40 w-80 text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900">Failed to add business</h2>
                            <button onClick={handleCloseModal} className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Close</button>
                        </div>
                </Modal>
                <div className=''>
                    
                    <div className="max-w-md w-full space-y-8 grid-flow-col">
                        
                        <Formik
                            initialValues={{
                                business_tags: formData.business_tags,
                                business_name: formData.business_name,
                                business_rating: formData.business_rating,
                                business_place_id: formData.business_place_id,
                                business_address: formData.business_address,
                                business_pictures: formData.business_pictures,
                                hours_of_operation: formData.hours_of_operation,
                                business_barcode: formData.business_barcode,
                                m_hours_of_operation: formData.hours_of_operation["Monday"],
                                tu_hours_of_operation: formData.hours_of_operation["Tuesday"],
                                w_hours_of_operation: formData.hours_of_operation["Wednesday"],
                                th_hours_of_operation: formData.hours_of_operation["Thursday"],
                                f_hours_of_operation: formData.hours_of_operation["Friday"],
                                sa_hours_of_operation: formData.hours_of_operation["Saturday"],
                                su_hours_of_operation: formData.hours_of_operation["Sunday"],
                                walk_time: formData.walk_time,
                                drive_time: formData.drive_time,
                                transit_time: formData.transit_time,
                                directions_url: formData.directions_url,
                            }}
                            onSubmit={handleSubmit}
                            validator={() => ({})}
                            >
                            {({ values }) => (
                            <Form className="mt-8 space-y-6" encType='multipart/form-data' onChange={() => handleFormChange(values)}>
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div>
                                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Edit Your Business</h2>
                                    </div>
                                    <div className=''>
                                    
                                        <Tooltip title={<h1 style={{fontSize: '1rem'}}>Simply enter the name of your business in the field</h1>} placement="top-start" arrow>
                                            <label htmlFor="business_name" className="flex flex-row items-center">Business Name<FaInfoCircle className='mx-2' />
                                            </label>
                                        </Tooltip>
                                        <Field type="text" name="business_name" id="business_name" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Name" />
                                    </div>
                                    <div className='flex-1'>
                                        <Tooltip title={<h1 style={{fontSize: '1rem'}}>For the next three dropdowns please select ones that fit the most, all fields are required however for the secondary and third tags there is a "Non-Applicable" option.</h1>} placement="top-start" arrow>
                                      
                                            <label htmlFor="business_type_tag1" className="flex flex-row items-center">Main Business Type <FaInfoCircle className='mx-2' /></label>
                                            <Field as="select" name="business_type_tag1" id="business_type_tag1" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                                <option value="&nbsp;">Select...</option>
                                                {typeOptions.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                                ))}
                                            </Field>
                                            <DynamicFormDropdowns values={values}/>
                                        </Tooltip>
                                        <Tooltip title={<h1 style={{fontSize: '1rem'}}>Please select a tag that defines your business as closely as possible, then upon the appearence of a second drop down please select a sub tag that even more closely matches your business</h1>} placement="top-start" arrow>
                                      
                                            <label htmlFor="business_type_tag2" className="flex flex-row items-center">Secondary Business Type <FaInfoCircle className='mx-2' /></label>
                                            <Field as="select" name="business_type_tag2" id="business_type_tag2" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                                <option value="">Select...</option>
                                                <option value="&nbsp;">Non Applicable</option>
                                                {typeOptions.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                                ))}
                                            </Field>
                                            <DynamicFormDropdowns2 values={values}/>
                                        </Tooltip>
                                        <Tooltip title={<h1 style={{fontSize: '1rem'}}>Please select a tag that defines your business as closely as possible, then upon the appearence of a second drop down please select a sub tag that even more closely matches your business</h1>} placement="top-start" arrow>
                                      
                                            <label htmlFor="business_type_tag3" className="flex flex-row items-center">Third - A business mention <FaInfoCircle className='mx-2' /></label>
                                            <Field as="select" name="business_type_tag3" id="business_type_tag3" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                                <option value="">Select...</option>
                                                <option value="">Non Applicable</option>
                                                {typeOptions.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                                ))}
                                            </Field>
                                            <DynamicFormDropdowns3 values={values}/>
                                        </Tooltip>
                                        <Tooltip title={<h1 style={{fontSize: '1rem'}}>Please select one of the budgetary accomodation options that most closely fits your prices</h1>} placement="top-start" arrow>
                                            <label htmlFor="sub_business_tags1" className="flex flex-row items-center">Budget Tag <FaInfoCircle className='mx-2' /></label>
                                            <Field as="select" name="sub_business_tags1" id="sub_business_tags1" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                                <option value="">Select...</option>
                                                {budgetOptions.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                                ))}
                                            </Field>
                                        </Tooltip>
                                        <Tooltip title={<h1 style={{fontSize: '1rem'}}>Please choose an option that most closely matches the largest group you can accomodate</h1>} placement="top-start" arrow>
                                            <label htmlFor="sub_business_tags2" className="flex flex-row items-center">Group Size that can be Accomodated<FaInfoCircle className='mx-2' /></label>
                                            <Field as="select" name="sub_business_tags2" id="sub_business_tags2" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                                <option value="">Select...</option>
                                                {groupSizeOptions.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                                ))}
                                            </Field>
                                            
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
                                        <Tooltip title={<h1 style={{fontSize: '1rem'}}>Enter a description for your business, Max number of characters is 500</h1>} placement="top-start" arrow>
                                            <label htmlFor="business_description" className="flex flex-row items-center">Business Description<FaInfoCircle className='mx-2' /><p className='ml-20'>Characters left: {500 - count}</p>
                                            </label>
                                        </Tooltip>
                                        
                                        <Field type="text" name="business_description" id="business_description" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Description" onChange={e => setCount(e.target.value.length)} />
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
                                        <Tooltip title={<h1 style={{fontSize: '1rem'}}>Choose from the list of promo-codes to provide for a user of the concierge</h1>} placement="top-start" arrow>
                                            <label htmlFor="business_barcode" className="flex flex-row items-center">Business Promo Code<FaInfoCircle className='mx-2'/>
                                            </label>
                                        </Tooltip>
                                        <Field as="select" name="business_barcode" id="business_barcode" placeholder="Text for barcode" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" >
                                            <option value="">Select...</option>
                                            {promoOptions.map(option => (
                                            <option key={option.value} value={option.label}>
                                                {option.label}
                                            </option>
                                            ))}
                                        </Field>
                                    </div>
                                    <div>
                                        <Tooltip title={<h1 style={{fontSize: '1rem'}}>Please select a date that the promo code becomes invalid</h1>} placement="top-start" arrow>
                                            <label htmlFor="business_barcode" className="flex flex-row items-center">Date that the promo code is valid until<FaInfoCircle className='mx-2'/>
                                            </label>
                                        </Tooltip>
                                        <Field as="select" name="business_barcode_date" id="business_barcode_date" placeholder="date for barcode" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" >
                                            <option value="">Select...</option>
                                            {dates.map(date => (
                                            <option key={date} value={date}>
                                                {date}
                                            </option>
                                            ))}
                                        </Field>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Save Changes
                                    </button>
                                </div>
                            </Form>
                        )}
                        </Formik>
                    </div>
                    
                </div>
            </div>
            <div className='flex flex-col justify-center max-w-full w-full items-center'>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Current Page Preview</h2>
                <PreviewPage values={formData}/>
            </div>
            
        </div>
        : null}
        
        </>
    );
};

export default EditBusiness;