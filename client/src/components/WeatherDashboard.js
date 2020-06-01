import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WeatherCard from './WeatherCard';
import { getWeather } from '../API/API';

const WeatherDashboard = () => {
  const [ currentInfo, setCurrentInfo ] = useState({
    date: new Date(),
  });

  const [ dailyInfos, setDailyInfos ] = useState([]);
  const [ hourlyInfos, setHourlyInfos ] = useState([]);

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getWeather();
        if (!response) throw Error;
        console.log('from hook', response);
        const { timezone, current, daily, hourly } = response;

        setCurrentInfo({
          ...current,
          timezone,
        });

        setDailyInfos(daily);
        setHourlyInfos(hourly);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [])

  const weatherDashboard = (
    <>
      { loading ? <span>loading...</span> : 
        <> 
          <WeatherCard { ...currentInfo } type="current" />
          <Carousel>{ dailyInfos.map(dailyInfo => <WeatherCard { ...dailyInfo } type="daily" />) }</Carousel>
          <Carousel>{ hourlyInfos.map(hourlyInfo => <WeatherCard { ...hourlyInfo } type="hourly" />) }</Carousel>
        </>
      }
    </>
  )

  return weatherDashboard; 
}

export default WeatherDashboard
