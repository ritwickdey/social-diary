import { createStore, combineReducers } from 'redux';
import { blogReducers } from '../reducers/blogs';
import { filterBlogReducers } from '../reducers/filters';

export const store = () =>
  createStore(
    combineReducers({
      blogs: blogReducers,
      filters: filterBlogReducers
    })
  );
