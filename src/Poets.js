import React, { Component } from 'react'

class Poets extends Component {
  constructor({ poets }) {
    super()
    this.poets = poets
  }

  render() {
    return (
      <div>
        <h2>Poets</h2>
      </div>
    )
  }
}

export default Poets
