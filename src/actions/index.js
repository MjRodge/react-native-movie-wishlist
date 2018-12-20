import { GET_MOVIES_NEW_RELEASES } from './types';

export const getMoviesNewReleases = () => {
  return {
    type: GET_MOVIES_NEW_RELEASES,
    payload: 'test',
  };
};
