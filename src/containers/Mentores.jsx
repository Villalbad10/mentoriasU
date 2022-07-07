import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { agregarMonAsync } from '../redux/actions/actionAddMo';
import { ToastContainer, toast } from 'react-toastify';

const Mentores = () => {
   const dispatch = useDispatch();
   const [pro, setPro] = useState({
      "name": '',
      "progra": '',
      "seme": '',
      "cc": '',
      "email": ''
   })

   const handleChange = ({ target }) => setPro({
      ...pro,
      [target.name]: target.value
   })


   const handleSubmit = (e) => {
      e.preventDefault()
      toast.success("Monitor agregado con exito!");
      dispatch(agregarMonAsync(pro))
   }

   return (
      <div className='container'>
         <h1>Registrar Monitores</h1>
         <ToastContainer />
         <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Full Name</Form.Label>
               <Form.Control name="name" onChange={handleChange} type="text" placeholder="Enter Full name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Program Academy</Form.Label>
               <Form.Control name="progra" onChange={handleChange} type="text" placeholder="Enter Program Academy" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Semester</Form.Label>
               <Form.Control name="seme" onChange={handleChange} type="text" placeholder="Enter Semester" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>CC</Form.Label>
               <Form.Control name="cc" onChange={handleChange} type="text" placeholder="Enter CC" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email</Form.Label>
               <Form.Control name="email" onChange={handleChange} type="text" placeholder="Enter Email" />
            </Form.Group>

            <Button variant="success" type="submit">
               Submit
            </Button>
         </Form>
      </div >
   )
}

export default Mentores