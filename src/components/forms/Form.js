import React from 'react';

export const Form = ({onSubmit, children}) => {
  return (
    <form action="#" onSubmit={onSubmit}>
      {children}
    </form>
  )
};

export default Form;
