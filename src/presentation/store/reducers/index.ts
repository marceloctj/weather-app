import { combineReducers } from '@reduxjs/toolkit';
import { homeReducer } from './home';

export const reducers = combineReducers({
  home: homeReducer,
});
