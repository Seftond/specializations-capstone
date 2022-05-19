import React, { useRef, useState } from 'react'
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';
const center = {lat: -25.363, lng: 131.044}
const google = window.google

function Map() {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey:'AIzaSyC7NkcbP1eQLDDAJaE3GUlcnOhmhEI5OXE',
        libraries: ['places'],
    });

    const [map, setMap] = useState(/** @type google.maps.Map */ (null));
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('')

    const startRef = useRef();
    const destinationRef = useRef()

    if(!isLoaded){
        <p>Loading...</p>
    }

    async function calculateRoute(){
        if(startRef.current.value === '' || destinationRef.current.value === ''){
            return
        }
        // eslint-disable-next-line no-undef
        const directionsService  = new google.maps.DirectionsService()

        const results = await directionsService.route({
            start: startRef.current.value,
            destination: destinationRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        })

        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    function clearRoute(){
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        startRef.current.value = ''
        destinationRef.current.value = ''
    }

  return (
    <div>
        <div style={{
            position: 'relative',
            flexDirection: 'column',
            alignItems: 'center',
            height: '50vh',
            width: '50vw'
        }}
        >
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: '100%'
            }}
            >
                <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '100%', height: '100%'}} options={{zoomControl: true, streetViewControl: false, mapTypeControl:false, fullscreenControl: false,}}
                onLoad={map => setMap(map)}
                >
                    <Marker position={center}/>
                    {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
                </GoogleMap>
            </div>
        </div>
            <div style={{
                backgroundColor: 'white',
                zIndex: 'modal'
            }}>
                <form>
                    <Autocomplete>
                        <input type='text' placeholder='Start' ref={startRef}/>
                    </Autocomplete>
                    <Autocomplete>
                        <input type='text' placeholder='Destination' ref={destinationRef}/>
                    </Autocomplete>
                    <button onClick={calculateRoute}>Calculate Route</button>
                    <button onClick={clearRoute}>X</button>
                    <button onClick={() => map.panTo(center)}>Center</button>
                </form>
                <p>Distance: {distance}</p>
                <p>Duration: {duration}</p>
            </div>

    </div>
  )
}

export default Map