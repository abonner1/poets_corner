import React, { Component } from 'react'

import { poets } from '../data'

import Poets from '../Poets'

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

  filterPoets(poetFilter) {
    this.setState({
      poets: [
        this.state.poets.filter((poet) => poet.toLowerCase() === poetFilter.toLowerCase())
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
