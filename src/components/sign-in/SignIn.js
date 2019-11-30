import React, { Component } from 'react';

import './SignIn.scss';
import FormInput from '../form-input/FormInput';
import Custombutton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = async e => {
    e.preventDefault();
    
    const { email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' })
    } catch(error) {
      console.log(error);
    }


    
  }

  handleChange = e => {
    const { value, name } = e.target;
    
    this.setState({ [name] : value});
  }

  render() {
    return (

      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>

        <FormInput
        onChange={this.handleChange} 
        label='email'
        type='email'
        name='email' 
        value={this.state.email}
        
        required
        />
        
        <FormInput
        onChange={this.handleChange}
        label='password'
        name='password'
        type='password'
        value={this.state.password}
        required
          />
        
        <div className='buttons'>
          <Custombutton
          type='submit'
          
          >
          SIGN IN
          </Custombutton>
          <Custombutton
            onClick={signInWithGoogle}
            isGoogleSignIn
          >
            SIGN IN WITH GOOGLE
          </Custombutton>
        </div>
        </form>
      </div>

    );
  }
}

export default SignIn;