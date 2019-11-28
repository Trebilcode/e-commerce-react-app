import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignOut from './pages/sign-in-sign-up/SignInSignUp';




function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInSignOut}/>


      </Switch>
      
    </div>
  );
}

export default App;
