import React from 'react'
import { useStore } from 'Store/index'
import { cartActions } from 'Store/reducers/cart'

interface Props {
  isbn:string,
  title:string,
  cover:string,
  price:number,
  className?:string
  isSmall?:boolean
}

const AddToCartBtn: React.FC<Props> = ({
  isbn, title, cover, price, className = 'cta', isSmall = false,
}) => {
  const [ { cart: { items } }, dispatch ] = useStore()
  const item = {
    isbn, title, cover, price,
  }

  const add = () => {
    cartActions.add(dispatch, { items, item })
  }

  if (isSmall) {
    return <button onClick={ add }>+</button>
  }

  return (
    <button
      className={ className }
      onClick={ add }
    >
      Ajouter au panier
    </button>
  )
}

export default AddToCartBtn
