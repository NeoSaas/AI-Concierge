import React from 'react'

function Header() {
  return (
    <div className="bg-cover bg-center w-full h-screen flex justify-center items-center flex-col">
        <img className="h-auto w-full absolute" src="winterpark.jpg" alt="Logo" />
        <div className=' z-40 text-center'>
            <h1 className="font-cursive text-6xl text-black">Welcome to My Landing Page</h1>
            <p className="font-sans text-3xl text-black">Find local businesses nearby</p>
        </div>
    </div>
  )
}

export default Header