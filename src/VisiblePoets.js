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

  render() {
    return (
      <Poets poets={this.state.poets} match={this.props.match} />
    )
  }
}

export default VisiblePoets
