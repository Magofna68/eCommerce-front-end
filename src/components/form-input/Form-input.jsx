import React from 'react';
import './form-input.styles.scss';

const FormInput =({ handleChange, label, onKeyDown, ...otherProps }) => (
  <div className="group">
    <input 
      className="form-input" 
      placeholder=" " 
      onChange={handleChange}
      onKeyDown={onKeyDown}
      {...otherProps} 
    />
    {
      label ? (
        <label 
          className={`${otherProps.value ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      ) : null }
  </div>
);

export default FormInput;