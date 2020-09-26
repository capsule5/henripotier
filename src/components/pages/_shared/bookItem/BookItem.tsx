
import React from 'react'
import { PATHS } from 'Src/config/nav'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import { Book } from 'Src/types'
import styles from './BookItem.module.scss'

type Props = Book

const BookItem: React.FC<Props> = ({
  isbn, title, cover, priceFmt, synopsisShort,
}) => {
  const styleCover = (() => {
    return {
      backgroundImage: `url('${cover}')`,
    }
  })()


  return (
    <Link to={ `${PATHS.books}/${slugify(title)}` } key={ isbn } className={ `${styles.BookItem}` }>
      <div>
        <div className={ `${styles.cover}` } style={ styleCover }>
          <div className={ styles.price }>{ priceFmt }</div>
        </div>
        <div className={ `${styles.content}` }>
          <div>
            <div className={ styles.title }><strong>{title}</strong></div>
          </div>
          <div className={ styles.synopsis }>
            {synopsisShort}
          </div>
        </div>
        {}
      </div>
    </Link>
  )
}

export default BookItem
