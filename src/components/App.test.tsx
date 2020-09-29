import React from 'react'
import { StateProvider } from 'Store/index'
import { initialState, reducer } from 'Src/store/reducers'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'


test('full app rendering/navigating', () => {
  const history = createBrowserHistory()
  render(
    <Router history={ history }>
      <StateProvider initialState={ initialState } reducer={ reducer }>
        <App />
      </StateProvider>
    </Router>,
  )

  expect(screen.getByText(/Les derniers livres/i)).toBeInTheDocument()

  userEvent.click(screen.getByText(/Mon panier/i))
  expect(screen.getByText(/votre panier est vide/i)).toBeInTheDocument()

  userEvent.click(screen.getByText(/Découvrez les livres/i))
  expect(screen.getByText(/La bibliothèque fantastique/i)).toBeInTheDocument()

  history.push('/some/bad/route')
  expect(screen.getByText(/404/i)).toBeInTheDocument()
})


