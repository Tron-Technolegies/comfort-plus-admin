import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Customer from './Pages/Customer'
import Ordertracking from './Pages/Ordertracking'
import Staff_Driver from './Pages/Staff_Driver'
import Popular_Times from './Pages/Popular_Times'
import Services_Items from './Pages/Services_Items'
import Dashboard from './Pages/Dashboard'
import Service from './Components/Services & Items/Service'
import Item from './Components/Services & Items/Item'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
          index : true, element:<Dashboard/>
        },

      {
          path : 'customer', element:<Customer/>
        },

      {
          path : 'Order', element:<Ordertracking/>
        },

      {
          path : 'Staff', element:<Staff_Driver/>
        },

      {
          path : 'times', element:<Popular_Times/>
        },

      {
          path : 'services',
          element:<Services_Items/>,
          children: [
            {
              index: true, element: <Service/>
            },

            {
              path: 'item', element: <Item/>
            },
          ]
        },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App