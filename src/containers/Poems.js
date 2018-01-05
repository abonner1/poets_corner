import React, { Component } from 'react'

import Poem from "../components/Poem"

class Poems extends Component {
  constructor({ poems }) {
    super()
    this.poems = poems
  }

  listPoems(poems) {
    return poems.map((poem) => <Poem key={poem.id} poem={poem} />)
  }

  render() {
    return (
      <div>
        <h1>Poems</h1>
        <ul>
          {this.listPoems(this.poems)}
        </ul>
      </div>
    )
  }
}

export default Poems
