import React, { Component } from 'react';
import { Provider } from 'react-redux';
import moment from 'moment';
import 'react-dates/initialize';
// import logo from './logo.svg';
import 'react-dates/lib/css/_datepicker.css';

import './App.css';
import { AppRouter } from './routes/AppRouter';

import { store } from './store/configureStore';
import { addBlog, editBlog, deleteBlog } from './actions/blogs';
import {
  setDescOrder,
  setAscOrder,
  setEndDate,
  setFilterText,
  setStartDate,
  setSortByDate,
  setSortByTitle
} from './actions/filters';

const appStore = store();

appStore.subscribe(() => console.log(appStore.getState()));

appStore.dispatch(
  addBlog({
    id: 7,
    title: 'my Title',
    postedAt: moment().startOf('week').valueOf(),
    body: '........... ...............'
  })
);

appStore.dispatch(
  addBlog({
    id: 5,
    title: 'some Title 2',
    postedAt: moment().endOf('week').valueOf(),
    body: '........... 3 ...............'
  })
);

appStore.dispatch(
  addBlog({
    id: 5,
    title: 'my Blogging',
    postedAt: moment().valueOf(),
    body: 'foooooooooooo'
  })
);
// appStore.dispatch(setFilterText('hi'));
// appStore.dispatch(setDescOrder());
// appStore.dispatch(setStartDate(Date.now()));
// appStore.dispatch(setEndDate(Date.now()));
// appStore.dispatch(setSortByTitle());
// appStore.dispatch(setSortByDate());

// appStore.dispatch(deleteBlog(2));
// appStore.dispatch(deleteBlog(5));
// appStore.dispatch(
//   editBlog(7, {
//     body: 'bla',
//     title: 'foo title'
//   })
// );

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
