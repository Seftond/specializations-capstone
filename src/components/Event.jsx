import axios from 'axios';
import React, { useState } from 'react';
import Map from './Map';

function Event({eventDate, address, eventName, eventUrl, numGoing}) {
  const [mapsDisplay, setMapsDisplay] = useState({displayed: false, content: "Show Directions"})
  const [userAttending, setUserAttending] = useState({userStatus:"Not Going", totalAttending: numGoing});
  const [formStatus, setFormStatus] = useState(false)
  const [number, setNumber] = useState({value: '', error: ''});
  const [checkbox, setCheckbox] = useState(false);
  const [validInput, setValidInput] = useState('')

  function switchGoing(){
    if(userAttending.userStatus !== "Going"){
      setFormStatus(true)   
    } else {
      return
    }
  }

  function toggleMapDisplay(){
    if(mapsDisplay.displayed === false){
      setMapsDisplay({displayed: true, content: "Close Directions"})
    } else if (mapsDisplay.displayed === true){
      setMapsDisplay({displayed: false, content: 'Show Directions'})
    }
  }

  function handleNumberChange(e){
    e.preventDefault();
    if(e.target.value.length < 10 || e.target.value.length > 10){
      setNumber({value: e.target.value, error: 'The input provided must be 10 digits ex: 0123456789!'})
    } else if(isNaN(+e.target.value)){
      setNumber({value: e.target.value, error: 'The input provided must be a valid phone number!'})
    } else {
      setNumber({value: e.target.value, error: ''})
    }   
  }

  function handleCheckboxChange(){
    if(checkbox === true){
      setCheckbox(false)
    }else if(checkbox === false){
      setCheckbox(true)
    }
  }

  function handleSubmit(e){
    e.preventDefault();
    if(number.value === '' || number.error !== ''){
      setValidInput('Please provide the proper information for the name and number fields.')
      return;
    }
    let obj = {
      number: number.value,
      message: checkbox,
      event: eventName
    }
    axios.post(`http://localhost:3000/users`, obj)
    .then(res => {
      setNumber({value: '', error: ''} )
      setCheckbox(false)
      setUserAttending({userStatus: "Going", totalAttending: userAttending.totalAttending + 1})
      setFormStatus(false)
      alert('You will be notified when it gets closer to the event!')
    })
  }

  function handleCancel(e){
    e.preventDefault();
    setNumber({value: '', error: ''} )
    setCheckbox(false)
    setFormStatus(false)
  }

  return (
    <>
      <div>
        <h1>{eventName}</h1>
        <h2>{eventDate}</h2>
        <p>{address}</p>
        <a href={eventUrl}>Event Url</a>
        { formStatus ?
          (<form>
            <p>{number.error}</p>
            <input type='text' placeholder='phone number' onChange={handleNumberChange}/>
            <p>Would you like to be notified when the event is approaching?</p>
            <label htmlFor='yes'>Yes</label>
            <input type='checkbox' id='yes' onClick={handleCheckboxChange}/>
            <p>{validInput}</p>
            <button type='submit' onClick={handleSubmit}>Submit</button>
            <button onClick={handleCancel}>Cancel</button>
          </form>)
          :
          (
            <button onClick = {switchGoing}>{userAttending.userStatus}: {userAttending.totalAttending}</button>
          )

        }
        <button onClick={toggleMapDisplay}>{mapsDisplay.content}</button>
      </div>
        {/* {mapsDisplay.displayed ? <Map/> : ''} */}
    </>
  )
}

export default Event