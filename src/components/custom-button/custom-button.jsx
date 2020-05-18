import React from 'react';
import './custom-button.css';

const CustomButton = ({ secondary, large, text, ...otherProps }) => (
  <button
    className={`btn ${large ? "btn__lg" : ""} ${secondary ? 'btn__secondary' : ''}`}
    {...otherProps}
  >
    {text}
  </button>
);

export default CustomButton;