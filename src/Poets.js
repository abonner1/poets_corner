import React, { Component } from 'react'

import Poet from './Poet'

class Poets extends Component {
  constructor({ poets }) {
    super()
    this.poets = poets
  }

  listPoets() {
    return this.poets.map((poet) => <Poet poet={poet} />)
  }

  render() {
    return (
      <div>
        <h2>Poets</h2>
        <ul>
          {this.listPoets()}
        </ul>
      </div>
    )
  }
}

export default Poets
