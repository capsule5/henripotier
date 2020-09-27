import React from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from 'Store/index'
import { getBookBySlug } from 'Store/selectors/books'
import { Book } from 'Src/types'
import uuid from 'uuid'
import Grid from '@material-ui/core/Grid'
import AddToCartBtn from 'Cmp/pages/_shared/cartBtns/AddToCartBtn'
import styles from './BookDetail.module.scss'

interface Param {
  slug:string
}

const BookDetail: React.FC = () => {
  const [ { books } ] = useStore()
  const { slug } = useParams<Param>()
  const {
    isbn, title, cover, price, priceFmt, synopsis,
  } : Book = getBookBySlug(slug)(books)
  
  if (!isbn) return null

  return (
    <section className={ styles.BookDetail }>
      <h1>{title}</h1>
      
      <Grid container spacing={ 2 }>
        <Grid md={ 3 } xs={ 12 } item>
          
          <img src={ cover } alt="" className={ styles.cover } />
          <AddToCartBtn
            isbn={ isbn }
            title={ title }
            cover={ cover }
            price={ price }
            className="cta cta--fullWidth"
          />
        </Grid>
        <Grid md={ 9 } xs={ 12 } item>
          <div>Prix : <strong>{priceFmt}</strong></div>
          {synopsis.map((s) => <p key={ uuid() }>{s}</p>)}
        </Grid>
      </Grid>
    </section>
  )
}

export default BookDetail
