import React, { Component } from 'react'

import { poets } from './data'

import Poets from './Poets'
import FilterPoets from './components/FilterPoets'

class VisiblePoets extends Component {
  constructor() {
    super()
    this.state = { poets: [] }
  }

  componentDidMount() {
    this.setState({
      poets: [...poets]
    })
  }

  filterPoets(poets, filter) {
    this.setState({
      filteredPoets: [
        ...poets.filter((poet) => poet.toLowerCase() === filter.toLowerCase())
      ]
    })
  }

  render() {
    return (
      <div>
        <FilterPoets />
        <Poets poets={this.state.poets} match={this.props.match} onChange={this.filterPoets} />
      </div>
    )
  }
}

export default VisiblePoets
