import React, { Component } from "react"
import PropTypes from "prop-types"
import { fetchMovieCast } from "../../services/moviesApi"

class MovieCast extends Component {
  state = {
    cast: [],
  }

  componentDidMount() {
    const movieId = this.props.match.params.movieId
    fetchMovieCast(movieId).then((cast) => this.setState({ cast }))
  }

  render() {
    const { cast } = this.state
    return (
      <div className="MovieReviewsWrapper">
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt={`${actor.name}`}
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

MovieCast.propTypes = {
  // bla: PropTypes.string,
}

MovieCast.defaultProps = {
  // bla: 'test',
}

export default MovieCast
