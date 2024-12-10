// import React from 'react'

import { RouterProvider, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Routes } from "./routes/Routes"

const App = () => {



  return (
    <>
      <RouterProvider router={Routes} />
    </>
  )
}

export default App