import { all, fork } from 'redux-saga/effects';

import watchGetUsersSaga from './watchers/getUsers';
import watchGetPostComponentData from './watchers/getPostComponentData';


export default function* root() {
  yield all([
    fork(watchGetUsersSaga),
    fork(watchGetPostComponentData)
  ]);
}
