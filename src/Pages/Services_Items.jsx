import React from 'react'
import Service_card from '../Components/Services & Items/Service_card'
import Service from '../Components/Services & Items/Service'
import Item from '../Components/Services & Items/Item'
import { Outlet } from 'react-router-dom'

const Services_Items = () => {
  return (
    <div>
      <div>
          <Service_card/>
      </div>
      
      <Outlet/>
    </div>
  )
}

export default Services_Items