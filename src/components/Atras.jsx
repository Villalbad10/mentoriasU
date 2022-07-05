import React from 'react'
import { MdArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ContAtras } from '../styles/style';

const Atras = () => {
   const navegate = useNavigate();
   return (
      <ContAtras onClick={() => navegate(-1)}>
         <MdArrowBackIos />
      </ContAtras>
   )
}

export default Atras