import * as types from '../constants';

const initial = {
  isLoading1: false,
  error1: null,
  msg: null
};

export default function(state = initial, action) {

  switch (action.type) {
    case types.SAVE_DATA_ATTEMPT:
      return { ...state, isLoading: true };
    case types.SAVE_DATA_SUCCESS:

      return { ...state, isLoading: false, msg:'Save Successfully.'};
    case types.SAVE_DATA_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    case types.RESET_SAVE_ACTION:
      return { ...state, isLoading: false, error:null,msg:null};
    default:
      return state;
  }
}

