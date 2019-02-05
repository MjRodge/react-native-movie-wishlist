import {
  email_changed,
  password_changed,
  login_user_success,
  login_user_fail,
  login_user,
} from '../actions/types';

const initial_state = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = initial_state, action) => {
  console.log(action);
  switch (action.type) {
    case email_changed:
      return { ...state, email: action.payload };
    case password_changed:
      return { ...state, password: action.payload };
    case login_user:
      return { ...state, loading: true, error: '' };
    case login_user_success:
      return {
        ...state,
        user: action.payload,
        error: '',
        loading: false,
        email: '',
        password: '',
      };
    case login_user_fail:
      return {
        ...state,
        error: 'Authentication Failed',
        password: '',
        loading: false,
      };
    default:
      return state;
  }
};
