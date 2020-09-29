import { reducer, actionTypes } from './cart'

const initialState = {
  isLoading: false,
  items: [],
  offers: [],
}

describe('cart reducer', () => {
  it('add item', () => {
    const payload = {
      items: [
        { isbn: 'aa' },
      ],
    }
    const action = { type: actionTypes.ADD, payload }
    expect(reducer(initialState, action)).toEqual({ ...initialState, items: payload.items })
  })
  it('remove item', () => {
    const payload = {
      items: [],
    }
    const action = { type: actionTypes.REMOVE, payload }
    expect(reducer(initialState, action)).toEqual({ ...initialState, items: payload.items })
  })
  it('handle offers', () => {
    const payload = {
      offers: [],
    }
    let action = { type: actionTypes.GET_OFFERS_REQUEST }
    expect(reducer(initialState, action)).toEqual({ ...initialState, offers: [], isLoading: true })
    action = { type: actionTypes.GET_OFFERS_SUCCESS, payload }
    expect(reducer(initialState, action)).toEqual({ ...initialState, offers: payload.offers })
    action = { type: actionTypes.GET_OFFERS_FAILURE }
    expect(reducer(initialState, action)).toEqual({ ...initialState, offers: [], isLoading: false })
  })
})
