import {
  GET_MOVIES_NEW_RELEASES,
  GET_MOVIES_NEW_RELEASES_SUCCESS,
  WISHLIST_FETCH_SUCCESS,
} from '../actions/types';

const initial_state = {
  movies: [],
  loading: false,
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case GET_MOVIES_NEW_RELEASES:
      //console.log(action.payload);
      return { ...state, loading: true };
    case GET_MOVIES_NEW_RELEASES_SUCCESS:
      //console.log(action.payload);
      return {
        ...state,
        loading: false,
        movies: [...state.movies, ...action.payload],
        //movies: action.payload,
      };
    case WISHLIST_FETCH_SUCCESS:
      console.log(action);
      return {
        ...state,
        wishlist: action.payload,
      };
    default:
      return state;
  }
};
