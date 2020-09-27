import React, { } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { PATHS } from 'Src/config/nav'
import BooksList from 'Cmp/pages/_shared/booksList/BooksList.tsx'
import { useStore } from 'Store/index'
import { getLatestBooks } from 'Store/selectors/books'
import styles from './Home.module.scss'


const Home = () => {
  const [ { books } ] = useStore()
  const latestBooks = getLatestBooks(4)(books)

  return (
    <>
      <Helmet>
        <title>Henri Potier</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
      </Helmet>
      <div className={ styles.intro }>
        <div className={ styles.entry }>
          <h1>
            La bibliothèque fantastique<br />
            d’Henri Potier
          </h1>
          <div>
            Il était une fois, une collection de cinq livres racontant les histoires d’un formidable héro nommé Henri Potier.
            Tous les enfants du monde trouvaient les histoires de cet adolescent fantastiques.
          </div>
          <div className={ `${styles.buttons}` }>
            <Link to={ PATHS.books } className="cta">Je découvre les livres</Link>
          </div>
        </div>
      </div>
      <section>
        <h2 className="first">Les derniers livres</h2>
        <BooksList books={ latestBooks } />
      </section>
    </>
  )
}
export default Home
