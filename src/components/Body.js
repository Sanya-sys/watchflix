import React from 'react'
import Signin from './Signin'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Signin/>
        },
        {
            path: '/browse',
            element: <Browse/>
        }
    ])


  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body