import React from 'react';
import './slide-button.css';

const SlideButton = ({ hidden, duration, size, color, ...otherProps }) => (
  <div
    className={`
      btn-slide 
      ${duration ? 'btn-slide__' + duration : ''}
      ${color ? 'btn-slide__' + color : ''}
      ${hidden ? 'btn-slide__active' : ''}
      ${size ? 'btn-slide__' + size : ''}
    `}
    {...otherProps}
  />
);

export default SlideButton;