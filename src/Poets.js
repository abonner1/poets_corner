import React, { Component } from 'react'
import { BrowserRouter as Route} from 'react-router-dom'

import Poet from './Poet'

class Poets extends Component {
  constructor({ poets, match }) {
    super()
    this.poets = poets
    this.match = match
  }

  listPoets(poets, url) {
    return poets.map((poet) => <Poet key={poet.id} poet={poet} url={url} />)
  }

  render() {
    return (
      <div>
        <h2>Poets</h2>
        <ul>
          {this.listPoets(this.poets, this.match.url)}
        </ul>

        <Route path={`${this.match.url}/edmund_spenser`} />
      </div>
    )
  }
}

export default Poets
