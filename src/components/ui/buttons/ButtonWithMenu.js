import React, { useRef, useState } from 'react'
import Menu from '@material-ui/core/Menu'

const ButtonWithMenu = ({
  children,
  content,
  className,
  anchorOrigin = { vertical: 'top', horizontal: 'center' },
  transformOrigin = { vertical: 'top', horizontal: 'center' },
  classes = {},
}) => {
  const buttonRef = useRef(null)
  const [ isOpen, setIsOpen ] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <button ref={ buttonRef } className={ `${className}` } onClick={ handleOpen } type="button">
        {content}
      </button>
      <Menu
        anchorEl={ buttonRef.current }
        onClose={ handleClose }
        open={ isOpen }
        anchorOrigin={ anchorOrigin }
        transformOrigin={ transformOrigin }
        classes={ {
          paper: classes.paper && classes.paper,
        } }
      >
        {children}
      </Menu>
    </div>
  )
}
export default ButtonWithMenu
