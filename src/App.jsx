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
import Login from './Pages/Login'


const router = createBrowserRouter([

  {
    path: "/",
    element: <Login />   // 👈 NO navbar/sidebar here
  },

  {
    path: "/",
    element: <Layout/>,
    children: [
      // {
      //     path : '/', element:<Login/>
      //   },

      {
          path : 'dashboard', element:<Dashboard/>
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