import React, {useState} from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user-reducer/user.actions';
import { connect } from 'react-redux';

import './signup.styles.scss';


const  SignUp = ({signUp}) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  });

  const {displayName, email, password, confirmPassword} = userCredentials;

  const handleSubmit = async event => { 
    event.preventDefault();

    if(password !== confirmPassword){
      alert("passwords not identical");
      return;
    }
    signUp({displayName, email, password});
  }

  const handleChange = event => {
    const {value, name} = event.target;
    setUserCredentials({...userCredentials, [name]: value})
  }

  return (
    <div className='sign-up'>
      <div className='title'>I'm a new user</div>
      <h4>Sign up filling your informations</h4>

      <form onSubmit={handleSubmit}>
        <FormInput name='displayName' type='text' value={displayName} handleChange={handleChange} label='Display Name' required/>
        <FormInput name='email' type='email' value={email} handleChange={handleChange} label='email' required/>
        <FormInput name='password' type='password' value={password} handleChange={handleChange} label='password' required/>
        <FormInput name='confirmPassword' type='password' value={confirmPassword} handleChange={handleChange} label='confirm password' required/>
        <div className='buttons'>
          <CustomButton type='submit'>Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  signUp: (informations) => dispatch(signUpStart(informations))
});

export default connect(null, mapDispatchToProps)(SignUp);