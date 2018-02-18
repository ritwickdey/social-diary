import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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

appStore.dispatch(deleteBlog(2));
appStore.dispatch(deleteBlog(5));
appStore.dispatch(
  editBlog(7, {
    body: 'bla',
    title: 'foo title'
  })
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
