import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../home/Home';
import Characters from '../../containers/characters/Characters';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.App}>
      <h1>Save the Farm!</h1>
      <Router>
        <hr/>
        <h3>Inside the Router</h3>
        <Switch>
          <Route
            exact path="/"
            component={Home}
          />
          <Route
            exact path="/characters"
            component={Characters}
          />
        </Switch>
      </Router>
    </div>
  );
}
