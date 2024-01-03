// MainPage.jsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mainpage.css'
import img1 from '../Asssests/img/log.svg'
import img2 from '../Asssests/img/register.svg'


function Mainpage() {

  const navigate = useNavigate();

  const handleLogin = () => {
    
    navigate('/dashboard');
  };
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    const signUpHandler = () => {
      container.classList.add("sign-up-mode");
    };

    const signInHandler = () => {
      container.classList.remove("sign-up-mode");
    };

    sign_up_btn.addEventListener("click", signUpHandler);
    sign_in_btn.addEventListener("click", signInHandler);

    return () => {
      sign_up_btn.removeEventListener("click", signUpHandler);
      sign_in_btn.removeEventListener("click", signInHandler);
    };
  }, []); 

  

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleLogin} className="sign-in-form">
            <h2 className="title">Log In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            
            
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <div className="intro">
            <h1 className='welcome'>Welcome To </h1>
            <h1 className='stu'>Student Portal</h1>
            </div>
           
            <p className='acct'>
              Don't have an account?
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>

          <img src={img1} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already have an account ?</h3>
          
            <button className="btn transparent" id="sign-in-btn">
              Log in
            </button>
          </div>
          <img src={img2} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
