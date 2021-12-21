import {takeEvery, call, put} from 'redux-saga/effects';
import * as actions from '../actions';

import {getWord} from '../api';

function* getWordWorker() {
  try {
    const response = yield call(getWord);
    yield put(actions.GET_WORD_SUCCESS(response.data))
  } catch (error) {
    yield put(actions.GET_WORD_FAIL('Error:', error))
  }
}

function* getWordWatcher() {
  yield takeEvery(actions.GET_WORD_REQUEST, getWordWorker)
}

export default getWordWatcher;