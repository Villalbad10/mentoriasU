import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteMonitor, deleteMonitorias, listarMonitor, ListarMonitorias } from '../redux/actions/actionData';
import { ContHome, Monitor } from '../styles/style';
import { AiFillDelete } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';


const Home = () => {
   const dispatch = useDispatch();

   const [monitor, setMonitor] = useState([]);
   const [monitorias, setMonitorias] = useState([]);

   useEffect(() => {
      listarMonitor().then(res => setMonitor(res));
      ListarMonitorias().then(res => setMonitorias(res));
   }, [monitor, monitorias])

   const handleDeleteMonitor = (cc) => {
      toast.error("Monitor eliminado")
      dispatch(deleteMonitor(cc))
   }

   const handleDeleteMonitorias = (materia) => {
      toast.error("Monitoria eliminada")
      dispatch(deleteMonitorias(materia))
   }

   return (
      <>
         <h1 className='text-center'>Monitorias de la U</h1>
         <ToastContainer />
         <ContHome className='container'>
            <div>
               <h3>Monitores</h3>

               {
                  monitor.map((res, index) =>
                     <Monitor key={index}>
                        <h5 className='text-center'>  {res.name}</h5>
                        <span><strong>Email:</strong> {res.email}</span><br />
                        <span><strong>Programa:</strong>  {res.progra}</span><br />
                        <span><strong>Semester:</strong>  {res.seme}</span><br />
                        <span><strong>CC:</strong>  {res.cc}</span><br />
                        <Button type="button" variant="outline-danger" onClick={() => handleDeleteMonitor(res.cc)}> <AiFillDelete /> </Button>
                     </Monitor>
                  )
               }
            </div>

            <div>
               <h3>Monitorias</h3>

               {
                  monitorias.map((res, index) =>
                     <Monitor key={index}>
                        <h5 className='text-center'>{res.materia}</h5>
                        <span><strong>Monitor:</strong> {res.monitor}</span><br />
                        <span><strong>Fecha:</strong>  {res.fecha}</span><br />
                        <span><strong>Salon:</strong>  {res.salon}</span><br />
                        <Button type="button" variant="outline-danger" onClick={() => handleDeleteMonitorias(res.materia)}> <AiFillDelete /> </Button>
                     </Monitor>
                  )
               }
            </div>
         </ContHome>
      </>
   )
}

export default Home