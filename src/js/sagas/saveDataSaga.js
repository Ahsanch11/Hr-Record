import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';
import * as api from '../api';

export default function* fetchDataSaga(action) {
  try {
    const data = action.payload;
    yield put(actions.saveDataAttempt());
    yield call(delay, 1000);
    yield call(api.receiveStudentRecord,data) ;
    yield put(actions.saveDataSuccess());
    }catch (e) {
    yield put(actions.saveDataFail(e));   
  }
}
