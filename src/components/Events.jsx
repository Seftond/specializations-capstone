import React from 'react'
import DefaultNav from './DefaultNav'
import Event from './Event';
import axios from 'axios';
function Events() {
  axios.get('http://localhost:3000/events')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
  return (
    <div>
      <DefaultNav/>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <img src='http://www.irishtimes.com/blogs/ontherecord/files/262087.jpg' alt='band logo'/>
      <Event/>
      <Event/>
    </div>
  </div>
  )
}

export default Events