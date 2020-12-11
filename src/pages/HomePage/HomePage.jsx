import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { fetchTrending } from "../../services/moviesApi"
import styles from '../HomePage/HomePage.module.css'
import withFetch from '../../components/hocs/withFetch'

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

  // componentDidMount() {
  //   fetchTrending().then((movies) => this.setState({ movies }))
  // }

  render() {

    const {movies} = this.props
 
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

export default withFetch('https://api.themoviedb.org/3/trending/all/day?')(HomePage)
