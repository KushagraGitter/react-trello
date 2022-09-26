import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="email">
          <label for="email"></label>
          <input type="email" id="email" placeholder="email address"></input>
        </div>
        <div className="password">
          <label for="password"></label>
          <input
            type="password"
            id="password"
            placeholder="password address"
          ></input>
        </div>
        <div className="signin">
          <button className="sign-in">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
