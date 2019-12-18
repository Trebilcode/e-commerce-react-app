import React, { useState } from 'react';
import { connect } from 'react-redux';


import './SignIn.scss';
import FormInput from '../form-input/FormInput';
import Custombutton from '../custom-button/CustomButton';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';


const SignIn = ({ emailSignInStart, googleSignInStart }) => {

  const [ userCredentials, setUserCredentials] = useState({ email: '', password:'' });

  const { email, password} = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    emailSignInStart(email, password);   
  }

  const handleChange = e => {
    const { value, name } = e.target;
    
    setUserCredentials({...userCredentials, [name] : value});
  }
  
  return (

      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>

        <FormInput
        onChange={handleChange} 
        label='email'
        type='email'
        name='email' 
        value={email}
        
        required
        />
        
        <FormInput
        onChange={handleChange}
        label='password'
        name='password'
        type='password'
        value={password}
        required
          />
        
        <div className='buttons'>
          <Custombutton
          type='submit'
          
          >
          SIGN IN
          </Custombutton>
          <Custombutton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            SIGN IN WITH GOOGLE
          </Custombutton>
        </div>
        </form>
      </div>

    );
  }


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps) (SignIn);