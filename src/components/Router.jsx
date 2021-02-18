import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <Route path="/" exact component={Home} />
        ) : (
          <Route path="/" exact component={Auth} />
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
