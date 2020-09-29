import React from 'react'
import slugify from 'slugify'
import { Book } from 'Src/types'
import styles from './Search.module.scss'

interface Props{
  books:Book[]
  onSearch:(res: Book[]) => void
}

const Search: React.FC<Props> = ({ books, onSearch }) => {
  const fmt = (val) => slugify(val.toLowerCase())

  const search = (e) => {
    const { value } = e.target
    const res = books.filter(({ title }) => fmt(title).includes(fmt(value)))
    onSearch(res)
  }
  
  return (
    <input onChange={ search } placeholder="Recherche par titre" className={ styles.Search } />
  )
}

export default Search
