import axios from 'axios';
import firebase from 'firebase';

import {
  GET_MOVIES_NEW_RELEASES,
  GET_MOVIES_NEW_RELEASES_SUCCESS,
  ADD_MOVIE_TO_WISHLIST,
} from './types';

export const getMoviesNewReleases = page => {
  return dispatch => {
    dispatch({ type: GET_MOVIES_NEW_RELEASES });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=fa6bde084211bd28b4ec784ac6a0acb9&language=en-US&page=${page}`
      )
      .then(response => {
        getMoviesNewReleasesSuccess(dispatch, response.data.results);
      });
  };
};

export const getMoviesNewReleasesSuccess = (dispatch, movieList) => {
  dispatch({
    type: GET_MOVIES_NEW_RELEASES_SUCCESS,
    payload: movieList,
  });
};

export const addMovieToWishlist = movie => {
  const { currentUser } = firebase.auth();
  console.log(movie);

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/wishlist`)
      .push(movie)
      .then(() => {
        dispatch({ type: ADD_MOVIE_TO_WISHLIST });
      });
  };
};
