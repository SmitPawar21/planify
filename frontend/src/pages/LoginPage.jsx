import React, { useState } from 'react';
import "../styles/LoginForm.css";
import email from "../assets/email.svg";
import password from "../assets/password.svg";
import eye from "../assets/eye.svg";
import googlesvg from "../assets/google.svg";
import linkedinsvg from "../assets/linkedin.svg";
import twittersvg from "../assets/twitter.svg";
import microsoftsvg from "../assets/microsoft.svg";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      email: '',
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
        await fetch('http://localhost:8080/login',
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
  
            if(data.message === "yes") {
              alert("Welcome to Planify");
              const user_id = data.user_id;

              console.log(user_id);
              Cookies.set('userId', user_id, { expires: 1 }); 
              navigate('/home');
            } else {
              alert("Check Your credentials again. SignUp if not registered yet.");
            }
          })
      }
    }

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'}}>
      <div className='container'>

        <h1>Login to your account</h1>

        <div className='inner-box'>
          <div className='input-box'>

            <div className='single-input'>
              <img src={email} alt="image hai" />
              <input type='email' placeholder='Email' name="email" className='email-input' value={formData.email} onChange={handleChange} />
            </div>

            <div className='single-input'>
              <img src={password} alt="image hai" />
              <input type='password' placeholder='Password' name="password" value={formData.password} className='password-input' onChange={handleChange} />
              <img src={eye} alt="image hai" />
            </div>

            <div className='button-box'>
              <div class="checkbox-container">
                <input type="checkbox" id="terms" name="termsAccepted" onChange={handleChange} value={formData.termsAccepted} />
                <label for="terms">
                  I agree with the terms and conditions and privacy policy.
                </label>
              </div>

              <button className='login-button' onClick={submitForm}>Login</button>
            </div>
          </div>
        </div>

        <p style={{ color: 'black', fontSize: '1.1vw' }}>or Login using</p>

        <div className='logo-container'>
          <img src={googlesvg} alt="image hai" />
          <img src={linkedinsvg} alt="image hai" />
          <img src={twittersvg} alt="image hai" />
          <img src={microsoftsvg} alt="image hai" />
        </div>

      </div>
    </div>
  )
};
