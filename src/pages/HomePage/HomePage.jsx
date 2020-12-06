import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { fetchTrending } from "../../services/moviesApi"
import styles from '../HomePage/HomePage.module.css'

class HomePage extends Component {
  state = {
    movies: [],
  }

  // async componenetDidMount() {
  //   console.log("HomePage.componentDidMount")
  //   const result = await fetchTrending()
  //   this.setState({ movies: result })
  //   console.log(this.state.movies)
  // }

  componentDidMount() {
    fetchTrending().then((movies) => this.setState({ movies }))
  }

  render() {
    console.log("this.props.match.url", this.props.match.url)
    const { movies } = this.state
    return (
      <div className = {styles.container}>
        <h2>Trending movies</h2>
        <ul>
          {movies.map((movie) => (
            <li className = {styles.listItem} key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                {movie.name || movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

HomePage.propTypes = {
  // bla: PropTypes.string,
}

HomePage.defaultProps = {
  // bla: 'test',
}

export default HomePage
