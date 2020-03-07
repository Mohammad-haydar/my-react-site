import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/Home/Home';
import Experience from './containers/Experience/Experience';

const App = () => {

  const routes = (
    <Switch>
      <Route path='/experience' component={Experience} />
      <Route path='/' exact component={Home} />
      <Redirect to='/' />
    </Switch>
  )


  return (
    <React.Fragment>
      {routes}
    </React.Fragment>
  );
}

export default App;
