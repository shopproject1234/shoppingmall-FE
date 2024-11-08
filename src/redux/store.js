import { configureStore } from '@reduxjs/toolkit';
import sessionStorage from 'redux-persist/lib/storage/session';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import userReducer from './user'

const reducers = combineReducers({
  user: userReducer
});

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;