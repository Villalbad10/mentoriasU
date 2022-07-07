import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const NaBar = () => {
   return (
      <Navbar bg="dark" variant="dark">
         <Container>
            <Navbar.Brand>Mentorias de la U</Navbar.Brand>
            <Nav className="me-auto">
               <Link style={{ 'marginRight': '2rem' }} to={'/home'}>Home </Link>
               <Link style={{ 'marginRight': '2rem' }} to={'/mentores'}>Monitores</Link>
               <Link to={'/monitorias'}>Monitorias</Link>
            </Nav>
         </Container>
      </Navbar>
   )
}

export default NaBar