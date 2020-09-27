import { createSelector, defaultMemoize } from 'reselect'
import { euro, truncate } from 'Src/utils/text'
import slugify from 'slugify'

const booksSelector = (state) => state.data

export const getBooksFmt = createSelector(
  booksSelector,
  (books) => books.map((book) => {
    const { price, synopsis } = book
    return {
      ...book,
      priceFmt: euro(price),
      synopsisShort: truncate(synopsis[0], 200),
    }
  }),
)

export const getLatestBooks = defaultMemoize((count) => createSelector(
  getBooksFmt,
  (books) => books.slice(count - 1),
))

export const getBookBySlug = defaultMemoize((slug) => createSelector(
  getBooksFmt,
  (books) => books.find((p) => slugify(p.title) === slug) || {},
))

