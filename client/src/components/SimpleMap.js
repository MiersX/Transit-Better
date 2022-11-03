import { React, useContext, useState } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
import LocationPin from "./LocationPin";
import CurrentLocation from "./CurrentLocation";
// import dotenv from "dotenv"
// dotenv.config()




const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(props){


  const defaultProps = {
    center: {
      lat: 49.2712,
      lng: -123.1340
    },
    zoom: 11
  };

  const nearbyStations = props.nearbyStations.map((station, index) => {
    return(<Marker
    key={index}
    lat={station.place.location.lat}
    lng={station.place.location.lng}
    text={station.place.name}
    />)
  })

  let userData = [];

  if (props.userLat && props.userLong) {

  userData = [{lat: props.userLat, lng: props.userLong }]

 };

  const userLocation = userData.map((user, index) => {
    return(<LocationPin
      key={index}
      lat={user.lat}
      lng={user.lng}
      text="Current Location"
      />)
  })


  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBy8PE1nwqIDNQSU48JplZpUxSeW1TwjFY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {nearbyStations}
        {userLocation}
      </GoogleMapReact>
    </div>
  );
}