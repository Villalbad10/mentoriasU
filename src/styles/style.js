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

export const ContGenero = styled.div`
   border:solid 1px #2E3562;
   border-radius: 1.5rem;
   cursor: pointer;
   display: block;
   margin: 2rem auto;
   width: 10rem;
   padding: 1rem;

   :hover{
      background-color: #2E3562;
   }
`

export const Ppago = styled.p`
   font-size: .7rem;
`

export const Precio = styled.div`
   align-items: center;
   border-radius: 1.3rem;
   border: 1px solid #2E3562;
   color: white;
   cursor: pointer;
   display: flex;
   justify-content: space-between;
   margin-left: 28%;
   margin-top: 3rem;
   padding-left: 1rem;
   padding-right: 1rem;
   width: 30rem;
   height: 2.5rem;
   :hover{
      background-color: #2BE7E8;
   }

   @media (max-width: 360px) {
      margin-left: 5%;
      width: 20rem;
   }


   div{
      display: flex;
      align-items: center;
   }
`

export const ImgName = styled.div`
   color: white;
   display: flex;

   img{
      border-radius: 50%;
      width: 3rem;
   }

   section{
      margin-left: 1rem;
   }
`

export const Noti = styled.span`
   color: #2BE7E8;
   cursor: pointer;
   
`

export const User = styled.div`
   align-items: center;
   display: flex;
   justify-content: space-between;
   margin: 2rem auto;
   width: 20rem;
`

export const Contopciones = styled.div`
   background-color:#2E3562 ;
   border-radius: 1rem;
   margin: .5rem auto;
   width: 20rem;

   button{
      background-color: #1F233E;
      border: 1px solid #2E3562;
      border-radius: 1rem;
      color: white;
      width: 50%;

      :hover{
         background-color: #2BE7E8;
      }
   }

`

export const ContData = styled.div`
   background-color: #2E3562;
   border-radius: 1rem;
   color: white;
   cursor: pointer;
   margin: 2rem auto;
   width: 22.4rem;

   div{
      display: flex;
      justify-content: space-between;
      padding: .5rem;
   }

   section{
      display: flex;
      padding: 0 .5rem 0 .5rem;
      justify-content: space-between;

      p{
         font-size: .6rem;
         width: 50%;
      }
      span{
         color: #2BE7E8;
      }
   }
`

