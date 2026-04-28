import React from 'react';
import './Input.css';

export const InputGroup = ({ label, name, type = 'text', placeholder, value, onChange, isTextarea = false }) => {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      {isTextarea ? (
        <textarea 
          name={name}
          className="form-control textarea-control" 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows="4"
        />
      ) : (
        <input 
          name={name}
          type={type} 
          className="form-control" 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};
