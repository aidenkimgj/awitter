import React, { useState } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import { Container } from 'reactstrap';
import Navigation from './Navigation';
import Profile from '../routes/Profile';

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Container id="main-body">
      <Router>
        {isLoggedIn && <Navigation />}
        <Switch>
          {isLoggedIn ? (
            <>
              <Route path="/" exact component={Home} />
              <Route path="/profile" exact component={Profile} />
              {/* <Redirect from="*" to="/" /> */}
            </>
          ) : (
            <>
              <Route path="/" exact component={Auth} />
              <Redirect from="*" to="/" />
            </>
          )}
        </Switch>
      </Router>
    </Container>
  );
};

export default AppRouter;
