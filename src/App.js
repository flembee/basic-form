import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import './App.css';

import { Login, Home, } from './pages'
import { EditForm, PrivateRoute, UserView } from './components'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/login" component={Login}/>
          <PrivateRoute path="/form/:formId" component={EditForm}/>
          <Route exact path="/s/:formId" component={UserView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;