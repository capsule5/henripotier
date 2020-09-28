
import React from 'react'
import Nav from 'Cmp/header/nav/Nav.js'
import { Link } from 'react-router-dom'
import { PATHS } from 'Src/config/nav'
import { isWidthUp, isWidthDown } from '@material-ui/core/withWidth'
import { useMuiWidth } from 'Src/hooks'
import styles from './Header.module.scss'

const Header = () => {
  const width = useMuiWidth()

  const renderLogo = () => {
    return (
      <Link to={ PATHS.root } className={ `${styles.logo}` }>
        Henri Potier
      </Link>
    )
  }

  return (
    <div className={ styles.header }>
      <div className={ `${styles.left}` }>
        {renderLogo()}
        {isWidthUp('lg', width) && <Nav />}
      </div>
      {isWidthDown('md', width) && (
        <div className={ `${styles.mobileRight}` }>
          <Nav />
        </div>
      )}
    </div>
  )
}
export default Header
