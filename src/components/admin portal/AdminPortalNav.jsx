import React from 'react'
import axios from 'axios';

const AdminPortalNav = ({setEditPage}) => {
  const handleLogout = () => {
    localStorage.removeItem('session_key');
    window.location.reload();
    axios({
        method: 'post',
        url: 'https://rr3l1d2s-8000.use.devtunnels.ms/api/logout/',
        headers: {
            'Content-Type': 'application/json',
        },
    })
  }

  return (
    <div className='w-full h-auto bg-[#5C0601] text-white font-quicksand flex justify-between border-b border-black flex-row'>
        <p className='m-2 p-2 text-2xl' >AI-Concierge Admin Dashboard</p>
        <div className='flex flex-row justify-center items-center'>
            <button onClick={() => setEditPage(true)} className='m-2 p-2 text-2xl text-white hover:scale-105 duration-300 ease-in-out'>Edit Business</button>
            <button onClick={() => setEditPage(false)} className='m-2 p-2 text-2xl text-white hover:scale-105 duration-300 ease-in-out'>Add Business</button>
            <button onClick={() => handleLogout()} className='m-2 p-2 text-2xl text-white hover:scale-105 duration-300 ease-in-out'>Logout</button>
        </div>
    </div>
  )
}

export default AdminPortalNav