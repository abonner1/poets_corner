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
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by Poet: </label>
        <input type="text" id="filter" value={this.state.poetFilter} onChange={this.handleChange} />
      </div>
    )
  }
}

export default FilterPoets
