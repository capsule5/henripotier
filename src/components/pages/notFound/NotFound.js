import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not found | 404</title>
      </Helmet>
      <section>
        <h1>404</h1>
        <p>Cette page n’existe pas</p>
        <Link to="/" className={ `cta ${styles.button}` }>
          Retour à l’accueil
        </Link>
      </section>
    </>
  )
}

export default NotFound
