import { configureStore } from '@reduxjs/toolkit';

import { reducers } from './reducers';

const enhancers = [];

if (__DEV__ && console?.tron) {
  enhancers.push(console.tron.createEnhancer());
}

export const store = configureStore({
  reducer: reducers,
  middleware: [],
  enhancers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
