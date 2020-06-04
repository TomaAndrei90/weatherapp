import mock from './mock.json';

const getWeather = async () => {
	return mock;
	// const apiKey = ''
  // const result = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=44.4268&lon=26.1025&units=metric&appid=${apiKey}`);
  // return await result.json();  
};

export {
  getWeather
}