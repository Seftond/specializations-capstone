import axios from 'axios';
import React, { useState } from 'react';
import {FaCrown} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Directions from './Directions';



function Event({eventDate, address, eventName, eventUrl, numGoing}) {
  const [userAttending, setUserAttending] = useState({userStatus:"RSVP", totalAttending: numGoing});
  const [formStatus, setFormStatus] = useState(false)
  const [number, setNumber] = useState({value: '', error: ''});
  const [checkbox, setCheckbox] = useState(false);
  const [validInput, setValidInput] = useState('')
  const [mapsDisplay, setMapsDisplay] = useState({displayed: false, content: "Show Directions"})
  const [directionsStyle, setDirectionsStyle] = useState({});


  function switchGoing(){
    if(userAttending.userStatus !== "Going"){
      setFormStatus(true)   
    } else {
      return
    }
  }

  function toggleMapDisplay(){
    if(mapsDisplay.displayed === false){
      setMapsDisplay({displayed: true, content: "Hide Directions"})
      setDirectionsStyle({height: "300px", width: "100%"})
    } else if (mapsDisplay.displayed === true){
      setMapsDisplay({displayed: false, content: 'Show Directions'})
      setDirectionsStyle({})
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
      setValidInput('Please provide the proper information for the number field.')
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
      setUserAttending({userStatus: "Going", totalAttending: userAttending.totalAttending + 1})
      setFormStatus(false)
      if(checkbox === false){
        alert("We can't wait to see you!")
      }else {
        alert('You will be notified when it gets closer to the event!')
      }
      setCheckbox(false)
    }).catch(err => alert("Unable to perform request"))
  }

  function handleCancel(e){
    e.preventDefault();
    setNumber({value: '', error: ''} )
    setCheckbox(false)
    setFormStatus(false)
  }
  
  return (
    <div className='eventBox'>
      <div className='event'>
          <div className='eventTitle'>
            <div className='eventCount'>
              <IconContext.Provider value={{ size: 25 }}>
                <FaCrown/>{userAttending.totalAttending}
              </IconContext.Provider>
            </div>
            <h1>{eventDate} - {eventName}</h1>
            <p>{address}</p>
          </div>
          <div className='eventButtons'>

            { formStatus ?
              (<form>
                <p className='errorMessage'>{number.error}</p>
                <input type='text' placeholder='Enter your phone number' onChange={handleNumberChange}/>
                <p>Would you like to be notified when the event is approaching?</p>
                <label htmlFor='yes'>Yes</label>
                <input type='checkbox' id='yes' onClick={handleCheckboxChange}/>
                <p className='errorMessage'>{validInput}</p>
                <button type='submit' onClick={handleSubmit}>Submit</button>
                <button onClick={handleCancel}>Cancel</button>
              </form>)
              :
              (
                <>
                <button onClick = {switchGoing}>{userAttending.userStatus}</button>
                </>
              )
              
            }
            {formStatus ? "" : 
            (<button>
              <a href={eventUrl}>Info</a>
            </button>)}
            { formStatus ? "" :
              (<button onClick={toggleMapDisplay}>{mapsDisplay.content}</button>)
            }
          </div>
        </div>
        <div style={directionsStyle}>
          {mapsDisplay.displayed ? <Directions address={address}/> : ""}

        </div>

    </div>
  )
}


export default Event