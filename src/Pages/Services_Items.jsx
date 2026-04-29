import React from 'react'
import Service_card from '../Components/Services & Items/Service_card'
import Service from '../Components/Services & Items/Service'
import Item from '../Components/Services & Items/Item'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const Services_Items = () => {

  const [fetchItems, setFetchItems] = useState(null);
  const [fetchServices, setFetchServices] = useState(null);

  return (
    <div>
      <div>
          <Service_card fetchItems={fetchItems} fetchServices={fetchServices}/>
      </div>
      
      <Outlet context={{ setFetchItems, setFetchServices}}/>
    </div>
  )
}

export default Services_Items