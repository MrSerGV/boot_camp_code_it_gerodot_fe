import React from 'react';
import './form-block.css';

const FormBlock = ({ color, children, ...otherProps }) => (
  <div className={`form-block form-${color}`}>
    <form {...otherProps}>
      {children}
    </form>
  </div>
);

export default FormBlock;