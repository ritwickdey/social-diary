import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { storyReducers } from '../reducers/stories';
import { filterReducers } from '../reducers/filters';
import { userReducers } from '../reducers/user';
import { appStatusReducers } from '../reducers/appStatus';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = () =>
  createStore(
    combineReducers({
      stories: storyReducers,
      filters: filterReducers,
      user: userReducers,
      appStatus: appStatusReducers
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
