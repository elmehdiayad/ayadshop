import React, {useState} from 'react'

import FormInput from '../form-input/form-input.component'
import './signin.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user-reducer/user.actions';
import { connect } from 'react-redux';

const SignIn = ({googleSignInStart,emailSignInStart}) => {
  
  const [userCredentials, setCredentials] = useState({email: '', password: ''});

  const {email, password} = userCredentials;


  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password)
  }

  const handleChange = event => {
    const {value, name} = event.target;
    setCredentials({...userCredentials, [name] : value});
  }
  return (
    <div className='sign-in'>
      <div className='title'>I already have an account</div>
      <h4>Sign in with your email and password</h4>

      <form onSubmit={handleSubmit}>
        <FormInput name='email' type='email' value={email} handleChange={handleChange} label='email' required/>
        <FormInput name='password' type='password' value={password} handleChange={handleChange} label='password' required/>
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);