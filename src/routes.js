import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import Form from './form';
const Routes = () => {
  return (
    <div>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/form" exact component={Form} />
    </Switch>
    </div>
  );
};

export default Routes;
