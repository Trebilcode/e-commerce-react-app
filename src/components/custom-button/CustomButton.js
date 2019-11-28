import React from 'react';

import './CustomButton.scss';


const Custombutton = ({ children, ...otherProps }) => (
  <button className='custom-button' { ...otherProps }>
    { children }
  </button>
);

export default Custombutton;