import React, { Component } from 'react'

import Poem from "./Poem"

class Poems extends Component {
  constructor({ poems }) {
    super()
    this.poems = poems
  }

  listPoems(poems) {
    return poems.map((poem) => {
      return <Poem key={poem.id} poem={poem} />
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.listPoems(this.poems)}
        </ul>
      </div>
    )
  }
}

export default Poems
