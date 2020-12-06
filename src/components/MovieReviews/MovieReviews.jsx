import React, { Component } from "react"
import PropTypes from "prop-types"
import { fetchMovieReviews } from "../../services/moviesApi"

class MovieReviews extends Component {
  state = {
    reviews: [],
  }

  componentDidMount() {
    const movieId = this.props.match.params.movieId
    fetchMovieReviews(movieId).then((reviews) => this.setState({ reviews }))
  }

  render() {
    const { reviews } = this.state
    return (
      <div className="MovieReviewsWrapper">
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

MovieReviews.propTypes = {
  // bla: PropTypes.string,
}

MovieReviews.defaultProps = {
  // bla: 'test',
}

export default MovieReviews
