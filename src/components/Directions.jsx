import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyCkaIhelCouGXa3ZRB_2sI4WxRkVc4rdns");
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

      componentDidMount(){
        Geocode.fromAddress(`${this.props.address}`).then(
            (response) => {
                console.log(this.props.address)
              const { lat, lng } = response.results[0].geometry.location;
              this.setState({lattitude: lat, longitude: lng})
              console.log(this.state.lattitude, this.state.longitude)
            });
      }
    render() {
        const style = {
        width: '53%',
        height: '290px'
        }
        return (
            <div className='container'>
            <Map 
                google={this.props.google} 
                zoom={10}
                center={{
                lat: this.state.lattitude,
                lng: this.state.longitude
            }}
            style={style}>
                <Marker position={{lat: this.state.lattitude, lng: this.state.longitude}} />
                </Map>
            </div>
        );
        }
    }
export default GoogleApiWrapper({
 apiKey: 'AIzaSyCkaIhelCouGXa3ZRB_2sI4WxRkVc4rdns',
 version: 3.31
})(App);