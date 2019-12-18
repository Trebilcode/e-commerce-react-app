import React, { useState } from 'react';
import { connect } from 'react-redux';

import './SignUp.scss';

import FormInput from '../form-input/FormInput';
import Custombutton from '../custom-button/CustomButton';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {

  const [ userCredentials, setUserCredentials ] = useState({ 
    email:'',
    password:'',
    confirmPassword:'',
    displayName:''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {

    event.preventDefault();
    

    if(password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password })

  }

  const handleChange = e => {
    const { name, value } = e.target;

    setUserCredentials({...userCredentials, [name] : value });
  }

    
    return(
      <div className='sign-up'>

        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
           />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />

          <Custombutton type='submit'>SIGN UP</Custombutton>

        </form>

      </div>
    );
  }


const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps) (SignUp);