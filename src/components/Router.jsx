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

const AppRouter = ({ isLoggedIn, refreshUser, userObj }) => {
  const withProps = (Component, props) => {
    return matchProps => {
      return <Component {...props} {...matchProps} />;
    };
  };

  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Container id="main-body">
        <Switch>
          {isLoggedIn ? (
            <>
              <Route
                path="/"
                exact
                component={withProps(Home, { userObj: userObj })}
              />
              <Route
                path="/profile"
                exact
                component={withProps(Profile, {
                  userObj: userObj,
                  refreshUser: refreshUser,
                })}
              />
              {/* <Redirect from="*" to="/" /> */}
            </>
          ) : (
            <>
              <Route path="/" exact component={Auth} />
              <Redirect from="*" to="/" />
            </>
          )}
        </Switch>
      </Container>
    </Router>
  );
};

export default AppRouter;
