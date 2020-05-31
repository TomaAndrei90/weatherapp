import React from 'react'

const WeatherCard = ({ 
    type,
    timezone,
    dt, 
    temp,
    feels_like,
    description,
    weather,
  }) => {
    console.log(weather)
    const OPEN_WEATHER_IMG_URL = 'http://openweathermap.org/img/wn/';
    const iconSrc = `${OPEN_WEATHER_IMG_URL}${weather[0].icon}.png`
    let displayTime = 'placeholder time';
    if (type === 'current') {
      const date = new Date(dt * 1000);
      const hours = date.getHours();
      const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
      const meridiem = hours > 12 ? 'PM' : 'AM';
      displayTime = `${hours} : ${minutes} ${meridiem}`;
    }
    console.log(type)
      
    const weatherCard = (
      <div style={{border: '1px solid black'}}>
        { type === 'current' && <div>{ timezone }</div> }
        <div>{ displayTime }</div>
        <div><img src={ iconSrc } alt="Weather Icon" /></div>
        <div>{ temp }</div>
        { type === 'current' && <div>Real Feel: { feels_like }</div> }
        <div>{ description }</div>
      </div>
    )

    return weatherCard;
  }

export default WeatherCard
