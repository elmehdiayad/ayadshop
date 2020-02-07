import React from 'react'
import SignIn from '../../component/signin/signin.component';
import SignUp from '../../component/signup/signup.component';
import './sign.styles.scss'



const Sign = () => {
  return (
    <div className = 'sign'>
      <SignIn />
      <SignUp />
    </div>
    
  );
}


export default Sign;