import axios from 'axios'
import React, { useState } from 'react'
import useUserStore from '../stores/userStore'
import { useNavigate } from 'react-router'

function Login() {

  const inpStyle = 'border border-gray-500 my-1 pl-2 rounded-lg'

  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  })

  const navigate = useNavigate()

  
  //เรียกใช้จากหน้า userStore.js , tokenprofile.jsx
  const setUser = useUserStore((state) => state.setUser)
  const setToken = useUserStore((state) => state.setToken)

  const hdlChange = (e) => {
    const { name, value } = e.target
    setFormLogin((prv) => ({ ...prv, [name]: value }))
  }

  const hdlSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post("https://dummyjson.com/auth/login", formLogin)
    console.log(res.data)
    
    const { image, lastName, firstName, username, email, accessToken} = res.data  //แล้วมาเรียกใช้ข้อมูลตรงนี้
    setUser({ image, lastName, firstName, username, email })
    setToken(accessToken)
    navigate('/profile')
  }

  console.log(formLogin)
  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <form onSubmit={hdlSubmit}
        className='flex flex-col w-full max-w-md p-6 bg-gray-300 rounded-xl shadow-2xl border border-gray-400'>
        <h2 className='text-center text-2xl text-gray-800'>Login</h2>
        <label>username :</label>
        <input name='username'
          type="text"
          placeholder='username'
          value={formLogin.username}
          onChange={hdlChange}
          className={inpStyle} />

        <label>password :</label>
        <input name='password'
          type="password"
          placeholder='password'
          alue={formLogin.password}
          onChange={hdlChange}
          className={inpStyle} />

        <button className='my-4 p-1 text-white bg-gray-600 rounded-2xl hover:bg-gray-700'>Login</button>
      </form>
    </div>
  )
}

export default Login