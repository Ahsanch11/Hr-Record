import * as types from '../constants';

export function fetchDataAttempt() {
  return {
    type: types.FETCH_DATA_ATTEMPT
  };
}
export function saveStudentAction(data) {
  return {
    type: types.SAVE_STUDENT_ACTION,
    payload: data
  };
}
export function fetchDataSuccess(data) {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload: data
  };
}

export function fetchDataFail(error) {
  return {
    type: types.FETCH_DATA_FAIL,
    payload: error
  };
}

export function fetchData(query) {
  return {
    type: types.FETCH_DATA,
    payload: {
      query
    }
  };
}
export function saveDataAttempt() {
  return {
    type: types.SAVE_DATA_ATTEMPT
  };
}
export function saveDataSuccess() {
  return {
    type: types.SAVE_DATA_SUCCESS
  };
}

export function saveDataFail(error) {
  return {
    type: types.SAVE_DATA_FAIL,
    payload: error
  };
}
export function resetSaveAction() {
  return {
    type: types.RESET_SAVE_ACTION
  };
}