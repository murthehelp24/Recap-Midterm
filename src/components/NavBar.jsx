import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {
  const btnStyle = 'w-20 text-center hover:text-gray-900 bg-gray-500 p-2 rounded-2xl duration-150 hover:-translate-y-1.5'
  return (
    <>
    <div className='bg-gray-400 flex justify-center align-center py-4'>
      <div className='flex gap-5 font-bold text-gray-200 '>
        <NavLink to="/" className={btnStyle} >Home</NavLink >
        <NavLink to="post" className={btnStyle}  >Post</NavLink > 
        <NavLink to="profile" className={btnStyle} >Profile</NavLink > 
        <NavLink to="register" className={btnStyle}  >Register</NavLink >
        <NavLink to="login" className={btnStyle} >Login</NavLink > 
        <NavLink to="token" className={`${btnStyle} w-32`}  >Token Profile</NavLink > 
      </div>
    </div>
    </>
  )
}

export default NavBar