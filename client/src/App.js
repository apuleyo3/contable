import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './containers/Dashboard';
import Formulario from './components/ProductComponents/Formulario';
import Productos from './containers/Productos';


function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} /> 
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/formulario' component={Formulario} />
          <Route exact path='/productos' component={Productos} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
