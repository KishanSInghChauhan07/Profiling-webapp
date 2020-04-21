import React from 'react';
import SignIn from '../Components/sign-in-and-sign-up/sign_in';
import SignUp from '../Components/sign-in-and-sign-up/sign_up';
import './styles/sign-in-and-sign-up.scss';

const SignInAndSignUpPage = () => (
  <>
    <h2 className="text-center text-primary mb-5">Profiling App</h2>
    <div className='sign-in-and-sign-up'>
      <SignIn />
        <SignUp />
    </div>
  </>
);

export default SignInAndSignUpPage;