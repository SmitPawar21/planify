import React from 'react';
import "../styles/IntroPage.css";
import { useNavigate } from 'react-router-dom';

export const IntroPage = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  }

  const handleSignup = () => {
    navigate('/signup');
  }

  return (
    <div className='intro-page'>
      <div className='top'>
        <button className='login-button' onClick={handleLogin}>
          Login
        </button>

        <button className='signup-button' onClick={handleSignup}>
          Signup
        </button>
      </div>

      <div className='hero'>
        <h1>PLANIFY</h1>
      </div>
    </div>
  )
}

