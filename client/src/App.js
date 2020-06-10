import React from 'react';
import Header from './components/Header';
import WeatherDashboard from './components/WeatherDashboard';
import ParticlesBg from './components/Particles';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherDashboard />
			<canvas className="AppBg"></canvas>
			<ParticlesBg />
    </div>
  );
}

export default App;
