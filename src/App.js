import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignOut from './pages/sign-in-sign-up/SignInSignUp';
import { auth } from 'firebase';




class App extends Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth().onAuthStateChanged(user => {
      this.setState({ currentUser: user  });
      console.log(user);
    })
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignOut} />


        </Switch>

      </div>
    );
  }  
}

export default App;
