import React from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from 'Store/index'
import { getBookBySlug } from 'Store/selectors/books'
import { Book } from 'Src/types'
import uuid from 'uuid'
import styles from './BookDetail.module.scss'

interface Param {
  slug:string
}

const BookDetail: React.FC = () => {
  const [ { books } ] = useStore()
  const { slug } = useParams<Param>()
  const {
    title, cover, priceFmt, synopsis,
  } : Book = getBookBySlug(slug)(books)
  

  return (
    <section className={ styles.BookDetail }>
      <h1>{title} - {priceFmt}</h1>
      <img src={ cover } alt="" />
      <div>
        {synopsis.map((s) => <p key={ uuid() }>{s}</p>)}
      </div>
    </section>
  )
}

export default BookDetail
