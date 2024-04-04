import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import Modal from 'react-modal';
import Tooltip from '@mui/material/Tooltip';
import { FaInfoCircle } from "react-icons/fa";
import { render } from '@testing-library/react';
import PreviewPage from './PreviewPage';
import 'react-loader-spinner';
import { Circles } from 'react-loader-spinner';
import AdminPortalNav from './AdminPortalNav';
import * as Yup from 'yup';

const AddBusinessPage = () => {

    axios.defaults.withCredentials = true;

    const [formData, setFormData] = React.useState({});
    const [success, setSuccess] = React.useState(false);
    const [fail, setFail] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [editPage, setEditPage] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const dates = ['3/1/24', '3/2/24', '3/3/24', '3/4/24', '3/5/24', '3/6/24', '3/7/24', '3/8/24', '3/9/24', '3/10/24', '3/11/24', '3/12/24', '3/13/24', '3/14/24', '3/15/24', '3/16/24', '3/17/24', '3/18/24', '3/19/24', '3/20/24', '3/21/24', '3/22/24', '3/23/24', '3/24/24', '3/25/24', '3/26/24', '3/27/24', '3/28/24', '3/29/24', '3/30/24', '4/1/24', '4/1/24', '4/2/24', '4/3/24', '4/4/24', '4/5/24', '4/6/24', '4/7/24', '4/8/24', '4/9/24', '4/10/24', '4/11/24', '4/12/24', '4/13/24', '4/14/24', '4/15/24', '4/16/24', '4/17/24', '4/18/24', '4/19/24', '4/20/24', '4/21/24', '4/22/24', '4/23/24', '4/24/24', '4/25/24', '4/26/24', '4/27/24', '4/28/24', '4/29/24', '4/30/24'];
    const d = new Date();
    // React.useEffect(() => {
    //     for (let i = 0; i < 60; i++) {
    //         let day = d.getDay() + i;
    //         let month = d.getMonth() + 1;
    //         let dateString = '';
    //         if(day >= 31){
    //             day = day - 31;
    //             if(day === 0){
    //                 day = day + 1;
    //             }
    //             month = month + 1;
    //             dateString = `${month}/${day}`  
    //         }
    //         else if(day < 31){
    //             dateString = `${month}/${day}`
    //         }
    //         dates.push(dateString);
    //     }
    // }, [dates]);

    const options = [
        { value: 'Bars and Nightlife', label: 'Bars and Nightlife' },
        { value: 'Local Restaurants', label: 'Local Restaurants' },
        { value: 'Transportation Services', label: 'Transportation Services' },
        { value: 'Local Attractions', label: 'Local Attractions' },
        { value: 'Cultural Experiences', label: 'Cultural Experiences' },
        { value: 'Shopping Districts', label: 'Shopping Districts' },
        { value: 'Day Tours', label: 'Day Tours' },
        { value: 'Spa and Wellness Centers', label: 'Spa and Wellness Centers' },
        { value: 'Outdoor Activities', label: 'Outdoor Activities' },
        { value: 'Fitness Centers', label: 'Fitness Centers' },
        { value: 'Golf Courses', label: 'Golf Courses' },
        { value: 'Wine Tastings and Tours', label: 'Wine Tastings and Tours' },
        { value: 'Art Galleries', label: 'Art Galleries' },
        { value: 'Specialty Food Shops', label: 'Specialty Food Shops' },
        { value: 'Boat Rentals or Cruises', label: 'Boat Rentals or Cruises' },
        { value: 'Bicycle Rentals', label: 'Bicycle Rentals' },
        { value: 'Cooking Classes', label: 'Cooking Classes' },
        { value: 'Photography Services', label: 'Photography Services' },
        { value: 'Hair and Beauty Salons', label: 'Hair and Beauty Salons' },
        { value: 'Local Markets', label: 'Local Markets' },
        { value: 'Event Ticketing', label: 'Event Ticketing' },
        { value: 'Childcare Services', label: 'Childcare Services' },
        { value: 'Pet Services', label: 'Pet Services' },
        { value: 'Language Classes or Translators', label: 'Language Classes or Translators' },
        { value: 'Medical Clinics or Pharmacies', label: 'Medical Clinics or Pharmacies' }
    ];
    const subOptions = [
        { value: 'Clubs', label: 'Clubs' },
        { value: 'Dive Bars', label: 'Dive Bars' },
        { value: 'Piano Bars', label: 'Piano Bars' },
        { value: 'Karaoke Bars', label: 'Karaoke Bars' },
        { value: 'Sports Bars', label: 'Sports Bars' },
        { value: 'Wine Bar', label: 'Wine Bar' },
        { value: 'Up Scale Bar', label: 'Up Scale Bar' },
        { value: 'American', label: 'American' },
        { value: 'Argentinean', label: 'Argentinean' },
        { value: 'Australian', label: 'Australian' },
        { value: 'Belgian', label: 'Belgian' },
        { value: 'Brazilian', label: 'Brazilian' },
        { value: 'British', label: 'British' },
        { value: 'Cajun/Creole', label: 'Cajun/Creole' },
        { value: 'Caribbean', label: 'Caribbean' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'Cuban', label: 'Cuban' },
        { value: 'Ethiopian', label: 'Ethiopian' },
        { value: 'Filipino', label: 'Filipino' },
        { value: 'French', label: 'French' },
        { value: 'German', label: 'German' },
        { value: 'Greek', label: 'Greek' },
        { value: 'Hawaiian', label: 'Hawaiian' },
        { value: 'Hungarian', label: 'Hungarian' },
        { value: 'Indian', label: 'Indian' },
        { value: 'Irish', label: 'Irish' },
        { value: 'Israeli', label: 'Israeli' },
        { value: 'Italian', label: 'Italian' },
        { value: 'Jamaican', label: 'Jamaican' },
        { value: 'Japanese', label: 'Japanese' },
        { value: 'Korean', label: 'Korean' },
        { value: 'Lebanese', label: 'Lebanese' },
        { value: 'Malaysian', label: 'Malaysian' },
        { value: 'Mediterranean', label: 'Mediterranean' },
        { value: 'Mexican', label: 'Mexican' },
        { value: 'Moroccan', label: 'Moroccan' },
        { value: 'New Zealand', label: 'New Zealand' },
        { value: 'Nigerian', label: 'Nigerian' },
        { value: 'Persian', label: 'Persian' },
        { value: 'Peruvian', label: 'Peruvian' },
        { value: 'Portuguese', label: 'Portuguese' },
        { value: 'Russian', label: 'Russian' },
        { value: 'Scandinavian', label: 'Scandinavian' },
        { value: 'Spanish', label: 'Spanish' },
        { value: 'Swiss', label: 'Swiss' },
        { value: 'Thai', label: 'Thai' },
        { value: 'Michelin Restaurant', label: 'Michelin Restaurant' },
        { value: 'Turkish', label: 'Turkish' },
        { value: 'Vietnamese', label: 'Vietnamese' },
        { value: 'Fancy', label: 'Fancy' },
        { value: 'Airport Shuttles', label: 'Airport Shuttles' },
        { value: 'Taxi Services', label: 'Taxi Services' },
        { value: 'Ride-sharing Services', label: 'Ride-sharing Services' },
        { value: 'Car Rentals', label: 'Car Rentals' },
        { value: 'Public Transportation', label: 'Public Transportation' },
        { value: 'Private Charters', label: 'Private Charters' },
        { value: 'Museums', label: 'Museums' },
        { value: 'Historical Sites', label: 'Historical Sites' },
        { value: 'Amusement Parks', label: 'Amusement Parks' },
        { value: 'Zoos', label: 'Zoos' },
        { value: 'Gardens', label: 'Gardens' },
        { value: 'Landmarks', label: 'Landmarks' },
        { value: 'Traditional Performances', label: 'Traditional Performances' },
        { value: 'Art Exhibitions', label: 'Art Exhibitions' },
        { value: 'Food Tours', label: 'Food Tours' },
        { value: 'Language Classes', label: 'Language Classes' },
        { value: 'Cooking Classes', label: 'Cooking Classes' },
        { value: 'Cultural Festivals', label: 'Cultural Festivals' },
        { value: 'Boutiques', label: 'Boutiques' },
        { value: 'Malls', label: 'Malls' },
        { value: 'Flea Markets', label: 'Flea Markets' },
        { value: 'Antique Shops', label: 'Antique Shops' },
        { value: 'Local Crafts', label: 'Local Crafts' },
        { value: 'Souvenir Stores', label: 'Souvenir Stores' },
        { value: 'City Tours', label: 'City Tours' },
        { value: 'Nature Tours', label: 'Nature Tours' },
        { value: 'Food Tours', label: 'Food Tours' },
        { value: 'Adventure Tours', label: 'Adventure Tours' },
        { value: 'Historical Tours', label: 'Historical Tours' },
        { value: 'Group Tours', label: 'Group Tours' },
        { value: 'Massage Services', label: 'Massage Services' },
        { value: 'Facials', label: 'Facials' },
        { value: 'Body Treatments', label: 'Body Treatments' },
        { value: 'Yoga Studios', label: 'Yoga Studios' },
        { value: 'Fitness Classes', label: 'Fitness Classes' },
        { value: 'Alternative Therapies', label: 'Alternative Therapies' },
        { value: 'Hiking Trails', label: 'Hiking Trails' },
        { value: 'Camping Sites', label: 'Camping Sites' },
        { value: 'Water Sports', label: 'Water Sports' },
        { value: 'Cycling Paths', label: 'Cycling Paths' },
        { value: 'Rock Climbing', label: 'Rock Climbing' },
        { value: 'Fishing Spots', label: 'Fishing Spots' },
        { value: 'Gyms', label: 'Gyms' },
        { value: 'Yoga Studios', label: 'Yoga Studios' },
        { value: 'Pilates Studios', label: 'Pilates Studios' },
        { value: 'Personal Trainers', label: 'Personal Trainers' },
        { value: 'Group Classes', label: 'Group Classes' },
        { value: 'Sports Facilities', label: 'Sports Facilities' },
        { value: 'Public Courses', label: 'Public Courses' },
        { value: 'Private Clubs', label: 'Private Clubs' },
        { value: 'Driving Ranges', label: 'Driving Ranges' },
        { value: 'Golf Lessons', label: 'Golf Lessons' },
        { value: 'Pro Shops', label: 'Pro Shops' },
        { value: 'Mini-golf', label: 'Mini-golf' },
        { value: 'Vineyards', label: 'Vineyards' },
        { value: 'Wineries', label: 'Wineries' },
        { value: 'Wine Bars', label: 'Wine Bars' },
        { value: 'Wine Festivals', label: 'Wine Festivals' },
        { value: 'Wine Courses', label: 'Wine Courses' },
        { value: 'Wine-themed Tours', label: 'Wine-themed Tours' },
        { value: 'Contemporary Art', label: 'Contemporary Art' },
        { value: 'Traditional Art', label: 'Traditional Art' },
        { value: 'Photography Exhibits', label: 'Photography Exhibits' },
        { value: 'Sculpture Gardens', label: 'Sculpture Gardens' },
        { value: 'Art Classes', label: 'Art Classes' },
        { value: 'Artist Studios', label: 'Artist Studios' },
        { value: 'Bakeries', label: 'Bakeries' },
        { value: 'Delis', label: 'Delis' },
        { value: 'Cheese Shops', label: 'Cheese Shops' },
        { value: 'Chocolate Shops', label: 'Chocolate Shops' },
        { value: 'Farmers Markets', label: 'Farmers Markets' },
        { value: 'Gourmet Groceries', label: 'Gourmet Groceries' },
        { value: 'Sailboat Rentals', label: 'Sailboat Rentals' },
        { value: 'Kayak Rentals', label: 'Kayak Rentals' },
        { value: 'Yacht Charters', label: 'Yacht Charters' },
        { value: 'Sightseeing Cruises', label: 'Sightseeing Cruises' },
        { value: 'Fishing Charters', label: 'Fishing Charters' },
        { value: 'River Cruises', label: 'River Cruises' },
        { value: 'City Bike Rentals', label: 'City Bike Rentals'},
        { value: 'City Bike Rentals', label: 'City Bike Rentals' },
        { value: 'Mountain Bike Rentals', label: 'Mountain Bike Rentals' },
        { value: 'Tandem Bike Rentals', label: 'Tandem Bike Rentals' },
        { value: 'Electric Bike Rentals', label: 'Electric Bike Rentals' },
        { value: 'Bike Tours', label: 'Bike Tours' },
        { value: 'Bike Repair Shops', label: 'Bike Repair Shops' },
        { value: 'International Cuisines', label: 'International Cuisines' },
        { value: 'Baking Classes', label: 'Baking Classes' },
        { value: 'Vegetarian Cooking', label: 'Vegetarian Cooking' },
        { value: 'Molecular Gastronomy', label: 'Molecular Gastronomy' },
        { value: 'Wine Pairing', label: 'Wine Pairing' },
        { value: 'Kids Cooking Classes', label: 'Kids Cooking Classes' },
        { value: 'Portrait Studios', label: 'Portrait Studios' },
        { value: 'Wedding Photography', label: 'Wedding Photography' },
        { value: 'Event Photography', label: 'Event Photography' },
        { value: 'Landscape Photography', label: 'Landscape Photography' },
        { value: 'Photography Tours', label: 'Photography Tours' },
        { value: 'Photo Printing Services', label: 'Photo Printing Services' },
        { value: 'Hair Salons', label: 'Hair Salons' },
        { value: 'Barber Shops', label: 'Barber Shops' },
        { value: 'Nail Salons', label: 'Nail Salons' },
        { value: 'Makeup Services', label: 'Makeup Services' },
        { value: 'Waxing Services', label: 'Waxing Services' },
        { value: 'Tanning Salons', label: 'Tanning Salons' },
        { value: 'Farmers Markets', label: 'Farmers Markets' },
        { value: 'Flea Markets', label: 'Flea Markets' },
        { value: 'Night Markets', label: 'Night Markets' },
        { value: 'Artisan Markets', label: 'Artisan Markets' },
        { value: 'Street Food Markets', label: 'Street Food Markets' },
        { value: 'Antique Markets', label: 'Antique Markets' },
        { value: 'Concert Tickets', label: 'Concert Tickets' },
        { value: 'Theater Tickets', label: 'Theater Tickets' },
        { value: 'Sporting Events', label: 'Sporting Events' },
        { value: 'Festivals', label: 'Festivals' },
        { value: 'Comedy Shows', label: 'Comedy Shows' },
        { value: 'Exhibitions', label: 'Exhibitions' },
        { value: 'Daycare Centers', label: 'Daycare Centers' },
        { value: 'Nanny Services', label: 'Nanny Services' },
        { value: 'Babysitting Services', label: 'Babysitting Services' },
        { value: 'Kids Activities', label: 'Kids Activities' },
        { value: 'Tutoring Services', label: 'Tutoring Services' },
        { value: 'Summer Camps', label: 'Summer Camps' },
        { value: 'Veterinary Clinics', label: 'Veterinary Clinics' },
        { value: 'Pet Grooming', label: 'Pet Grooming' },
        { value: 'Pet Boarding', label: 'Pet Boarding' },
        { value: 'Pet Supplies', label: 'Pet Supplies' },
        { value: 'Dog Walking', label: 'Dog Walking' },
        { value: 'Pet Training', label: 'Pet Training' },
        { value: 'English Classes', label: 'English Classes' },
        { value: 'Spanish Classes', label: 'Spanish Classes' },
        { value: 'French Classes', label: 'French Classes' },
        { value: 'Mandarin Classes', label: 'Mandarin Classes' },
        { value: 'Sign Language Classes', label: 'Sign Language Classes' },
        { value: 'Translation Services', label: 'Translation Services' },
        { value: 'General Practitioners', label: 'General Practitioners' },
        { value: 'Dentists', label: 'Dentists' },
        { value: 'Optometrists', label: 'Optometrists' },
        { value: 'Pharmacies', label: 'Pharmacies' },
        { value: 'Urgent Care Clinics', label: 'Urgent Care Clinics' },
        { value: 'Specialty Clinics', label: 'Specialty Clinics' }
    ];
    const promoOptions =[
        { value: '10PERCENTOFF', label: '10% Off Your Entire Purchase (10PERCENTOFF)' },
        { value: '20PERCENTOFF', label: '20% Off Your Entire Purchase (20PERCENTOFF)' },
        { value: '30PERCENTOFF', label: '40% Off Your Entire Purchase (30PERCENTOFF)' },
        { value: '50PERCENTOFF', label: '50% Off Your Entire Purchase (40PERCENTOFF)' },
        { value: 'BOGO', label: 'Buy One, Get One Free (BOGO)' },
        { value: '10OFF50', label: '$10 Off a Purchase of $50 or More (10OFF50)' },
        { value: '20OFF50', label: '$20 Off a Purchase of $100 or More (20OFF100)' },
        { value: '30OFF50', label: '$30 Off a Purchase of $150 or More (30OFF150)' },
        { value: '40OFF50', label: '$40 Off a Purchase of $200 or More (40OFF200)' },
        { value: '50OFF50', label: '$50 Off a Purchase of $250 or More (50OFF250)' },
        { value: 'FREEGIFT', label: 'Free Gift with Purchase (FREEGIFT)' },
        { value: 'EARLYBIRD', label: 'Early Bird Discount (EARLYBIRD)' },
        { value: 'LASTMINUTE', label: 'Last-Minute Deal (LASTMINUTE)' },
        { value: 'SEASONAL', label: 'Seasonal Offer (SEASONAL)' },
        { value: 'NEWCUSTOMER', label: 'First-Time Customer Discount (NEWCUSTOMER)' },
        { value: 'DISCOUNTGROUP', label: 'Special Discount for Students, Military, or Seniors (DISCOUNTGROUP)' },
        { value: 'CASHBACK', label: 'Cashback Offer (CASHBACK)' },
        { value: 'MINPURCHASE', label: 'Minimum Purchase Discount (MINPURCHASE)' },
        { value: 'FLASHSALE', label: 'Flash Sale (FLASHSALE)' },
        { value: 'SUBSCRIPTION', label: 'Subscription Discount (SUBSCRIPTION)' },
        { value: 'EVENTOFFER', label: 'Event or Launch Offer (EVENTOFFER)' },
        { value: '2FOR1', label: '2 for 1 Special (2FOR1)' },
        { value: '3FOR1', label: '3 for 1 Special (3FOR1)' }
    ];

    const validationSchema = Yup.object().shape({
        business_name: Yup.string().required('Business name is required'),
        business_rating: Yup.number().required('Business rating is required'),
        business_address: Yup.string().required('Business address is required'),
        business_description: Yup.string()
        .min(50, 'Description must be at least 50 characters long')
        .max(500, 'Description must be less than 300 characters long')
        .required('Business description is required'),
    });

    const handleFormChange = (values) => {
        console.log('Form values:', values);
        setFormData(values); // Update formData state with form values
    };

    const handleSubmit = (values) => {
        setLoading(true);
        values.business_tags = values.business_tags + ', ' + values.sub_business_tags + ', ' + values.sub_business_tags2;
        console.log('Form values:', values);
        axios({
            method: 'POST',
            url: 'https://rr3l1d2s-8000.use.devtunnels.ms/api/addBusiness/',
            data: values,
            headers: {
                'content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        }) // Adjust the endpoint URL as per your API
        .then(response => {
            console.log('Business added successfully:', response.data);
            setLoading(false);
            setSuccess(true);
            values.business_tags = '';
            // Handle success, e.g., show a success message or redirect
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
        <AdminPortalNav/>
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
                            validationSchema={validationSchema}
                            >
                            {({ values }) => (
                            <Form className="mt-8 space-y-6" encType='multipart/form-data' onChange={() => handleFormChange(values)}>
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
                                    <div className='flex-1'>
                                        <Tooltip title={<h1 style={{fontSize: '1rem'}}>Enter three tags that fit your business, please choose one for the first one that generally describes your business, then for the Sub tags please choose two more specific tags from the dropdowns</h1>} placement="top-start" arrow>
                                            <label htmlFor="business_tags" className="flex flex-row items-center">Business Tag <FaInfoCircle className='mx-2' /></label>
                                            <Field as="select" name="business_tags" id="business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                                <option value="">Select...</option>
                                                {options.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                                ))}
                                            </Field>
                                            <label htmlFor="business_tags" className="flex flex-row items-center">Sub Business Tags</label>
                                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                                <option value="">Select...</option>
                                                {subOptions.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                                ))}
                                            </Field>
                                            <Field as="select" name="sub_business_tags2" id="sub_business_tags2" className="appearance-none rounded-none mt-2 relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                                <option value="">Select...</option>
                                                {subOptions.map(option => (
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
                                            <label htmlFor="business_description" className="flex flex-row items-center">Business Description<FaInfoCircle className='mx-2' />
                                            </label>
                                        </Tooltip>
                                        <p>Characters left: {500 - count}</p>
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
                                        Add Business
                                    </button>
                                </div>
                            </Form>
                            )}
                        </Formik>
                    </div>
                    
                </div>
            </div>
            <div className='flex flex-col justify-center max-w-full'>
                <h2 className="mt-6 text-center pr-36 text-3xl font-extrabold text-gray-900">Page Preview</h2>
                <PreviewPage values={formData}/>
            </div>
            
        </div>
        : null}
        
        </>
    );
};

export default AddBusinessPage;

