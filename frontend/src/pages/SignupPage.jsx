import React, { useState } from 'react';
import "../styles/LoginForm.css";
import email from "../assets/email.svg";
import password from "../assets/password.svg";
import eye from "../assets/eye.svg";
import googlesvg from "../assets/google.svg";
import linkedinsvg from "../assets/linkedin.svg";
import twittersvg from "../assets/twitter.svg";
import microsoftsvg from "../assets/microsoft.svg";
import nameIcon from "../assets/name.svg";
import { useNavigate } from 'react-router-dom';

export const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  console.log(formData);

  const submitForm = async () => {
    if (formData.termsAccepted === false) {
      alert('Please accept the Terms & Condition');
    } else {
      await fetch('http://localhost:8080/user',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);

          if(data.message === "user created") {
            navigate('/login');
          } else if (data.message === "user already exist") {
            alert("User with this Email already exist. Try Another to create new account.")
          } else {
            alert("Something went wrong. Check Your credentials.");
          }
        })
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
      <div className='container'>
        <h1>Sign Up to your account</h1>

        <div className='inner-box'>
          <div className='input-box'>

            <div className='single-input'>
              <img src={nameIcon} alt="Name Icon" />
              <input type='text' name="name" placeholder='Your Name' className='email-input' value={formData.name} onChange={handleChange} />
            </div>

            <div className='single-input'>
              <img src={email} alt="Email Icon" />
              <input type='email' name="email" placeholder='Email' className='email-input' value={formData.email} onChange={handleChange} />
            </div>

            <div className='single-input'>
              <img src={password} alt="Password Icon" />
              <input type='password' name="password" placeholder='Password' className='password-input' value={formData.password} onChange={handleChange} />
              <img src={eye} alt="Toggle Password Visibility" />
            </div>

            <div className='button-box'>
              <div className="checkbox-container">
                <input type="checkbox" id="terms" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
                <label htmlFor="terms">
                  I agree with the terms and conditions and privacy policy.
                </label>
              </div>

              <button className='login-button' onClick={submitForm}>Sign Up</button>
            </div>
          </div>
        </div>

        <p style={{ color: 'black', fontSize: '1.1vw' }}>or Login using</p>

        <div className='logo-container'>
          <img src={googlesvg} alt="Google Icon" />
          <img src={linkedinsvg} alt="LinkedIn Icon" />
          <img src={twittersvg} alt="Twitter Icon" />
          <img src={microsoftsvg} alt="Microsoft Icon" />
        </div>
      </div>
    </div>
  );
};
