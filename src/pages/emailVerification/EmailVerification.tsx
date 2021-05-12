import React from 'react';
import {NavLink} from 'react-router-dom';
import './EmailVerification.scss';

const EmailVerification = () => {
  return (
    <div>
      <h1>A verification link has been sent to your email.</h1>
      <NavLink to='/'>Go to main page</NavLink>
    </div>
  );
};

export default EmailVerification;
