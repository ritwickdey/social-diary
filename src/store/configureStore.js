import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { storyReducers } from '../reducers/stories';
import { filterReducers } from '../reducers/filters';
import { userReducers } from '../reducers/user';

export const store = () =>
  createStore(
    combineReducers({
      stories: storyReducers,
      filters: filterReducers,
      user: userReducers
    }),
    applyMiddleware(thunk)
  );
