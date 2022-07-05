import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'


const DashboardRoutes = () => {
   return (
      <>
         <Routes>
            <Route path='/home' element={<Home />} />
         </Routes>
      </>
   )
}

export default DashboardRoutes