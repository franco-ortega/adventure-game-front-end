import React, { useState } from 'react';
import { useSignup } from '../../state/AuthContext';

export default function Signup() {
  const signup = useSignup();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    signup(username, email, password);
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
      <button>Signup</button>
    </form>
  );
}
