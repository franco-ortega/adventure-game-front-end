import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../home/Home';

export default function App() {
  return (
    <>
      <h1>Save the Farm!</h1>
      <Router>
        <hr/>
        <h3>Inside the Router</h3>
        <Switch>
          <Route
            exact path="/"
            component={Home}
          />
        </Switch>
      </Router>
    </>
  );
}
