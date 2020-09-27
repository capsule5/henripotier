
import React from 'react'
import { PATHS } from 'Src/config/nav'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import { Book } from 'Src/types'
import AddToCartBtn from 'Cmp/pages/_shared/cartBtns/AddToCartBtn'
import styles from './BookItem.module.scss'

type Props = Book

const BookItem: React.FC<Props> = ({
  isbn, title, cover, price, priceFmt, synopsisShort,
}) => {
  const styleCover = (() => {
    return {
      backgroundImage: `url('${cover}')`,
    }
  })()


  return (
    <div key={ isbn } className={ `${styles.BookItem}` }>
    
      <Link to={ `${PATHS.books}/${slugify(title)}` } className="silent">
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
      </Link>
      <AddToCartBtn
        className="cta cta--grey cta--fullWidth cta--small cta--upper"
        isbn={ isbn }
        title={ title }
        cover={ cover }
        price={ price }
      />
    </div>
  )
}

export default BookItem
