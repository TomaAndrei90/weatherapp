import React from 'react';
import { WiHorizon, WiHorizonAlt } from "react-icons/wi";

import './Header.css';

const Header = () => {
  const header = (
    <nav className="header">
      <WiHorizon />
      <h1 className="header__title">Weather</h1>
      <WiHorizonAlt />
    </nav>
  );

  return header;
}

export default Header;