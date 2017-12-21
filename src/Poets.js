import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import { createPath } from './helpers'

import Poet from './Poet'

class Poets extends Component {
  constructor({ poets, match }) {
    super()
    this.poets = poets
    this.match = match
  }

  listPoetLinks(poets, url) {
    return poets.map((poet) => {
      let path = createPath(poet, url)
      return (
        <li key={poet.id}>
          <p><Link to={path}>{poet.firstName} {poet.lastName}</Link></p>
        </li>
      )
    })
  }

  listPoetRoutes(poets, url) {
    return poets.map((poet) => {
      let path = createPath(poet, url)
      return (
        <Route key={poet.id} path={path} render={() => (
          <Poet poet={poet} />
        )} />
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Poets</h1>
        <ul>
          {this.listPoetLinks(this.poets, this.match.url)}
        </ul>
        {this.listPoetRoutes(this.poets, this.match.url)}
      </div>
    )
  }
}

export default Poets
