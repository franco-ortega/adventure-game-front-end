import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getVerify, postLogin, postSignup } from '../services/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [error, setError] = useState('');
  const isAuthenticated = !!session;

  useEffect(() => {
    getVerify()
      .then(user => setSession(user))
      .catch(() => console.log('User not logged in.'))
      .finally(() => setAuthLoading(false));
  }, []);

  const signup = (username, email, password) => {
    postSignup(username, email, password)
      .then(user => setSession(user))
      .then(() => history.push('/characters'))
      .catch(err => setError(err));
  };

  const login = (username, password) => {
    postLogin(username, password)
      .then(user => setSession(user))
      .then(() => history.push('/characters'))
      .catch(err => setError(err));
  };

  return (
    <AuthContext.Provider value={{
      session,
      authLoading,
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

export const useAuthLoading = () => {
  const { authLoading } = useContext(AuthContext);
  return authLoading;
};

export const useError = () => {
  const { error } = useContext(AuthContext);

  // eslint-disable-next-line max-len
  const sameUsername = 'duplicate key value violates unique constraint "users_username_key"';

  if(error.message === sameUsername) {
    error.message = 'This username already exists. Please select another.';
  }
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
