import { Formik, Form, Field } from 'formik';
import React from 'react'
import facebook from "../assets/img/facebook.png";
import google from "../assets/img/google.png";
import { ContLogin, RedesLogin } from '../styles/style';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { actionLoginAsync, actionLoginFacebook, actionLoginGoogle } from '../redux/actions/actionLogin';


const SignupSchema = Yup.object().shape({

   email: Yup.string().email('debe ser del tipo ana@ana.com').required("Este email se requiere"),
   pass: Yup.string().min(6, 'Password muy corto').max(20, 'Password muy Largo').required("este campo es obligatorio")

})



const Login = () => {

   const dispatch = useDispatch();

   return (
      <ContLogin>
         <img style={{ 'width': '20rem' }} src='https://upload.wikimedia.org/wikipedia/commons/b/b8/Logo_uptc_oficial.png' alt="" />
         <h5>SignIn</h5>

         <Formik
            initialValues={{
               email: '',
               pass: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
               dispatch(actionLoginAsync(values.email, values.pass))
            }}
         >

            {({ errors, touched }) => (

               <Form>
                  <Field type="email" name="email" placeholder="ejemplo@ejemplo.com" /> <br />
                  {errors.email && touched.email && <div>{errors.email}</div>}
                  <Field type="password" name="pass" placeholder="Password" /><br />
                  {errors.pass && touched.pass && <div>{errors.pass}</div>}
                  <button className='shadow' type="submit">Sign In</button>
               </Form>
            )}

         </Formik>


         <RedesLogin>
            <span>Sign In with</span>
            <section>
               <img onClick={() => dispatch(actionLoginGoogle())} src={google} alt="" />|
               <img onClick={() => dispatch(actionLoginFacebook())} src={facebook} alt="" />
            </section>
         </RedesLogin>
      </ContLogin>
   )
}

export default Login