import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {
  return (
    <div className='bg-gray-400 flex justify-center align-center py-4'>
      <div className='flex gap-5 font-bold text-gray-200 '>
        <NavLink to="/" className='w-20 text-center hover:text-gray-900 bg-gray-500 p-2 rounded-2xl duration-150 hover:-translate-y-1.5' >Home</NavLink >
        <NavLink to="register" className='w-20 text-center hover:text-gray-900 bg-gray-500 p-2 rounded-2xl duration-150 hover:-translate-y-1.5'  >Register</NavLink >
        <NavLink to="post" className='w-20 text-center hover:text-gray-900 bg-gray-500 p-2 rounded-2xl duration-150 hover:-translate-y-1.5'  >Post</NavLink >
      </div>
    </div>
  )
}

export default NavBar