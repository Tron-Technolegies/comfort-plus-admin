import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import { Outlet } from 'react-router-dom'
import Searchbar from '../Components/Layout/Searchbar'


const Layout = () => {
  return (
    // <div>
    //     <Navbar/>
    //     <Searchbar/>
    //     <Outlet />
    // </div>
    <div className="flex">
      
      <Navbar />

      <div className="flex-1">
        <Searchbar />
        <Outlet />
      </div>

    </div>
  )
}

export default Layout