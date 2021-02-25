import React, { createContext, useContext, useState } from 'react';
import { postSignup } from '../services/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  const signup = (username, email, password) => {

    postSignup(username, email, password)
      .then(user => setSession(user));

  };

  return (
    <AuthContext.Provider value={{ session, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useSession = () => {
  const { session } = useContext(AuthContext);
  return session;
};

export const useSignup = () => {
  const { signup } = useContext(AuthContext);
  return signup;
};
