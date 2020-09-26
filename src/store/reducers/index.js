import * as booksStore from 'Src/store/reducers/books'

export const initialState = {
  books: booksStore.initialState,
}

export const reducer = ({
  books,
}, action) => {
  return {
    books: booksStore.reducer(books, action),
  }
}
