import React, { Component } from 'react'

class FilterPoets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poetFilter: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      poetFilter: event.target.value
    })
    this.props.onChange(this.state.poetFilter)
  }

  render() {
    return (
      <form>
        <label htmlFor="filter">Filter by Poet: </label>
        <input type="text" id="filter" value={this.poetFilter} onChange={this.handleChange} />
      </form>
    )
  }
}

export default FilterPoets
