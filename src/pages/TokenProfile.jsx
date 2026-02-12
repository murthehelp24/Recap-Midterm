import React, { useEffect, useState } from 'react'
import useUserStore from '../stores/userStore'
import axios from 'axios'
function TokenProfile() {

  const [user, setUser] = useState(null)
  const token = useUserStore((state) => state.token)

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const res = await axios.get("https://dummyjson.com/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      // const { image, lastName, firstName, username, email, } = res.data
      // setUser({ image, lastName, firstName, username, email, })
      console.log("res", res.data)
    } catch (error) {
      console.log(error)
    }
  }


  if (!user) {
    return <p className="text-2xl text-red-600">no user in store</p>
  }

  // const user = {
  //     image: "https://dummyjson.com/icon/emilys/128",
  //     firstName: "Emilys",
  //     lastName: "Johnson",
  //     username: "emily",
  //     email: "emily.johnson@x.dummyjson.com"
  // }


  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <div className='flex flex-col w-full max-w-md p-6 bg-gray-300 rounded-xl shadow-2xl border border-gray-400'>

        {/* Profile Image */}
        <img
          src={user.image}
          alt="profile"
          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200"
        />

        {/* Name */}
        <h2 className="mt-4 text-2xl font-bold">
          {user.firstName} {user.lastName}
        </h2>

        {/* Username */}
        <p className="text-gray-500">@{user.username}</p>
        {/* Info Section */}
        <div className="mt-6 space-y-3 text-left">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">First Name</span>
            <span>{user.firstName}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Last Name</span>
            <span>{user.lastName}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Email</span>
            <span className="text-sm">{user.email}</span>
          </div>
        </div>

        {/* Logout Button */}
        <button

          className='my-4 p-1 text-white bg-gray-600 rounded-2xl hover:bg-gray-700'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default TokenProfile



// 