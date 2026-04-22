import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Overview from './Pages/Overview'
import Customer from './Pages/Customer'
import Ordertracking from './Pages/Ordertracking'
import Staff_Driver from './Pages/Staff_Driver'
import Popular_Times from './Pages/Popular_Times'
import Services_Items from './Pages/Services_Items'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
          index : true, element:<Overview/>
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
          path : 'services', element:<Services_Items/>
        },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App