import React from 'react';
import { useLogin } from '../../state/AuthContext';
import AuthForm from './AuthForm';

export default function Login() {
  const login = useLogin();
  
  return <AuthForm title="Login" authFn={login} />;
}
