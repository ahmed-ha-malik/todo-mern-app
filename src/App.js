import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from './pages/Welcome';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
