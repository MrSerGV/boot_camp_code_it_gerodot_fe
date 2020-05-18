import React from 'react';
import './logo.css';

const Logo = ({ logoSrc }) => (
  <div className="logo"><img src={logoSrc} alt="logo" /></div>
);

export default Logo;