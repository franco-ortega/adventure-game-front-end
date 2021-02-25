import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AuthForm({ title, authFn }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    authFn(username, email, password);
  };

  return (
    <form onSubmit={handleSignupSubmit}>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={({ target }) => setUsername(target.value)} />
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={({ target }) => setEmail(target.value)} />
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
