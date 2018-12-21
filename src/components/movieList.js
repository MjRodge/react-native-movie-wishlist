import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import { getMoviesNewReleases } from '../actions';

import MovieDetail from './movieDetail';

class MovieList extends Component {
  componentWillMount() {
    this.props.getMoviesNewReleases();
  }

  renderMovies() {
    return this.props.movies.map(movie => (
      <MovieDetail key={movie.id} movie={movie} />
    ));
  }

  render() {
    //console.log(this.state);
    return <ScrollView>{this.renderMovies()}</ScrollView>;
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
