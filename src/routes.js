import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import App from './App';
import Form from './form';

const Routes = () => {
  return (
    <div>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/form" exact component={Form} />
      <Route path="*" render={() => (<Redirect to="/" />)} />
    </Switch>
    </div>
  );
};

export default Routes;
