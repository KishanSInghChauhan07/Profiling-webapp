import React from 'react';

import SignIn from '../Components/sign-in-and-sign-up/sign_in';
import SignUp from '../Components/sign-in-and-sign-up/sign_up';


import './styles/sign-in-and-sign-up.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;