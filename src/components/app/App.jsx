import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../home/Home';
import Characters from '../../containers/characters/Characters';
import Quest from '../../containers/quests/Quest';
import styles from './App.css';
import QuestForest from '../quests/QuestForest';
import QuestSwamp from '../quests/QuestSwamp';
import QuestVolcano from '../quests/QuestVolcano';
import { AuthProvider } from '../../state/AuthContext';
import PrivateRoute from '../auth/PrivateRoute';

export default function App() {
  return (
    <div className={styles.App}>
      <h1>Save the Farm!</h1>
      <Router>
        <AuthProvider>
          <hr/>
          <h3>Inside the Router</h3>
          <Switch>
            <Route
              exact path="/"
              component={Home}
            />
            <PrivateRoute
              exact path="/characters"
              component={Characters}
            />
            <PrivateRoute
              exact path="/quests"
              component={Quest}
            />
            <PrivateRoute
              exact path="/quests/forest"
              component={QuestForest}
            />
            <PrivateRoute
              exact path="/quests/swamp"
              component={QuestSwamp}
            />
            <PrivateRoute
              exact path="/quests/volcano"
              component={QuestVolcano}
            />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}
