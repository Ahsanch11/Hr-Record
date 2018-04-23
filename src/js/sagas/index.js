import { takeLatest, fork, all } from 'redux-saga/effects';
import * as types from '../constants';
import fetchDataSaga from './fetchDataSaga';
import saveDataSaga from './saveDataSaga';

function* watchFetchData() {
  yield takeLatest(types.FETCH_DATA, fetchDataSaga);
}
function* watchSaveData() {
  yield takeLatest(types.SAVE_STUDENT_ACTION, saveDataSaga);
}
export default function* rootSaga() {
  yield all([
    fork(watchFetchData),
    fork(watchSaveData)
    // another action listener,
  ]);
}
