import React from 'react'
import { Item } from 'Src/types'
import AddToCartBtn from 'Cmp/pages/_shared/cartBtns/AddToCartBtn'
import RemoveFromCartBtn from 'Cmp/pages/_shared/cartBtns/RemoveFromCartBtn'
import { sortBy } from 'Utils/array'
import styles from './CartBox.module.scss'

interface Props{
  items:Item[]
  totalFmt:string
  discountFmt:string
  totalADFmt:string
}

const CartBox : React.FC<Props> = ({
  items, totalFmt, discountFmt, totalADFmt,
}) => {
  const itemsSorted = sortBy(items, 'isbn')

  const renderItems = () => {
    return itemsSorted.map(({
      isbn, title, qty, subtotalFmt, cover, price,
    }) => {
      return (
        <div className={ styles.item } key={ isbn }>
          <img src={ cover } alt="" className={ styles.cover } />
          <div>
            <RemoveFromCartBtn isbn={ isbn } />
          </div>
          <div className={ styles.qty }> {qty} </div>
          <div>
            <AddToCartBtn
              isbn={ isbn }
              title={ title }
              cover={ cover }
              price={ price }
              isSmall
            />
          </div>
          <div className={ styles.title }>{title}</div>
          <div className={ styles.subtotal }>{subtotalFmt}</div>
        </div>
      )
    })
  }

  const renderTotal = () => {
    return (
      <div className={ styles.sum }>
        <div className={ `${styles.total}` }>{totalFmt}</div>
        {totalFmt !== totalADFmt && (
        <>
          <div className={ `${styles.discount}` }>{discountFmt}</div>
          <div className={ `${styles.totalAD}` }>{totalADFmt}</div>
        </>
        )}
        
      </div>
    )
  }
  
  
  if (!items.length) return <div>votre panier est vide</div>

  return (
    <div className={ `${styles.CartBox}` }>
      <div className={ styles.items }>
        {renderItems()}
      </div>
      {renderTotal()}
    </div>
  )
}

export default CartBox
