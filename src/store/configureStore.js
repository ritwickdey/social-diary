import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { storyReducers } from '../reducers/stories';
import { filterBlogReducers } from '../reducers/filters';
import { userReducers } from '../reducers/user';

export const store = () =>
  createStore(
    combineReducers({
      blogs: storyReducers,
      filters: filterBlogReducers,
      user: userReducers
    }),
    applyMiddleware(thunk)
  );
