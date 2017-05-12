// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_LIST_ATTEMPT = 'FETCH_LIST_ATTEMPT'
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS'
export const FETCH_LIST_FAIL = 'FETCH_LIST_FAIL'

// ------------------------------------
// Actions
// ------------------------------------
export function fetchListAttempt () {
  return { type : FETCH_LIST_ATTEMPT }
}
export function fetchListSuccess (list) {
  return { type : FETCH_LIST_SUCCESS, list }
}
export function fetchListFail (failMessage) {
  return { type : FETCH_LIST_ATTEMPT, failMessage }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const fetchList = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  fetchList
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_LIST_ATTEMPT]: (state, action) => {
    return ({ ...state, list: null, failMessage: null, fetching: true })
  },
  [FETCH_LIST_SUCCESS]: (state, action) => {
    return ({ ...state, list: action.list, failMessage: null, fetching: null })
  },
  [FETCH_LIST_FAIL]: (state, action) => {
    return ({ ...state, list: null, failMessage: action.failMessage, fetching: null })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { list: null, failMessage: null, fetching: false }
export default function blueBoxReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
