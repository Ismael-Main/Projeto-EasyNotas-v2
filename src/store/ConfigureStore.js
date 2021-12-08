import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import getLocalStorage from '../middleware/getLocalStorage';
import main from '../reducers/main';

const middleware = [...getDefaultMiddleware(getLocalStorage)];
const reducer = combineReducers({ main });

const store = configureStore({ reducer, middleware });

export default store;
