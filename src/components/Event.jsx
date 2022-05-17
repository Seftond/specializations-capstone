import axios from 'axios';
import React, { useState } from 'react';

function Event({eventDate, address, eventName, eventUrl, numGoing}) {
  const [userAttending, setUserAttending] = useState({userStatus:"Not Going", totalAttending: numGoing});
  function switchGoing(){
    if(userAttending.userStatus === "Not Going"){
      setUserAttending({userStatus: "Going", totalAttending: userAttending.totalAttending + 1})
      axios.put(`http://localhost:3000/events/${eventName}`, { type: "add"})
    } else{
      setUserAttending({userStatus: "Not Going", totalAttending: userAttending.totalAttending - 1})
      axios.put(`http://localhost:3000/events/${eventName}`, { type: "subtract"})
    }
  }
  return (
      <div>
        <h1>{eventName}</h1>
        <h2>{eventDate}</h2>
        <p>{address}</p>
        <a href={eventUrl}>Event Url</a>
        <button onClick = {switchGoing}>{userAttending.userStatus} : {userAttending.totalAttending}</button>
      </div>
  )
}

export default Event