import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPortalNav = ({ setEditPage, logout, editPage, disabled, addDisabled }) => {
  const nav = useNavigate();
  const handleLogout = () => {
    axios({
        method: 'post',
        url: 'https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/logout/',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    localStorage.removeItem('token');
    logout();
    nav("/login")
  }

  return (
    <div className='w-full h-auto bg-[#5C0601] text-white font-quicksand flex justify-between border-b border-black flex-row'>
        <p className='m-2 p-2 text-2xl' >AI-Concierge Admin Dashboard</p>
        <div className='flex flex-row justify-center items-center'>
            <button disabled={disabled} onClick={() => setEditPage(true)} className={ editPage ? 'm-2 p-2 text-2xl text-white hover:scale-105 underline duration-300 ease-in-out ' : 'm-2 p-2 text-2xl text-white hover:scale-105 hover:underline duration-300 ease-in-out disabled:hover:scale-100 disabled:hover:no-underline disabled:text-gray-600'}>Edit Business</button>
            <button disabled={addDisabled} onClick={() => setEditPage(false)} className={ editPage ? 'm-2 p-2 text-2xl text-white hover:scale-105 underline duration-300 ease-in-out disabled:hover:scale-100 disabled:hover:no-underline disabled:text-gray-600' : 'm-2 p-2 text-2xl text-white hover:scale-105 underline duration-300 ease-in-out '}>Add Business</button>
            <button onClick={() => handleLogout()} className='m-2 p-2 text-2xl text-white hover:scale-105 duration-300 hover:underline ease-in-out'>Logout</button>
        </div>
    </div>
  )
}

export default AdminPortalNav