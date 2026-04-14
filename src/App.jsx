import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Overview from './Pages/Overview'
import Customer from './Pages/Customer'
import Ordertracking from './Pages/Ordertracking'


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
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App