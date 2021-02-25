import React from 'react';
import { useSignup } from '../../state/AuthContext';
import AuthForm from './AuthForm';

export default function Signup() {
  const signup = useSignup();
  
  return <AuthForm title="Signup" authFn={signup} />;
}
