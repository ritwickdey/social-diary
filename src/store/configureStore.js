import { createStore, combineReducers } from 'redux';
import { blogReducers } from '../reducers/blogs';

export const store = () =>
  createStore(
    combineReducers({
      blog: blogReducers
    })
  );
