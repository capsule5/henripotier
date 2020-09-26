import React from 'react'
import BookItem from 'Cmp/pages/_shared/bookItem/BookItem'
import Grid from '@material-ui/core/Grid'
import { Book } from 'Src/types'
import styles from './BooksList.module.scss'

interface Props{
  books:Book[],
  isGrided?:boolean
}

const BooksList : React.FC<Props> = ({ books }) => {
  return (
    <div className={ `${styles.BooksList}` }>
      <Grid container>
        {
          books.map((book:Book) => {
            return (
              <Grid xl={ 3 } lg={ 4 } md={ 6 } xs={ 12 } item key={ `${book.isbn}` }>
                <BookItem { ...book } />
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}

export default BooksList
