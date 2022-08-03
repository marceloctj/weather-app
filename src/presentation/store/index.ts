import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { reducers } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancers = [];

if (__DEV__ && console?.tron) {
  enhancers.push(console.tron.createEnhancer());
}

export const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
  enhancers,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
