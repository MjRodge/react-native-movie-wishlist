//import component creation library
import React from 'react';
import { AppRegistry, View } from 'react-native';

//import components
import Header from './src/components/header';
import MovieList from './src/components/movieList';

//create a component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerTitle={'Movie Wishlist'} />
      <MovieList />
    </View>
  );
};

//render to device
AppRegistry.registerComponent('MovieListApp', () => App);
