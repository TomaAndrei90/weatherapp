import React from 'react';
import Header from './components/Header';
import WeatherDashboard from './components/WeatherDashboard';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherDashboard />
    </div>
  );
}

export default App;
