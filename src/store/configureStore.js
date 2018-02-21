import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { blogReducers } from '../reducers/blogs';
import { filterBlogReducers } from '../reducers/filters';
import { userReducers } from '../reducers/user';

export const store = () =>
  createStore(
    combineReducers({
      blogs: blogReducers,
      filters: filterBlogReducers,
      user: userReducers
    }),
    applyMiddleware(thunk)
  );
