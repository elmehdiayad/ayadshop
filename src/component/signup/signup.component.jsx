import React from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './signup.styles.scss';


class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayName:'',
      email:'',
      password:'',
      comfirmPassword:''
    }
  }

  handleSubmit = async event => { 
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword){
      alert("passwords not identical");
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});
      this.setState({
        displayName:'',
        email:'',
        password:'',
        comfirmPassword:''
      });

    }
    catch(error){
      console.error(error);
    }
  }

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({
      [name] : value
    });
  }

  render(){
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className='sign-up'>
        <div className='title'>I'm a new user</div>
        <h4>Sign up filling your informations</h4>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='displayName' type='text' value={displayName} handleChange={this.handleChange} label='Display Name' required/>
          <FormInput name='email' type='email' value={email} handleChange={this.handleChange} label='email' required/>
          <FormInput name='password' type='password' value={password} handleChange={this.handleChange} label='password' required/>
          <FormInput name='confirmPassword' type='password' value={confirmPassword} handleChange={this.handleChange} label='confirm password' required/>
          <div className='buttons'>
            <CustomButton type='submit'>Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;