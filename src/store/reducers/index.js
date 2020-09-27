import * as booksStore from 'Src/store/reducers/books'
import * as cartStore from 'Src/store/reducers/cart'

export const initialState = {
  books: booksStore.initialState,
  cart: cartStore.initialState,
}

export const reducer = ({
  books, cart,
}, action) => {
  console.log(action)
  return {
    books: booksStore.reducer(books, action),
    cart: cartStore.reducer(cart, action),
  }
}
