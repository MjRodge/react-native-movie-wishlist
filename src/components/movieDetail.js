import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, ConfirmModal } from './common';

import { addMovieToWishlist, removeMovieFromWishlist } from '../actions';

class MovieDetail extends Component {
  state = {
    deleteModalVisible: false,
  };

  onAccept() {
    const uid = this.props.movie;
    this.props.removeMovieFromWishlist(uid);
    this.setState({ deleteModalVisible: false });
  }
  onDecline() {
    this.setState({ deleteModalVisible: false });
  }

  addMovieToWishlistButtonPress() {
    this.props.addMovieToWishlist(this.props.movie);
  }
  removeMovieFromWishlistButtonPress() {
    //opens confirmaion modal
    this.setState({
      deleteModalVisible: !this.state.deleteModalVisible,
    });
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
          {this.props.discover ? (
            <Button onPress={this.addMovieToWishlistButtonPress.bind(this)}>
              Add to Wishlist
            </Button>
          ) : (
            <Button
              onPress={this.removeMovieFromWishlistButtonPress.bind(this)}
            >
              Remove from Wishlist
            </Button>
          )}
        </CardSection>
        <ConfirmModal
          modalVisible={this.state.deleteModalVisible}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete movie from wishlist?
        </ConfirmModal>
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
  { addMovieToWishlist, removeMovieFromWishlist }
)(MovieDetail);
