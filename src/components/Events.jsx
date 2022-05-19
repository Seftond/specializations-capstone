import React, { useEffect } from 'react';
import {  useState } from 'react';
import DefaultNav from './DefaultNav';
import Event from './Event'
import axios from 'axios';

function Events() {
  const [tour, setTour] = useState({ loading: true, eventList: null });

  useEffect(() => {
    if(tour.eventList === null){
      axios.get('http://localhost:3000/events')
      .then(res => setTour({loading: false, eventList: res.data}))
      .catch(err => console.log(err))
    }
  },[tour])

  return (
    <div>
      <DefaultNav/>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <img src='http://www.irishtimes.com/blogs/ontherecord/files/262087.jpg' alt='band logo'/>
      { tour.loading && !tour.eventList ? (<div>loading...</div>) : 
        (tour.eventList.map(element => (
          (<Event key={element.event_id} eventDate = {element.event_date} address = {element.address} eventName = {element.event_name} eventUrl = {element.ticket_url} numGoing = {element.number_going}/>))))
      }
    </div>
  </div>
  )
}

export default Events