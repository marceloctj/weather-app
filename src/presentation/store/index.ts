import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { reducers } from './reducers';
import { rootSaga } from './sagas';

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  const sagaMiddleware = createSagaMiddleware();

  const enhancers = [];

  if (__DEV__ && console?.tron) {
    enhancers.push(console.tron.createEnhancer());
  }

  const newStore = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleware],
    enhancers,
    preloadedState,
  });

  sagaMiddleware.run(rootSaga);

  return newStore;
}

export type RootState = ReturnType<typeof reducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore();
