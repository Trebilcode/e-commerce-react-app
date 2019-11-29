import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUp from './pages/sign-in-sign-up/SignInSignUp';
import { auth } from 'firebase';
import { createUserProfileDocument } from './firebase/firebase.utils';




class App extends Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  

  componentDidMount() {
    this.unsubscribeFromAuth = auth().onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser: {
              id : snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }else {
        this.setState({currentUser: userAuth})
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log('unmounted')
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />


        </Switch>

      </div>
    );
  }  
}

export default App;
