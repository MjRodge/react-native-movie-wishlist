import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import firebaseConfig from '../firebaseConfig';
import RouterComponent from './router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const reduxStore = createStore(reducers, applyMiddleware(ReduxThunk));
    return (
      <Provider store={reduxStore}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
