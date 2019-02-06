import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/loginForm';

import MovieList from './components/movieList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" initial />
        </Scene>
        <Scene key="main">
          <Scene key="movieList" component={MovieList} title="Movie Listings" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
