import React, { useEffect } from 'react'
import { booksActions } from 'Store/reducers/books'
import { useStore } from 'Store/index'
import App from './App'

const AppProvider = () => {
  const [ , dispatch ] = useStore()
  
  // fetch initial data
  useEffect(() => {
    booksActions.fetch(dispatch)
  }, [])

  return (
    <App />
  )
}

export default AppProvider
