
import React from 'react'
import { StateProvider } from 'Store/index'
import { initialState, reducer } from 'Src/store/reducers'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddToCartBtn from 'Cmp/pages/_shared/cartBtns/AddToCartBtn'
import Cart from 'Cmp/pages/cart/Cart'

test('add/remove items to cart / empty cart', async () => {
  const { container } = render(
    <StateProvider initialState={ initialState } reducer={ reducer }>
      <AddToCartBtn
        isbn="aa"
        title="my item"
        cover="cover.jpg"
        price={ 1234 }
      />
      <Cart />
    </StateProvider>,
  )
  userEvent.click(screen.getByText(/Ajouter au panier/i))

  // item with its price is displayed
  expect(screen.getByText(/my item/i)).toBeInTheDocument()
  await waitFor(() => screen.getAllByText(/1234/i))
  expect(container.querySelector('div[class="total"]')).toHaveTextContent(/1234/i)
  
  // adding the same item, price doubles
  userEvent.click(container.querySelector('[data-test-id="add"]'))
  await waitFor(() => screen.getAllByText(/2468/i))
  expect(container.querySelector('div[class="total"]')).toHaveTextContent(/2468/i)
  
  // removing 1 item, one left
  userEvent.click(container.querySelector('[data-test-id="remove"]'))
  await waitFor(() => screen.getAllByText(/1234/i))
  expect(container.querySelector('div[class="total"]')).toHaveTextContent(/1234/i)
  
  // removing the one left, empty cart
  userEvent.click(container.querySelector('[data-test-id="remove"]'))
  await waitFor(() => screen.getByText('votre panier est vide'))
  expect(screen.getByText('votre panier est vide')).toBeInTheDocument()
})
