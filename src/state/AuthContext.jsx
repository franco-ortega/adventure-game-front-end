import React, { createContext, useContext, useState } from 'react';
import { postLogin, postSignup } from '../services/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const isAuthenticated = !!session;

  const signup = (username, email, password) => {
    postSignup(username, email, password)
      .then(user => setSession(user))
      .catch(err => setError(err));
  };

  const login = (username, password) => {
    postLogin(username, password)
      .then(user => setSession(user))
      .catch(err => setError(err));
  };

  return (
    <AuthContext.Provider value={{
      session,
      error,
      isAuthenticated,
      signup,
      login
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useSession = () => {
  const { session } = useContext(AuthContext);
  return session;
};

export const useError = () => {
  const { error } = useContext(AuthContext);
  return error;
};

export const useIsAuthenticated = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated;
};

export const useSignup = () => {
  const { signup } = useContext(AuthContext);
  return signup;
};

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
};

