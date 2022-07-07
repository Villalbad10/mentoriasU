import styled from "styled-components";


export const ContLogin = styled.div`
   color: white;
   display: block;
   margin: 10% auto;
   text-align: center;

   input{
      background-color: rgba(0,0,0,0.2);
      border-radius: 1.3rem;
      border: none;
      color: white;
      height: 2.5rem;
      margin: .5rem 0;
      padding-left: 1rem;
      width: 50%;
   }

   button{
      background-color: #2BE7E8;
      border:  none;
      border-radius: 1.3rem;
      color: white;
      margin-top: 1.5rem;
      height: 2.5rem;
      width: 50%;

      :hover{
         opacity: .5;
      }
   }
`

export const RedesLogin = styled.div`
   display: block;
   margin: 4rem auto;
   width: 7rem;

   section{
      margin-top: 1rem;
      display: flex;
      justify-content: space-evenly;

      img{
         cursor: pointer;
      }
   }
`

export const LoginSignUp = styled.span`
   color: #2BE7E8;
   cursor: pointer;
   font-weight: bold;
`

export const ContDatos = styled.div`
   color: white;
   display: block;
   margin: 10% auto;
   text-align: center;

   h6{
      font-size: 1.3rem;
   }

   input{
      border: none;
      background-color: rgba(0,0,0,0.2);
      border-radius: 1.3rem;
      color: white;
      margin-top: 4rem;
      padding-left: 1rem;
      height: 2.5rem;
   }

   span{
      color: grey;
   }

   button{
      background-color: #2BE7E8;
      border: none;
      border-radius: 1.3rem;
      color: white;
      margin-top: 7rem;
      height: 2.5rem;
      width: 50%;

      :hover{
         opacity: .6;
      }
   }
`

export const ContAtras = styled.div`
   color: #2BE7E8;
   cursor: pointer;
   margin-left: 2rem;
   margin-top: 1rem;
`

export const ContHome = styled.div`
   display: flex;
   margin-top: 4rem;

   div{
      h3{
         margin-bottom: 2rem;
         text-align: center;
      }
      width: 50%;
   }
`

export const Monitor = styled.section`
   background-color: white;
   border-radius: 1rem;
   box-shadow: 0px -1px 15px -3px rgba(0,0,0,0.1);
   padding: 1rem;
   margin: 1rem;
`