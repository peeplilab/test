import { all, fork } from 'redux-saga/effects';

import watchGetUsersSaga from './watchers/getUsersLog';

export default function* root() {
  yield all([
    fork(watchGetUsersSaga),
  ]);
}
