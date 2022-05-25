import React, { useState } from 'react'
import DefaultNav from './DefaultNav'
import validator from 'validator'
import axios from 'axios'
import Footer from './Footer'

function Subscribe() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  function handleInput(e){
    e.preventDefault()
    setEmail(e.target.value)
    if(validator.isEmail(email)){
      setMessage("")
    } else {
      setMessage("Please provide a valid email address")
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    if(message === ""){
      axios.post("http://localhost:3000/email", {email: email})
      .then(res => setMessage('Thank you for subscribing!'))
      setEmail("")
    }
  }

  return (
    <div className='page'>
      <DefaultNav/>
      <div className='subscribe'>
        <h1>Subscribe</h1>
        <p>Sign up to recieve updates about the band.</p>
        <section className='subscribeInput'>
          <input type="text" name='email' placeholder='Enter your email' onChange={handleInput}/>
          <button type='submit' onClick={handleSubmit}>Subscribe</button>
        </section>
        <p className='errorMessage'>{message}</p>
      </div>
      <Footer/>
    </div>
  )
}

export default Subscribe