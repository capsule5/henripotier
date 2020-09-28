import React from 'react'
import { useStore } from 'Store/index'
import BooksList from 'Cmp/pages/_shared/booksList/BooksList.tsx'
import { Helmet } from 'react-helmet'
import { getBooksFmt } from 'Store/selectors/books'
import styles from './Books.module.scss'

const Books = () => {
  const [ { books } ] = useStore()
  const booksFmt = getBooksFmt(books)
  return (
    <>
      <Helmet>
        <title>Henri Potier</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
      </Helmet>
      <section className={ styles.Books }>
        <h1>La bibliothèque fantastique</h1>
        <BooksList books={ booksFmt } />
      </section>
    </>
  )
}

export default Books
