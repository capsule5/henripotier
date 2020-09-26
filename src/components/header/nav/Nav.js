import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { isWidthUp } from '@material-ui/core/withWidth'
import { LINKS } from 'Src/config/nav'
import ButtonWithMenu from 'Cmp/ui/buttons/ButtonWithMenu'
import MenuItem from '@material-ui/core/MenuItem'
import { useMuiWidth } from 'Src/hooks/useMuiWidth'
import styles from './Nav.module.scss'


const Nav = () => {
  const width = useMuiWidth()
  const { pathname } = useLocation()

  const renderDesktopNav = () => {
    return (
      <ul>
        {LINKS.map(({ to, label, isMain }) => {
          if (!isMain) return null
          const isActive = pathname === to || (pathname.includes(to) && to !== '/')
          const className = isActive ? styles.active : undefined
          return (
            <li key={ to }>
              <Link to={ to } className={ className }>
                <span>{label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }

  const renderMobileNav = () => {
    return (
      <ButtonWithMenu
        className={ styles.burgerBtn }
        content={ <i className="icon-menu_burger" /> }
      >
        {LINKS.map(({ to, label, isMain }) => {
          if (!isMain) return null
          const isActive = pathname === to || (pathname.includes(to) && to !== '/')
          const className = isActive ? styles.active : undefined
          return (
            <MenuItem key={ to }>
              <Link to={ to } className={ className }>
                {label}
              </Link>
            </MenuItem>
          )
        })}
      </ButtonWithMenu>
    )
  }
  
  return (
    <nav className={ styles.nav }>
      
      {isWidthUp('lg', width)
        ? renderDesktopNav()
        : renderMobileNav()}

    </nav>
  )
}

export default Nav
