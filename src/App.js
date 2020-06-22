import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Contacts } from '@pages';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contacts" component={Contacts} />
  </Switch>
);

export default App;
