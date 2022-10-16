import React from 'react';
import Map from './Map';
import { useLoadScript } from  '@react-google-maps/api';

function Display() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>
  return (
    <Map />
  )
}

export default Display;