import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection, Button } from './common';

const MovieDetail = ({ movie }) => {
  const {
    original_title,
    overview,
    poster_path,
    vote_average,
    backdrop_path,
  } = movie;
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
          source={{ uri: 'https://image.tmdb.org/t/p/w342' + poster_path }}
          style={imageStyle}
        />
      </CardSection>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{original_title}</Text>
          <Text style={reviewTextStyle}>{vote_average}</Text>
          <Text>{overview}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button>Add to Wishlist</Button>
        <Button>Already Seen</Button>
      </CardSection>
    </Card>
  );
};

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

export default MovieDetail;
