import { callApi } from 'Store/helpers'

export const actionTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  GET_OFFERS_REQUEST: 'GET_OFFERS_REQUEST',
  GET_OFFERS_SUCCESS: 'GET_OFFERS_SUCCESS',
  GET_OFFERS_FAILURE: 'GET_OFFERS_FAILURE',
}

// ------------------------------
// REDUCER
// ------------------------------

export const initialState = {
  isLoading: false,
  items: [],
  offers: [],
}

export const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.ADD:
    case actionTypes.REMOVE:
      return {
        ...state,
        items: payload.items,
      }

    case actionTypes.GET_OFFERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        offers: [],
      }
    case actionTypes.GET_OFFERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        offers: payload.offers,
      }
    case actionTypes.GET_OFFERS_FAILURE:
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

const add = (dispatch, { items, item }) => {
  const newItems = items.concat([ item ])
  dispatch({ type: actionTypes.ADD, payload: { items: newItems } })
}
const remove = (dispatch, { items, isbn }) => {
  const removeItem = items.find((item) => item.isbn === isbn)
  const newItems = items.filter((item) => item !== removeItem)
  dispatch({ type: actionTypes.REMOVE, payload: { items: newItems } })
}

const getOffers = async (dispatch, { isbns }) => {
  dispatch({ type: actionTypes.GET_OFFERS_REQUEST })
  const params = {
    method: 'GET',
    endpoint: `books/${isbns}/commercialOffers`,
  }
  const { response, error } = await callApi(params)
  if (response) {
    const { data: { offers } } = response
    dispatch({ type: actionTypes.GET_OFFERS_SUCCESS, payload: { offers } })
  } else {
    dispatch({ type: actionTypes.GET_OFFERS_FAILURE })
    console.log(error)
  }
}

export const cartActions = {
  add,
  remove,
  getOffers,
}
