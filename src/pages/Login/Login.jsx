import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { signIn } from '../../Firebase'; 

const Login = () => {
  const [signstate, setsignstate] = useState('Sign In');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signstate === 'Sign In') {
      signIn(email, password); 
    }
  };

  return (
    <div className='login'>
      <img src={logo} className='login-logo' />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form onSubmit={handleSubmit}>
          {signstate === 'Sign Up' ? <input type="text" placeholder='Your Name' required /> : <></>}
          <input
            type="email"
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input
            type="password"
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">{signstate}</button>
          <div className="form-help">
            <div className='remember'>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signstate === 'Sign In' ? (
            <p>New to Netflix <span onClick={() => setsignstate('Sign Up')}>SignUp Now</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setsignstate('Sign In')}>SignIn Now</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
