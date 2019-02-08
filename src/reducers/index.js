import { combineReducers } from 'redux';
import MovieListReducer from './MovieListReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer,
  movies: MovieListReducer,
});
