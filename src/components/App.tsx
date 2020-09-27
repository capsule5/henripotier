import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import SimpleLoader from 'Cmp/ui/loading/SimpleLoader'
import Header from 'Cmp/header/Header'
import Footer from 'Cmp/footer/Footer'
import { PATHS } from 'Src/config/nav'
import RgpdDialog from 'Cmp/rgpd/RgpdDialog'

const Home = lazy(() => import('Cmp/pages/home/Home.tsx'))
const Books = lazy(() => import('Cmp/pages/books/Books.tsx'))
const BookDetail = lazy(() => import('Cmp/pages/bookDetail/BookDetail.tsx'))
const Cart = lazy(() => import('Cmp/pages/cart/Cart.tsx'))
const NotFound = lazy(() => import('Cmp/pages/notFound/NotFound.tsx'))

const App = () => {
  return (
    <div className="site">
      <RgpdDialog />
      <Header />
      <div className="content">
        <Suspense fallback={ <SimpleLoader /> }>
          <Switch>
            <Route exact path={ PATHS.root } component={ Home } />
            <Route exact path={ PATHS.books } component={ Books } />
            <Route exact path={ PATHS.cart } component={ Cart } />
            <Route path={ `${PATHS.books}/:slug` } component={ BookDetail } />
            <Route component={ NotFound } />
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default App