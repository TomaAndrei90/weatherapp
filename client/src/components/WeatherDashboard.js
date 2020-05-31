import React, { useEffect, useState } from 'react';
import CurrentWeatherCard from './CurrentWeatherCard';
import { getWeather } from '../API/API';

const WeatherDashboard = () => {
  const [ mainInfo, setMainInfo ] = useState({ 
    timezone: '',
    currentTemp: '',
    iconSrc: '',
  });

  const [ currentInfo, setCurrentInfo ] = useState({
    currentDate: new Date(),
    currentTemp: '',
    currentDescription: '',
    iconSrc: '',
  }) 

  useEffect(() => {
    (async () => {
      try {
        const response = await getWeather();
        if (!response) throw Error;
        console.log('from hook', response);
        const { 
          timezone, 
          current: { 
            dt: currentDt,
            temp: currentTemp,
            feels_like: currentFeel,
            weather: [{ 
              icon: currentIconCode,
              description: currentDescription,
            }]
          } 
        } = response;
        
        const currentDate = new Date(currentDt * 1000);
        console.log(currentDate)

        const iconSrc = `http://openweathermap.org/img/wn/${currentIconCode}@2x.png`;
        setMainInfo({
          timezone,
          currentTemp,
          iconSrc
        });
        setCurrentInfo({
          currentDate,
          currentTemp,
          currentFeel,
          currentDescription,
          iconSrc
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [])

  const weatherDashboard = (
    <div>
      <div className="main-info">
        { mainInfo.timezone } / { mainInfo.currentTemp } / <img src={mainInfo.iconSrc} alt="Weather Icon" />
      </div>
      <CurrentWeatherCard { ...currentInfo }/>
      <div>hourly slider</div>
      <div>daily slider</div>
    </div>
  )

  return weatherDashboard; 
}

export default WeatherDashboard
