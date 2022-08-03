import { all, fork } from 'redux-saga/effects';
import { homeSaga } from './home';

export function* rootSaga() {
  yield all([fork(homeSaga)]);
}
