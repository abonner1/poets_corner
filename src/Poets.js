import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import Poet from './Poet'

class Poets extends Component {
  constructor({ poets, match }) {
    super()
    this.poets = poets
    this.match = match
  }

  createPath(poet, url) {
    return `${url}/${poet.firstName.toLowerCase()}_${poet.lastName.toLowerCase()}`
  }

  listPoets(poets, url) {
    return poets.map((poet) => {
      let path = this.createPath(poet, url)
      return (
        <li key={poet.id}>
          <p><Link to={path}>{poet.firstName} {poet.lastName}</Link></p>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Poets</h2>
        <ul>
          {this.listPoets(this.poets, this.match.url)}
        </ul>
      </div>
    )
  }
}

export default Poets
