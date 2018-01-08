import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import Poem from "../components/Poem"

class Poems extends Component {
  constructor({ poems, match }) {
    super()
    this.poems = poems
    this.match = match
  }

  listPoems(poems) {
    return poems.map((poem) => <Poem key={poem.id} poem={poem} />)
  }

  render() {
    return (
      <div>
        <h1>Poems</h1>
        <ul>
          {this.poems.map((poem) => <li key={poem.id}><Link to={this.match.url + '/' + poem.title.toLowerCase().split(" ").join("_")}>{poem.title}</Link></li>)}
        </ul>

        {this.poems.map((poem) => {
          let path = this.match.url + '/' + poem.title.toLowerCase().split(" ").join("_")
          return (
            <Route key={poem.id} path={path} render={() => <Poem poem={poem} />} />
          )
        })}
      </div>
    )
  }
}

export default Poems
