import React from 'react';
import '../css/weather-icons.min.css';

import './Header.css';

const Header = () => {
  const header = (
    <nav className="header">
			<i className="wi wi-horizon"></i>
      <h1 className="header__title">Weather</h1>
			<i className="wi wi-horizon-alt"></i>
    </nav>
  );

  return header;
}

export default Header;