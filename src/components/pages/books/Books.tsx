import React, { useEffect, useState } from 'react'
import { useStore } from 'Store/index'
import BooksList from 'Cmp/pages/_shared/booksList/BooksList.tsx'
import { Helmet } from 'react-helmet'
import { getBooksFmt } from 'Store/selectors/books'
import { Book } from 'Src/types'
import styles from './Books.module.scss'
import Search from './search/Search'

const Books:React.FC = () => {
  const [ { books } ] = useStore()
  const [ booksFiltered, setBooksFiltered ] = useState([])
  const booksFmt = getBooksFmt(books)
  
  useEffect(() => {
    setBooksFiltered(booksFmt)
  }, [ books ])

  const onSearch = (res:Book[]) => {
    setBooksFiltered(res)
  }

  return (
    <>
      <Helmet>
        <title>Henri Potier</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
      </Helmet>
      <section className={ styles.Books }>
        <h1>La bibliothèque fantastique</h1>
        <div className={ styles.searchWrapper }>
          <Search books={ booksFmt } onSearch={ onSearch } />
        </div>
        {
          booksFiltered.length
            ? <BooksList books={ booksFiltered } />
            : <div>Aucun livre ne correspond à votre recherche</div>
        }
        
      </section>
    </>
  )
}

export default Books
