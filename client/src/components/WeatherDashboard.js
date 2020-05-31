import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import { getWeather } from '../API/API';

const WeatherDashboard = () => {
  const [ currentInfo, setCurrentInfo ] = useState({
    date: new Date(),
  });

  const [ dailyInfos, setDailyInfos ] = useState([]);
  const [ hourlyInfos, setHourlyInfos ] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getWeather();
        if (!response) throw Error;
        console.log('from hook', response);
        // const { 
        //   timezone, 
        //   current: { 
        //     dt: currentDt,
        //     temp: currentTemp,
        //     feels_like: currentFeel,
        //     weather: [{ 
        //       icon: currentIconCode,
        //       description: currentDescription,
        //     }]
        //   } 
        // } = response;

        const { timezone, current, daily, hourly } = response;

        setCurrentInfo({
          ...current,
          timezone,
        });

        setDailyInfos(daily);
        setHourlyInfos(hourly);

      } catch (error) {
        console.error(error);
      }
    })();
  }, [])

  const weatherDashboard = (
    <div>
      <WeatherCard { ...currentInfo } type="current" />
      {/* { dailyInfos.map(dailyInfo => <WeatherCard { ...dailyInfo } type="daily" temp={dailyInfo.temp.day}  />) } */}
      <div>
        <h5>current weather</h5>
        <ul>
          <li>city</li>
          <li>hour</li>
          <li>icon</li>
          <li>temp</li>
          <li>description</li>
          <li>feels like</li>
        </ul>
      </div>
      <div>
        <h5>hourly slider</h5>
        <ul>
          <li>hour</li>
          <li>icon</li>
          <li>temp</li>
          <li>description</li>
        </ul>
      </div>
      <div>
        <h5>daily slider</h5>
        <ul>
          <li>weekday monthday</li>
          <li>icon</li>
          <li>maxtemp mintemp</li>
          <li>description</li>
        </ul>
      </div>
    </div>
  )

  return weatherDashboard; 
}

export default WeatherDashboard
