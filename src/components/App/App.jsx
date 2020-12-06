import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import HomePage from "../../pages/HomePage"
import MoviesPage from "../../pages/MoviesPage"
import NotFoundPage from "../../pages/NotFoundPage"
import MovieDetailsPage from "../../pages/MovieDetailsPage"
import Layout from "../Layout"


const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" exact component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
)

App.propTypes = {
  // bla: PropTypes.string,
}

App.defaultProps = {
  // bla: 'test',
}

export default App

{
  /* <Route path = "/movies/:movieId" component ={MovieDetailsPage} />
<Route path = "/movies/:movieId/cast" component ={Cast} />
<Route path = "/movies/:movieId/reviews" component ={Reviews} /> */
}
