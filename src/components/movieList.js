import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { getMoviesNewReleases } from '../actions';

import MovieDetail from './movieDetail';

class MovieList extends Component {
  componentWillMount() {
    this.props.getMoviesNewReleases();
  }

  render() {
    return (
      <FlatList
        data={this.props.movies}
        renderItem={({ item }) => <MovieDetail movie={item} />}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
  };
};

export default connect(
  mapStateToProps,
  { getMoviesNewReleases }
)(MovieList);
