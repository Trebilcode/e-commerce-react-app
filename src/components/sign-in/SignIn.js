import React, { Component } from 'react';
import { connect } from 'react-redux';


import './SignIn.scss';
import FormInput from '../form-input/FormInput';
import Custombutton from '../custom-button/CustomButton';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';


class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = async e => {
    e.preventDefault();
    
    const { emailSignInStart } = this.props;
    const { email, password} = this.state;

    emailSignInStart(email, password);   
  }

  handleChange = e => {
    const { value, name } = e.target;
    
    this.setState({ [name] : value});
  }

  render() {

    const { googleSignInStart } = this.props;

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
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps) (SignIn);