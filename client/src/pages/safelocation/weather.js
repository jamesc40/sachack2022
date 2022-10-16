import React from 'react'
import './Weather.css'

function Weather() {
  // const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=40.74&lon=-73.95&appid=63ae8666f3714eafd9abc37b4f62509f"
  
//   const [weather, setWeather] = useState([{}])

//   useEffect(() => {
//     fetch(weatherURL)
//     .then(response => response.json())
//     .then (weather => setWeather(weather))
// },[])

  // console.log(weather)
  return (
    <>
    <div className='weather-container'>
      <h1>Monday</h1>
      {/* <p className='city'>{weather.name}</p>
      <p className='temp'>{Math.round(weather.main.humidity)}°F</p>
      <p className='weather'>{weather.weather[0].main}</p> */}
      <p className='city'>Long Island City</p>
      <p className='temp'>65°F</p>
      <p className='weather'>cloudy</p>
    </div>
    </>
  )
}

export default Weather