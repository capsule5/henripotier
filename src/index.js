
// TODO:  flow
// TODO:  tests
// TODO:  clean unused ui

import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import './index.scss'
import ScrollToTop from 'Cmp/utils/ScrollToTop'
import { StateProvider } from 'Store'
import { initialState, reducer } from 'Src/store/reducers'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { THEME } from 'Src/config/theme'
import AppProvider from 'Cmp/AppProvider'

const theme = createMuiTheme(THEME.mui)

const renderApp = () => {
  // set history and router's root path
  const history = createBrowserHistory({
    basename: '/',
  })
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
