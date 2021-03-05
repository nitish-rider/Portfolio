import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./Maps.css";

const style = {
    width: '100%',
    height: '100%'
  }
  
export class MapContainer  {
    render() {
      return (
        <Map
        google={this.props.google}
        style={style}
        center={{
          lat: 40.854885,
          lng: -88.081807
        }}
        zoom={15}
        onClick={this.onMapClicked}
      >
        </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyAzy51C8ZC0G_9GimOo_y23oRNWh5lbStE")
  })(MapContainer)
