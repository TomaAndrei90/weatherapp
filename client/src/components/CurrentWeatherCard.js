import React from 'react'

const CurrentWeatherCard = ({ 
    currentDate, 
    iconSrc, 
    currentTemp,
    currentFeel,
    currentDescription,
  }) => {
  const hours = currentDate.getHours();
  const minutes = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
  const meridiem = hours > 12 ? 'PM' : 'AM';
  const displayTime = `${hours} : ${minutes} ${meridiem}`;
    
  const currentWeatherCard = (
    <div style={{border: '1px solid black'}}>
      <div>Current Weather </div>
      <div>{ displayTime }</div>
      <div><img src={ iconSrc } alt="Weather Icon" /></div>
      <div>{ currentTemp }</div>
      <div>Real Feel: { currentFeel }</div>
      <div>{ currentDescription }</div>
    </div>
  )

  return currentWeatherCard;
}

export default CurrentWeatherCard
