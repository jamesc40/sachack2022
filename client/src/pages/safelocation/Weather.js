import React, { useState, useEffect } from 'react'
import './Weather.css'

function Weather() {
  const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=40.74&lon=-73.95&appid=d457d16f40139f218a54e04b444f86c7"
  
  const [weather, setWeather] = useState([{}])

  useEffect(() => {
    fetch(weatherURL)
    .then(response => response.json())
    .then (weather => setWeather(weather))
},[])

  console.log(weather)
  return (
    <>
    <div className='weather-container'>
      <h1>Monday</h1>
      {/* <p className='city'>{weather.name}</p>
      <p className='temp'>{Math.round(weather.main.humidity)}°F</p>
      <p className='weather'>{weather.weather[0].main}</p> */}
    </div>
    </>
  )
}

export default Weather