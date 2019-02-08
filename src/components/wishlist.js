import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import MovieDetail from './movieDetail';

class Wishlist extends Component {
  render() {
    return (
      <FlatList
        data={this.props.wishlist}
        renderItem={({ item }) => <MovieDetail movie={item} />}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  const wishlist = _.map(state.movies.wishlist, (val, uid) => {
    return { ...val, uid };
  });
  return { wishlist };
};

export default connect(
  mapStateToProps,
  null
)(Wishlist);
