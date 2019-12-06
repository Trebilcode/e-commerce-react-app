import React from 'react';

import { CustomButtonContainer } from './CustomButton.styles';


const Custombutton = ({children, ...props }) => (
  <CustomButtonContainer { ...props }>
    { children }
  </CustomButtonContainer>
);

export default Custombutton;