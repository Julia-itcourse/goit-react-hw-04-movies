import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { fetchWithSearchQuery } from "../../services/moviesApi"
import getQueryParams from "../../utils/get-query-params"
import Searchbox from "../../components/Searchbox"

class MoviesPage extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search)
    if (query) {
      fetchWithSearchQuery(query).then((movies) => this.setState({ movies }))
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("MoviesPage.componentDidUpdate ", this.props)
    console.log("prevProps.props.location.search", prevProps.location.search)
    const { query: prevQuery } = getQueryParams(prevProps.location.search)
    const { query: nextQuery } = getQueryParams(this.props.location.search)
    console.log("prevParams: ", prevQuery)
    console.log("nextparams: ", nextQuery)
    if (prevQuery !== nextQuery) {
      console.log("searching...")
      fetchWithSearchQuery(nextQuery).then((movies) =>
        this.setState({ movies })
        // .catch(error => console.log(error))
      )
    }
  }



  handleChangeQuery = (query) => {
    console.log("Moviespage.handleChangeQuery" + query)
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    })
    console.log(this.props.history)
  }

  render() {
    console.log("this.props.match.url", this.props.match.url); 
    const { movies } = this.state
    return (
      <div className = "container">
        <Searchbox onSubmit={this.handleChangeQuery} />
        {movies.length > 0 && (
          <div>
            <h1>Movies found</h1>
            <ul>
              {movies.map((movie) => (
                <li className = "listItem" key={movie.id}>
                  <Link
                    to={{
                      pathname: `${this.props.match.url}/${movie.id}`,
                      state: { from: this.props.location },
                    }}
                  >
                    {movie.name || movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
//?как правильно написать через &&

MoviesPage.propTypes = {
  // bla: PropTypes.string,
}

MoviesPage.defaultProps = {
  // bla: 'test',
}

export default MoviesPage
