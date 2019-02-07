import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';

import { addMovieToWishlist } from '../actions';

class MovieDetail extends Component {
  addMovieToWishlistButtonPress() {
    //console.log(this.props.movie);
    this.props.addMovieToWishlist(this.props.movie);
  }
  render() {
    const {
      original_title,
      overview,
      poster_path,
      vote_average,
      //backdrop_path,
    } = this.props.movie;
    const {
      headerContentStyle,
      headerTextStyle,
      imageStyle,
      reviewTextStyle,
    } = styles;

    return (
      <Card>
        <CardSection>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w342${poster_path}` }}
            style={imageStyle}
          />
        </CardSection>
        <CardSection>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{original_title}</Text>
            <Text style={reviewTextStyle}>{vote_average}/10</Text>
            <Text>{overview}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Button onPress={this.addMovieToWishlistButtonPress.bind(this)}>
            Add to Wishlist
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: '800',
  },
  imageStyle: {
    height: 550,
    flex: 1,
    width: null,
  },
  reviewTextStyle: {
    fontWeight: '800',
  },
};

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
  };
};

export default connect(
  mapStateToProps,
  { addMovieToWishlist }
)(MovieDetail);
