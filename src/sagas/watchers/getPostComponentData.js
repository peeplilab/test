import { takeLatest, call, put } from 'redux-saga/effects';

import { GET_POST_COMPONENT_DATA } from '../../constants';
import { post } from '../../lib/api';
import { setText } from '../../actions';

function* workerGetPostComponentData(action) {
  console.log(action, 'action object');
  let payload = {
    title: action.title,
    body: action.body,
    userId: 1,
  }
  const newText = yield call(post, 'https://jsonplaceholder.typicode.com/posts', payload);
  yield put(setText(newText.data));
}

export default function* watchGetPostComponentData() {
  yield takeLatest(GET_POST_COMPONENT_DATA, workerGetPostComponentData);
}
