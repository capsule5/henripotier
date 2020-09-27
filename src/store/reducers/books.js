import { callApi } from 'Store/helpers'

const actionTypes = {
  FETCH_BOOKS_REQUEST: 'FETCH_BOOKS_REQUEST',
  FETCH_BOOKS_SUCCESS: 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_FAILURE: 'FETCH_BOOKS_FAILURE',
}

// ------------------------------
// REDUCER
// ------------------------------

export const initialState = {
  isLoading: false,
  data: [],
}

export const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.FETCH_BOOKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_BOOKS_SUCCESS:
    
      return {
        ...state,
        isLoading: false,
        data: payload.data,
      }
    case actionTypes.FETCH_BOOKS_FAILURE:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}

// ------------------------------
// ACTIONS
// ------------------------------

const fetch = async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_BOOKS_REQUEST })
  const params = {
    method: 'GET',
    endpoint: 'books',
  }
  const { response, error } = await callApi(params)
  if (response) {
    const { data } = response
    dispatch({ type: actionTypes.FETCH_BOOKS_SUCCESS, payload: { data } })
  } else {
    dispatch({ type: actionTypes.FETCH_BOOKS_FAILURE })
    console.log(error)
  }
}

export const booksActions = {
  fetch,
}
