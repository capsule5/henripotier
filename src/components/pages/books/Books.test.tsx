
import React from 'react'
import { StateProvider } from 'Store/index'
import { initialState, reducer } from 'Src/store/reducers'
import { render, fireEvent, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Books from './Books'

const state = {
  ...initialState,
  books: {
    data: [
      { isbn: '0', title: 'abc', synopsis: '-' },
      { isbn: '1', title: 'def', synopsis: '-' },
    ],
  },
}

test('render books / search by title', async () => {
  const history = createBrowserHistory()
  const { getByPlaceholderText } = render(
    <Router history={ history }>
      <StateProvider initialState={ state } reducer={ reducer }>
        <Books />
      </StateProvider>
    </Router>,
  )

  const searchInput = getByPlaceholderText(/Recherche/i)
  
  // search ko
  fireEvent.change(searchInput, { target: { value: 'xxx' } })
  expect(screen.getByText(/Aucun livre ne correspond à votre recherche/i)).toBeInTheDocument()

  // search ok
  fireEvent.change(searchInput, { target: { value: 'abc' } })
  expect(screen.getByText(/abc/i)).toBeInTheDocument()
})
