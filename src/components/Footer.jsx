import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import validator from 'validator'
import Socials from './Socials'

function Footer() {
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
    <div className='footer'>
      <div className='footerLeft'>
        <h3>Quick Links</h3>
        <Link to='/pages' className='footerLinks'>Privacy Policy</Link>
        <Link to='/pages' className='footerLinks'>Terms of Use</Link>
        <Link to='/pages' className='footerLinks'>Contact Us</Link>
      </div>
      <div className='footerCenter'>
        <h3>Connect With Us</h3>
        <Socials/>
        
      </div>
      <div className='footerRight'>
        <h3>Get Updates From Henry IX</h3>
        <p>Sign up to make sure you don't miss out on event updates from Henry IX.</p>
        <input type="text" name='email' placeholder='Enter your email' onChange={handleInput}/>
        <p className='errorMessage'>{message}</p>
        <button type='submit' onClick={handleSubmit}>Subscribe</button>
      </div>
    </div>
  )
}

export default Footer