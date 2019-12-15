import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import './App.css';
import { HomePage } from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUp from './pages/sign-in-sign-up/SignInSignUp';
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './pages/checkout/Checkout';
import { checkUserSession } from './redux/user/user.actions';




class App extends Component {

  unsubscribeFromAuth = null;

  

  componentDidMount() {
const { checkUserSession } = this.props;

    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log('unmounted')
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? 
          (<Redirect to='/' />) : 
          (<SignInSignUp/>)} />
          <Route exact path='/checkout' component={Checkout} />


        </Switch>

      </div>
    );
  }  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
