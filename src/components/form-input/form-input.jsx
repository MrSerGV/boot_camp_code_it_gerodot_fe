import React from 'react';
import './form-input.css';

const FormInput = props => {
  if (props.type === "file") {
    const { type, name, placeholder, ...otherProps } = props;
    return (
      <div className="form-input">
        <label htmlFor={name} className="input">{placeholder}</label>
        <input id={name} className="input-file" type="file" {...otherProps} />
      </div>
    );
  }

  return (
    <div className="form-input">
      <input className="input" {...props} />
    </div>
  );
}

export default FormInput;