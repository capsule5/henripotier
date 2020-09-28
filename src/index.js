// TODO:  clean unused ui
// TODO:  cart local storage

import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import { StateProvider } from 'Store'
import { initialState, reducer } from 'Src/store/reducers'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { THEME } from 'Src/config/theme'
import ScrollToTop from 'Cmp/utils/ScrollToTop'
import AppProvider from 'Cmp/AppProvider.tsx'
import './index.scss'

const theme = createMuiTheme(THEME.mui)

const renderApp = () => {
  const history = createBrowserHistory()
  return (
    <Router history={ history } basename="/">
      <ScrollToTop>
        <StateProvider initialState={ initialState } reducer={ reducer }>
          <MuiThemeProvider theme={ theme }>
            <AppProvider />
          </MuiThemeProvider>
        </StateProvider>
      </ScrollToTop>
    </Router>
  )
}

ReactDOM.render(renderApp(), document.getElementById('root'))
