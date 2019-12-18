import React from 'react';

import './HomePage.scss';
import Directory from '../../components/directory/Directory';
import { HomePageContainer } from './HomePage.styles';

export const HomePage = () => (
  <HomePageContainer>
    <Directory />  
  </HomePageContainer>
)