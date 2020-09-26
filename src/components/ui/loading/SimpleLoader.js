import React from 'react'
import styles from './SimpleLoader.module.scss'

const SimpleLoader = ({ style = null }) => {
  return (
    <div className={ styles.SimpleLoader } style={ style }>
      <i className="icon-spin4 spin" />
    </div>
  )
}

export default SimpleLoader
