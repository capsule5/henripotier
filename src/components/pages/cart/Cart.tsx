import React, { useEffect } from 'react'
import CartBox from 'Cmp/pages/_shared/cartBox/CartBox'
import Grid from '@material-ui/core/Grid'
import { useStore } from 'Store/index'
import {
  getItemsFmt, getTotal, getIsbns, getBestOffer, getTotalAfterDiscount,
} from 'Src/store/selectors/cart'
import { cartActions } from 'Src/store/reducers/cart'
import styles from './Cart.module.scss'

const Cart : React.FC = () => {
  const [ { cart }, dispatch ] = useStore()
  const cartItems = getItemsFmt(cart)
  const isbns = getIsbns(cart)
  const { totalFmt } = getTotal(cart)
  const { discountFmt } = getBestOffer(cart)
  const { totalADFmt } = getTotalAfterDiscount(cart)

  useEffect(() => {
    if (isbns !== '') {
      cartActions.getOffers(dispatch, { isbns })
    }
  }, [ isbns ])

  return (
    <section className={ styles.Cart }>
      <h1>Mon Panier</h1>
      
      <Grid container>
        <Grid md={ 6 } xs={ 12 } item>
          <CartBox
            items={ cartItems }
            totalFmt={ totalFmt }
            discountFmt={ discountFmt }
            totalADFmt={ totalADFmt }
          />
        </Grid>
      </Grid>
     
    </section>
  )
}

export default Cart
