import React from 'react'
import { useStore } from 'Store/index'
import { cartActions } from 'Store/reducers/cart'

interface Props {
  isbn:string,
  className?:string,
}

const RemoveFromCartBtn: React.FC<Props> = ({
  isbn, className,
}) => {
  const [ { cart: { items } }, dispatch ] = useStore()
  const remove = () => {
    cartActions.remove(dispatch, { items, isbn })
  }

  return <button onClick={ remove } className={ className } data-test-id="remove">-</button>
}

export default RemoveFromCartBtn
