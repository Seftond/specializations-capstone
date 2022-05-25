import React, { useEffect } from 'react';
import {  useState } from 'react';
import DefaultNav from './DefaultNav';
import Event from './Event'
import axios from 'axios';
import Footer from './Footer';
import { IconContext } from 'react-icons';
import { FaCrown } from 'react-icons/fa';


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
    <div className='page'>
      <DefaultNav/>
        <IconContext.Provider value={{size: 200}}>
        {tour.loading && !tour.eventList ? <FaCrown className="flipper"/> : <FaCrown/>}
        </IconContext.Provider>
      <div className='events'>
        {tour.loading && !tour.eventList ? "" :
          (tour.eventList.map(element => (
            (<Event key={element.event_id} eventDate = {element.event_date} address = {element.address} eventName = {element.event_name} eventUrl = {element.ticket_url} numGoing = {element.number_going}/>))))}
    </div>
    <Footer/> 
  </div>
  )
}

export default Events