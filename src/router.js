import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';

import MovieList from './components/movieList';
import Wishlist from './components/wishlist';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" initial />
        </Scene>
        <Scene key="main">
          <Scene
            key="movieList"
            component={MovieList}
            title="Movie Listings"
            rightTitle="My List"
            onRight={() => Actions.wishlist()}
          />
          <Scene key="wishlist" title="Wishlist" component={Wishlist} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
