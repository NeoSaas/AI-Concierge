import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import Modal from 'react-modal';
import Tooltip from '@mui/material/Tooltip';
import { FaInfoCircle } from "react-icons/fa";
import PreviewPage from './PreviewPage';
import 'react-loader-spinner';
import { Circles } from 'react-loader-spinner';
import AdminPortalNav from './AdminPortalNav';
import * as Yup from 'yup';
import { typeOptions, subTypeOptions, dietaryOptions, 
    groupSizeOptions, promoOptions, specialOptions, 
    awardOptions, budgetOptions, atmosphereOptions, 
    restaurantTypeOptions} from './arrays/Arrays';
import { DynamicFormDropdowns, DynamicFormDropdowns2, DynamicFormDropdowns3} from './DynamicFormDropdowns';
import AddBusiness from './pages/AddBusiness';
import EditBusiness from './pages/EditBusiness';

const AdminPortal = ({ logout }) => {
    const [editPage, setEditPage] = React.useState(false);
    const [response, setResponse] = React.useState({});
    const [disabled, setDisabled] = React.useState(false);
    const [addDisabled, setAddDisabled] = React.useState(false);

    React.useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/getUserBusinessData/',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            withCredentials: true,
        }) 
        .then(response => {
            // //console.log('User business data:', response.data);
            if(response.data.author == null) {
                setEditPage(false);
                setDisabled(true);
            }
            else {
                setEditPage(true);
                setResponse(response);
                setAddDisabled(true);
            }
            
        })
        .catch(error => {
            console.error('Error getting user business data:', error);
        });
    }, []);

    //console.log('Response:', response);

    return (
        <>
            <AdminPortalNav logout={logout} setEditPage={setEditPage} editPage={editPage} disabled={disabled} addDisabled={addDisabled}/>
            {!editPage ?  
                <AddBusiness logout={logout}/>
            : 
                <EditBusiness logout={logout} response={response}/>
            }
        </>
    );
};

export default AdminPortal;

