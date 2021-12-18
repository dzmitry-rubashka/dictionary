import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
  isLoading: false,
  error: null,
  info: {},
}

const resultPageReducer = handleActions(
  {
    [actions.GET_WORD_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.GET_WORD_SUCCESS]: (state, {payload}) => ({
      ...state,
      info: payload.response,
      isLoading: false,
    }),

    [actions.GET_WORD_FAIL]: (state, {payload}) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),

  },
  defaultState
)

export default resultPageReducer;
