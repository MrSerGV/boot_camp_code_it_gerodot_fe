import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import placesToShowReducer from './places-to-show/places-to-show.reducer';
import promiseReducer from './promise/promise.reducer';
import userReducer from './user/user.reducer';
import historyReducer from './history/history.reducer';

const rootReducer = combineReducers({
  placesToShow: placesToShowReducer,
  promises: promiseReducer,
  user: userReducer,
  history: historyReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;