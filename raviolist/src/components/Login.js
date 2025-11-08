import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Croissant, ArrowLeft } from 'lucide-react';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication - accept any username/password
    if (username.trim()) {
      onLogin(username.trim());
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <button className="back-button" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="login-header">
          <Croissant size={48} />
          <h1>Welcome to Raviolist</h1>
          <p>Sign in to save your favorite restaurants and create lists</p>
        </div>

        <form className="login-form-page" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>

          <button type="submit" className="login-submit-button">
            Login
          </button>
        </form>

        <div className="signup-prompt">
          <p>Don't have an account? <button className="signup-link">Sign up</button></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
