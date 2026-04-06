import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Overview from './Pages/Overview'
import Customer from './Pages/Customer'


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
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App