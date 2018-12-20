import { GET_MOVIES_NEW_RELEASES } from '../actions/types';

const initial_state = {
  movies: [],
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case GET_MOVIES_NEW_RELEASES:
      console.log(action.payload);
      return { ...state, movies: action.payload };

    default:
      return state;
  }
};
