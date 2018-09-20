import React from 'react';

export const Text = ({name, label, value, onChange}) => {
  return (
    <div className="on-time-text">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type="text" value={value} onChange={onChange} />
    </div>
  )
};

export const TextArea = ({name, label, value, onChange}) => {
  return (
    <div className="on-time-text-area">
      <label htmlFor={name}>{label}</label>
      <textarea name={name} cols="10" rows="10" onChange={onChange} value={value} />
    </div>
  )
};

export default Text;
