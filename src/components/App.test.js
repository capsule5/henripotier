import React from 'react'
import ReactDOM from 'react-dom'
import { StateProvider } from 'Store'
import { initialState, reducer } from 'Src/store/reducers'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


it('renders without crashing', () => {
  const root = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <StateProvider initialState={ initialState } reducer={ reducer }>
        <App />
      </StateProvider>
    </BrowserRouter>,
    root,
  )
  expect(root.querySelector('.site')).toBeTruthy()
  ReactDOM.unmountComponentAtNode(root)
})
