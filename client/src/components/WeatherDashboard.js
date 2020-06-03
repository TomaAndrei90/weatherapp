import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WeatherCard from './WeatherCard';
import { getWeather } from '../API/API';

import './WeatherDashboard.css';

const WeatherDashboard = () => {
  const [ currentInfo, setCurrentInfo ] = useState({
    date: new Date(),
  });

  const [ dailyInfos, setDailyInfos ] = useState([]);
  const [ hourlyInfos, setHourlyInfos ] = useState([]);

	const [ loading, setLoading ] = useState(true);
	
	const carouselProps = {
		showIndicators: false,
		showStatus: false,
    showThumbs: false,
    showArrows: false,
		centerMode: true,
		centerSlidePercentage: '33.33'
	};

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
          <div className="WeatherDashboard WeatherDashboard__daily">
            <h3>Daily</h3>
            <Carousel {...carouselProps}>{ dailyInfos.map(dailyInfo => <WeatherCard { ...dailyInfo } type="daily" />) }</Carousel>
					</div>
          <div className="WeatherDashboard WeatherDashboard__hourly">
            <h3>Hourly</h3>
            <Carousel {...carouselProps}>{ hourlyInfos.map(hourlyInfo => <WeatherCard { ...hourlyInfo } type="hourly" />) }</Carousel>
          </div>
        </>
      }
    </>
  )

  return weatherDashboard; 
}

export default WeatherDashboard
