import React, { useEffect, useState } from 'react';
import { listarData } from "../redux/actions/actionData"


const Home = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      listarData().then(res => setData(res));
   }, [])

   return (
      <>
         <h2>home</h2>
      </>
   )
}

export default Home