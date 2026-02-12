import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function Register() {
  const [formData , setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phon: "",
  })

  const navigate = useNavigate()

  const hdlChange =(e)=> {
    const {name, value } = e.target;
    setFormData((prev)=> ({ ...prev, [name]: value}))
    console.log(name, value)
  }

  const hdlSubmit = async (e)=> {
    e.preventDefault()
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData,
      );
      console.log("Register successfully", res.data)
      toast.success('ลงทะเบียนสำเร็จ')
      navigate('/post')
    } catch (error) {
      console.log("เกิดข้อผิดพลาด")
      toast.error("ลงทะเบียนผิดพลาด")
    }
      
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <form onSubmit={hdlSubmit} className='flex flex-col w-full max-w-md p-6 bg-gray-300 rounded-xl shadow-2xl border border-gray-400'>
        <h2 className='text-center text-2xl text-gray-800'>Create Account</h2>
          <label></label>username :
          <input name='username' type="text" onChange={hdlChange} className='border border-gray-500 my-1 pl-2 rounded-lg' />
          <label></label>password :
          <input name='password' type="password" onChange={hdlChange} className='border border-gray-500 my-1 pl-2 rounded-lg' />
          <label></label>email :
          <input name='email' type="email" onChange={hdlChange} className='border border-gray-500 my-1 pl-2 rounded-lg' />
          <label></label>phon :
          <input name='phon' type="text" onChange={hdlChange} className='border border-gray-500 my-1 pl-2 rounded-lg' />
          <button className='my-4 p-1 text-white bg-gray-600 rounded-2xl hover:bg-gray-700'>Register</button>
      </form>
    </div>
  )
}

export default Register