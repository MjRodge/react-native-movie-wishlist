import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import { Header } from './components/common';
import MovieList from './components/movieList';

class App extends Component {
  render() {
    const reduxStore = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={reduxStore}>
        <View style={{ flex: 1 }}>
          <Header headerTitle={'Movie Wishlist'} />
          <MovieList />
        </View>
      </Provider>
    );
  }
}

export default App;
