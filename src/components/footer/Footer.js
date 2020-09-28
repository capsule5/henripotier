import React from 'react'
import uuid from 'uuid'
import { LINKS } from 'Src/config/nav'
import { Link } from 'react-router-dom'
import ShareButtons from 'Cmp/ui/socials/ShareButtons'
import Grid from '@material-ui/core/Grid'
import styles from './Footer.module.scss'


const Footer = () => {
  const renderShare = () => {
    const shareProps = {
      url: `${process.env.REACT_APP_APP_ROOT}`,
      size: 40,
      options: {
        twitterTitle: 'Henri Potier',
        emailSubject: 'Henri Potier',
        emailBody: 'lorem',
      },
    }
    return (
      <div className={ `${styles.share}` }>
        <ShareButtons { ...shareProps } />
      </div>
    )
  }
  return (
    <div className={ styles.footer }>
      <div className={ styles.content }>
        <div className={ `${styles.col} ${styles.menu}` }>
          
          <Grid container>
            <Grid md={ 6 } xs={ 12 } item>
              {renderShare()}
            </Grid>
            <Grid md={ 6 } xs={ 12 } item>
              <ul>
                {LINKS.map(({ to, label }) => (
                  <li key={ uuid() }>
                    <Link to={ to }>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Footer
