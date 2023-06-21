import React from 'react'

function Weather(props) {
  const {weather} = props;

  const temperature = weather && weather.main ? (weather.main.temp - 273.15).toFixed(2) : null;

  return (
    <>
    {
      // JSX연산자?
      weather && (
        <div>
          <h1>{weather.name}</h1>
          <p>현재 온도: {temperature}°C</p>
          <p>설명: {weather.weather[0].description}</p>
        </div>
        )
    }
    </>
  )
}

export default Weather