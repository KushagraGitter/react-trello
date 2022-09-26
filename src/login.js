import React from 'react';

const Login = () => {
  return (
    <form>
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
  );
};

export default Login;
