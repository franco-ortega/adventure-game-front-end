import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthLoading, useIsAuthenticated } from '../../state/AuthContext';

export default function PrivateRoute(props) {
  const isAuthenticated = useIsAuthenticated();
  const authLoading = useAuthLoading();
  console.log(isAuthenticated);

  if(authLoading) return <h1>Loading.</h1>;

  if(!authLoading && !isAuthenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
}
