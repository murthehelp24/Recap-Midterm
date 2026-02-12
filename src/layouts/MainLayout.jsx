import React from 'react'
import { NavLink, Outlet } from 'react-router'
import NavBar from '../components/NavBar'

function MainLayout() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout