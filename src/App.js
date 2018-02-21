import React, { Component } from 'react';
import { Provider } from 'react-redux';
import moment from 'moment';
import 'react-dates/initialize';
// import logo from './logo.svg';
import 'react-dates/lib/css/_datepicker.css';

import './App.css';
import { AppRouter } from './routes/AppRouter';
import firebase from './firebase/firestore';

import { store } from './store/configureStore';
import { startAddBlog } from './actions/blogs';
import { loginUser, logoutUser } from './actions/user';

const appStore = store();

appStore.subscribe(() => console.log(appStore.getState()));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    appStore.dispatch(loginUser(user));
    console.log('user logged in', user);
  } else {
    console.log('logged out');
    appStore.dispatch(logoutUser());
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
