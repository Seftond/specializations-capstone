import React from 'react'
import DefaultNav from './DefaultNav'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


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
  
  const onSubmit = values => {
    alert(`Username: ${values.username} Email: ${values.email} Message: ${values.message}`)
  }
  return (
    <div>
    <DefaultNav/>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div>
          <label htmlFor='username'>Name </label>
          <Field type='text' id="username" name="username" placeholder='Name'/>
          <ErrorMessage name='username'/>
        </div>

        <div>
          <label htmlFor='email'>Email </label>
          <Field type='text' id="email" name="email" placeholder='Email'/>
          <ErrorMessage name='email'/>
        </div>

        <div>
          <label htmlFor='message'>Message </label>
          <Field as='textarea' type='text' id="message" name="message" placeholder='Message' rows='20' cols='50'/>
          <ErrorMessage name='message'/>
        </div>
      <button type='submit'>Submit</button>
      </Form>
    </Formik>

  </div>
  )
}

export default Contact