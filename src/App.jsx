import React from 'react'
import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import LandingPage from './pages/landingpage'
import Product from './pages/product'
import Innovator from './pages/innovator'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          index: true, element: <LandingPage/>
        },
      ]
    },

    {
      path: "/product",
      element: <Product/>
    },

    {
      path: "/innovator",
      element: <Innovator/>
    },

    {
      path: "/contact",
      element: <Contact/>
    }
  ])

  
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
