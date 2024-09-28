import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Component/Navbar'

const Layout = () => {
  return (
   <>
   <h1>layout</h1>
   <Outlet/>
   <Navbar/>
   </>
  )
}

export default Layout
