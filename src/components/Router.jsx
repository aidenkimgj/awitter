import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import { Container } from 'reactstrap';
import BestLocations from '../routes/BestLocations';

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Container id="main-body">
      <Router>
        <Switch>
          {isLoggedIn ? (
            <Route path="/" exact component={Home} />
          ) : (
            <Route path="/" exact component={Auth} />
          )}
          <Route path="/bestlocations" exact component={BestLocations} />
        </Switch>
      </Router>
    </Container>
  );
};

export default AppRouter;
