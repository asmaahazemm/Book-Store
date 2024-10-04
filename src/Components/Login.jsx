import React, { useState } from 'react';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Info:', { email, password });

    // Example validation logic
    if (email === '' || password === '') {
      setError('Both fields are required.');
      return;
    }

    // Example usage
    if (email === 'admin123@gmail.com' && password === 'password') {
      alert('Login successful!');
      setError(''); // Clear error if login is successful
    } else {
      setError('Invalid email or password.');
    }

    // Close login modal after submission
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        
        {}
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
        <button type="button" className="close-btn" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default Login;
