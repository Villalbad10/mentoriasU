import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NaBar from '../components/NaBar'
import Home from '../containers/Home'
import Mentores from '../containers/Mentores'
import Monitorias from '../containers/Monitorias'


const DashboardRoutes = () => {
   return (
      <>
         <NaBar />
         <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/mentores' element={<Mentores />} />
            <Route path='/monitorias' element={<Monitorias />} />
         </Routes>
      </>
   )
}

export default DashboardRoutes