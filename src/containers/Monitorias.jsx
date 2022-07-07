import { onLog } from 'firebase/app';
import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { agregarMonitoriasAsync } from '../redux/actions/actionAddMonitoria';
import { listarMonitor } from '../redux/actions/actionData';
import { ToastContainer, toast } from 'react-toastify';

const Monitorias = () => {
   const [mentor, setMentor] = useState([]);
   const dispatch = useDispatch();

   useEffect(() => {
      listarMonitor().then(res => setMentor(res))
   }, [])

   const [pro, setPro] = useState({
      "materia": '',
      "monitor": '',
      "fecha": '',
      "salon": '',
   })

   const handleChange = ({ target }) => setPro({
      ...pro,
      [target.name]: target.value
   })


   const handleSubmit = (e) => {
      e.preventDefault()
      toast.success("Monitoria agregada con exito");
      dispatch(agregarMonitoriasAsync(pro))
   }

   return (
      <div className='container'>
         <h1>Registrar Monitorias</h1>
         <ToastContainer />
         <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Materia</Form.Label>
               <Form.Control name="materia" onChange={handleChange} type="text" placeholder="Enter Materia" />
            </Form.Group>

            <Form.Label>Monitor</Form.Label>
            <Form.Select name='monitor' onChange={handleChange}>
               <option>Select Option</option>
               {
                  mentor.map((res, index) =>
                     <option key={index}>{res.name}</option>)
               }
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Fecha</Form.Label>
               <Form.Control name="fecha" onChange={handleChange} type="date" placeholder="Enter Fecha" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Salon</Form.Label>
               <Form.Control name="salon" onChange={handleChange} type="text" placeholder="Enter Salon" />
            </Form.Group>

            <Button variant="success" type="submit">
               Submit
            </Button>
         </Form>
      </div >
   )
}

export default Monitorias