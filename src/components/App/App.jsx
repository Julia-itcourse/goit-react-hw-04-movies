import React, {Suspense, lazy} from "react"
import routes from '../../routes'
import { Switch, Route } from "react-router-dom"
import NotFoundPage from "../../pages/NotFoundPage"
import Layout from "../Layout"

const HomePage = lazy(()=>
import('../../pages/HomePage' /*webpackChunkName: 'home-page' */),
);

const MoviesPage = lazy(()=>
import('../../pages/MoviesPage' /*webpackChunkName: 'movies-page' */),
);

const MovieDetailsPage = lazy(()=>
import('../../pages/MovieDetailsPage' /*webpackChunkName: 'movie-details-page' */),
);


const App = () => (
  <Layout>
    <Suspense fallback = {<h2>Loading...</h2>}>
    <Switch>
      <Route path={routes.homePage} exact component={HomePage} />
      <Route path={routes.moviesPage} exact component={MoviesPage} />
      <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
      <Route path ={routes.errorPage} component={NotFoundPage} />
      {/* <Route component={NotFoundPage} /> */}
    </Switch>
    </Suspense>
  </Layout>
)

//*---------before splitting----------------

// const App = () => (
//   <Layout>
//     <Switch>
//       <Route path="/" exact component={HomePage} />
//       <Route path="/movies" exact component={MoviesPage} />
//       <Route path="/movies/:movieId" component={MovieDetailsPage} />
//       <Route component={NotFoundPage} />
//     </Switch>
//   </Layout>
// )

export default App
