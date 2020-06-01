import React from 'react'

const WeatherCard = ({ 
    type,
    timezone,
    dt, 
    temp,
    feels_like,
    weather,
  }) => {
    const { icon, description } = weather[0];
    const OPEN_WEATHER_IMG_URL = 'http://openweathermap.org/img/wn/';
    const iconSrc = `${OPEN_WEATHER_IMG_URL}${icon}.png`;

    let displayTime = 'placeholder time';
    const date = new Date(dt * 1000);
    if (type === 'current' || type === 'hourly') {
      const hours = date.getHours();
      const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
      const meridiem = hours > 12 ? 'PM' : 'AM';
      displayTime = `${hours} : ${minutes} ${meridiem}`;
    }

    if (type === 'daily') {
      const weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
      const weekday = weekdays[date.getDay()];
      const dayOfMonth = date.getDate();
      let dayOfMonthSuffix = 'th';
      if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31 ) dayOfMonthSuffix = 'st';
      if (dayOfMonth === 2 || dayOfMonth === 22 ) dayOfMonthSuffix = 'nd';
      if (dayOfMonth === 3 || dayOfMonth === 23 ) dayOfMonthSuffix = 'rd';
      displayTime = `${weekday} ${dayOfMonth}${dayOfMonthSuffix}`;
    }
    
    console.log(type)
      
    const weatherCard = (
      <div style={{border: '1px solid black'}}>
        { type === 'current' && <div>{ timezone }</div> }
        <div>{ displayTime }</div>
        <div><img src={ iconSrc } alt="Weather Icon" /></div>
        { (type === 'current' || type === 'hourly') && <div>{ temp }</div> }
        { type === 'daily' && <div>{ temp.max } / { temp.min }</div> }
        <div>{ description }</div>
        { type === 'current' && <div>Real Feel: { feels_like }</div> }
      </div>
    )

    return weatherCard;
  }

export default WeatherCard