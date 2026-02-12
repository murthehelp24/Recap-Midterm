import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { registerValidator } from '../validators/register.validator';


const inpStyle = 'border border-gray-500 my-1 pl-2 rounded-lg'

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phon: "",
  })

  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const hdlChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const hdlSubmit = async (e) => {
    e.preventDefault()
    setError({}) //setError อีกรอบเพื่อเคลียร์ state ใหม่ให้เป็น obj ว่าง
    const result = registerValidator.safeParse(formData)
    if(!result.success) {
      const { fieldErrors } = result.error.flatten()
      console.log(fieldErrors)
      setError(fieldErrors)
      return
    }

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

  console.log("error", error)
  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <form onSubmit={hdlSubmit} className='flex flex-col w-full max-w-md p-6 bg-gray-300 rounded-xl shadow-2xl border border-gray-400'>
        <h2 className='text-center text-2xl text-gray-800'>Create Account</h2>
        <label>username :</label>
        <input name='username' 
        type="text" placeholder='username' 
        value={formData.username} 
        onChange={hdlChange} 
        className={inpStyle} />
        {error?.username && <p className='text-red-500'>{error?.username[0]}</p>}

        <label>password :</label>
        <input name='password' 
        type="password" 
        placeholder='password' 
        value={formData.username} 
        onChange={hdlChange} 
        className={inpStyle} />
        {error?.password && <p className='text-red-500'>{error?.password[0]}</p>}

        <label>email :</label>
        <input name='email' 
        type="text" 
        placeholder='e-mail@gmail.com'
        value={formData.username} 
        onChange={hdlChange} 
        className={inpStyle} />
        {error?.email && <p className='text-red-500'>{error?.email[0]}</p>}

        <label>phone :</label>
        <input name='phone' 
        type="text" 
        placeholder='088-xxxxxxx' 
        value={formData.username} 
        onChange={hdlChange} 
        className={inpStyle} />
        {error?.phone && <p className='text-red-500'>{error?.phone[0]}</p>}

        <button className='my-4 p-1 text-white bg-gray-600 rounded-2xl hover:bg-gray-700'>Register</button>
      </form>
    </div>
  )
}

export default Register