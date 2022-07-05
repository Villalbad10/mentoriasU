import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../containers/Login';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => {
   const [checkAut, setCheckAut] = useState(true);
   const [isLogget, setIsLogget] = useState(false);

   useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         if (user?.uid) {
            //console.log(user);
            setIsLogget(true)
         } else {
            setIsLogget(false)
         }
         setCheckAut(false)
      })
   }, [setIsLogget, setCheckAut])


   if (checkAut) {
      return (
         <h1 style={{ "color": "white" }}>Espere...</h1>
      )
   }

   return (
      <BrowserRouter>
         <Routes>

            <Route path='/login' element={
               <PublicRoutes isAuth={isLogget}>
                  <Login />
               </PublicRoutes>
            } />


            <Route path='/*' element={
               <PrivateRoutes isAuth={isLogget}>
                  <DashboardRoutes />
               </PrivateRoutes>
            } />

         </Routes>
      </BrowserRouter>
   );
}

export default AppRoutes