import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_USERS_SAGA } from '../../constants';
import { setUsers } from '../../actions';
import { get } from '../../lib/api';

function* workerGetUsersSaga() {
  const users = yield call(get, 'https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f');
  yield put(setUsers(users.result.auditLog));
}

export default function* watchGetUsersSaga() {
  yield takeLatest(GET_USERS_SAGA, workerGetUsersSaga);
}
