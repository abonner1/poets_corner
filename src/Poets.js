import React, { Component } from 'react'

class Poets extends Component {
  constructor({ poets }) {
    super()
    this.poets = poets
  }

  listPoets() {
    return this.poets.map((poet) => {
      return (
        <li>
          <p>{poet.firstName} {poet.lastName}</p>
          <p>Born: {poet.birthDate} - Died: {poet.deathDate}</p>
          <p>{poet.bio}</p>
        </li>
      )
    })
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
