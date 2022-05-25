import React from 'react'
import DefaultNav from './DefaultNav'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Footer from './Footer'


function Contact() {
  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    message: Yup.string().required('Required')  
  })
  
  const initialValues = {
    username: "",
    email: "",
    message: ""
  }
  
  const onSubmit = (values, {resetForm}) => {
    axios.post('http://localhost:3000/send', values)
    resetForm();
    alert("Your message has been sent")
  }

  return (
    <div className='page'>
    <DefaultNav/>
    <div className='contact'>
      <h1>Contact Us</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div>
            <label htmlFor='username'>Name: <br></br></label>
            <Field type='text' id="username" name="username" style = {{width: '30em'}}/>
            <ErrorMessage name='username' render={msg => <div className="errorMessage">{msg}</div>}/>
          </div>

          <div>
            <label htmlFor='email'>Email: <br></br> </label>
            <Field type='text' id="email" name="email" style = {{width: '30em'}}/>
            <ErrorMessage name='email' render={msg => <div className="errorMessage">{msg}</div>}/>
          </div>

          <div>
            <label htmlFor='message'>Message: <br></br></label>
            <Field as='textarea' type='text' id="message" name="message" style={{width: '30em', height: '20em', resize: 'none'}}/>
            <ErrorMessage name='message' render={msg => <div className="errorMessage">{msg}</div>}/>
          </div>
        <button type='submit' style={{width: '5em'}}>Send</button>
        </Form>
      </Formik>
    </div>
    <Footer/>
  </div>
  )
}

export default Contact