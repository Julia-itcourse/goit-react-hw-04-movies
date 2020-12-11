import React, { Component } from "react"
import PropTypes from "prop-types"
import { fetchMovieDetails } from "../../services/moviesApi"
import { Switch, Link, Route } from "react-router-dom"
import MovieCast from "../../components/MovieCast"
import MovieReviews from "../../components/MovieReviews"
import styles from './MovieDetailsPage.module.css'

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    path: "",
  }

  componentDidMount() {
    console.log("MovieDetailsPage.componentDidMount")
    fetchMovieDetails(this.props.match.params.movieId).then((movie) =>
      this.setState({
        movie: movie,
        path: this.props.location.state.from,
      })
    )
  }

  handleGoBack = () => {
    console.log("MovieDetailsPage.handleGoBack")
    // const { state } = this.props.location
    console.log("this.props.location", this.props.location)
    // if (state && state.from) {
      // this.props.history.push(state.from)
      this.props.history.push(this.state.path)
    // }
  }

  render() {
    console.log("MovieDetailsPage.render")
    const { match } = this.props

    return (
      <div className = 'container'>
        <button  className = "button" type="button" onClick={this.handleGoBack}>
          Back to list
        </button >
        <div className={styles.filmCard}>
          {this.state.movie && (
            <>
              {
                <img
                  src={`https://image.tmdb.org/t/p/w300${this.state.movie.poster_path}`}
                  alt={this.state.movie.title || this.state.movie.name}
                />
              }
              <h2>{this.state.movie.title || this.state.movie.name}</h2>
              <p>
                <span className = {styles.details}>User Score: </span>
                {this.state.movie.vote_average}
              </p>
              <p>
                <span className ={styles.details}>Overview: </span>
                {this.state.movie.overview}
              </p>
              <span className = {styles.details}>Genres:</span>
              <ul>
                {this.state.movie.genres.map((genre) => (
                  <li key={genre.is}>{genre.name}</li>
                ))}
              </ul>
            </>
          )}
          <div>
            <h3>Additional info:</h3>
            <ul>
              <li className="listItem">
                <Link
                  to={{
                    pathname: `${match.url}/cast`,
                  }}
                >
                  Cast
                </Link>
              </li>
             
              <li className="listItem">
                <Link to={`${match.url}/reviews`}>Reviews</Link>
              </li>
               <Route
                path="/movies/:movieId/cast"
                component={MovieCast}
                location={this.props.location}
              />
              <Route path="/movies/:movieId/reviews" component={MovieReviews} />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

MovieDetailsPage.propTypes = {
  // bla: PropTypes.string,
}

MovieDetailsPage.defaultProps = {
  // bla: 'test',
}

export default MovieDetailsPage
