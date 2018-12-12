import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import MovieDetail from './movieDetail';

class MovieList extends Component {
  state = { movies: [] };

  componentWillMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=fa6bde084211bd28b4ec784ac6a0acb9&language=en-US&page=1'
      )
      .then(response => this.setState({ movies: response.data.results }));
  }

  renderMovies() {
    return this.state.movies.map(movie => (
      <MovieDetail key={movie.id} movie={movie} />
    ));
  }

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderMovies()}</ScrollView>;
  }
}

export default MovieList;
