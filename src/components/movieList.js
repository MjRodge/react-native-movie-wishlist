import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { getMoviesNewReleases, wishlistFetch } from '../actions';

import MovieDetail from './movieDetail';

class MovieList extends Component {
  state = {
    pageCount: 1,
  };

  componentWillMount() {
    this.props.getMoviesNewReleases(this.state.pageCount);
  }
  componentDidMount() {
    this.props.wishlistFetch();
  }

  loadMoreMoviesNewReleases = () => {
    this.setState({ pageCount: this.state.pageCount + 1 }, () => {
      //console.log(this.state.pageCount);
      this.props.getMoviesNewReleases(this.state.pageCount);
      //console.log(this.props.movies);
    });
  };

  render() {
    return (
      <FlatList
        data={this.props.movies}
        renderItem={({ item }) => <MovieDetail movie={item} discover />}
        keyExtractor={item => item.id.toString()}
        onEndReached={this.loadMoreMoviesNewReleases}
        onEndReachedThreshold={0.1}
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
  { getMoviesNewReleases, wishlistFetch }
)(MovieList);
