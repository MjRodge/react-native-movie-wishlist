import axios from 'axios';

import {
  GET_MOVIES_NEW_RELEASES,
  GET_MOVIES_NEW_RELEASES_SUCCESS,
} from './types';

export const getMoviesNewReleases = () => {
  return dispatch => {
    dispatch({ type: GET_MOVIES_NEW_RELEASES });

    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=fa6bde084211bd28b4ec784ac6a0acb9&language=en-US&page=1'
      )
      .then(response => {
        getMoviesNewReleasesSuccess(dispatch, response.data.results);
      });
  };
};

const getMoviesNewReleasesSuccess = (dispatch, movieList) => {
  dispatch({
    type: GET_MOVIES_NEW_RELEASES_SUCCESS,
    payload: movieList,
  });
};
