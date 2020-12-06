import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from './Searchbox.module.css'

class Searchbox extends Component {
  state = {
    value: "",
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.value)
    this.setState({value:''})
  }

  render() {
    return (
      <form className = {styles.SearchForm} onSubmit = {this.handleSubmit}>
        <input className = {styles.SearchFormInput}
        type = 'text'
        value = {this.state.value}
        onChange = {this.handleChange}/>
        <button className = "button" type="Submit">Search</button>
      </form>
    )
  }
}

Searchbox.propTypes = {
  // bla: PropTypes.string,
}

Searchbox.defaultProps = {
  // bla: 'test',
}

export default Searchbox
