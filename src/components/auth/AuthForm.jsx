import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AuthForm.css';

export default function AuthForm({ title, authFn }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if(title === 'Signup') return authFn(username, email, password);
    if(title === 'Login') return authFn(username, password);
  };

  return (
    <form
      className={styles.AuthForm}
      onSubmit={handleSignupSubmit}>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={({ target }) => setUsername(target.value)} />
      {(title === 'Signup') ? 
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={({ target }) => setEmail(target.value)} />
        : <span> </span>
      }
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={({ target }) => setPassword(target.value)} />
      <button>{title}</button>
    </form>
  );
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  authFn: PropTypes.func.isRequired
};
