import React, { Component } from 'react'

import { poets } from '../data'

import Poets from '../Poets'

class VisiblePoets extends Component {
  constructor() {
    super()
    this.state = {
      poets: [],
      filteredPoets: []
    }
  }

  componentWillMount() {
    this.setState({
      poets,
      filteredPoets: poets
    })
  }

  filterPoets = (poetFilter) => {
    let filteredPoets = this.state.poets
    filteredPoets = filteredPoets.filter((poet) => {
      return poet.lastName.toLowerCase().search(
        poetFilter.toLowerCase()) !== -1
    })
    this.setState({
      filteredPoets
    })
  }

  render() {
    return (
      <Poets poets={this.state.filteredPoets} match={this.props.match} onChange={this.filterPoets} />
    )
  }
}

export default VisiblePoets
