import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import { AppRouter } from './routes/AppRouter';

import { store } from './store/configureStore';
import { addBlog, editBlog, deleteBlog } from './actions/blogs';

const appStore = store();

appStore.subscribe(() => console.log(appStore.getState()));

appStore.dispatch(
  addBlog({
    id: 7,
    title: 'my Title',
    postedAt: 66,
    body: '........... ...............'
  })
);

appStore.dispatch(
  addBlog({
    id: 5,
    title: 'my Title 2',
    postedAt: 664,
    body: '........... 3 ...............'
  })
);

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
