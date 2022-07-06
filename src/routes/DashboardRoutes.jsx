import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NaBar from '../components/NaBar'
import Home from '../containers/Home'
import Mentores from '../containers/Mentores'


const DashboardRoutes = () => {
   return (
      <>
         <NaBar />
         <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/mentores' element={<Mentores />} />
         </Routes>
      </>
   )
}

export default DashboardRoutes