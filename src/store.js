import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import createDebounce from 'redux-debounced';
import comments from './reducers/commentReducer';
import filter from './reducers/filterReducer';

const store = createStore(
  combineReducers({
    comments,
    filter,
  }),
  applyMiddleware(
    createDebounce(),
    thunk,
    promise(),
    logger(),
  ),
);

export default store;
