import React, { Component } from 'react'

import Poet from './Poet'

class Poets extends Component {
  constructor({ poets }) {
    super()
    this.poets = poets
  }

  listPoets(poets) {
    return poets.map((poet) => <Poet key={poet.id} poet={poet} />)
  }

  render() {
    return (
      <div>
        <h2>Poets</h2>
        <ul>
          {this.listPoets(this.poets)}
        </ul>
      </div>
    )
  }
}

export default Poets
