import React, { Component } from 'react'

import { poets } from './data'

import Poets from './Poets'

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
      <Poets poets={this.state.poets} match={this.props.match} onChange={this.filterPoets} />
    )
  }
}

export default VisiblePoets
