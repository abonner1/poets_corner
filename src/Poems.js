import React, { Component } from 'react'

class Poems extends Component {
  constructor({ poems }) {
    super()
    this.poems = poems
  }

  render() {
    return (
      <div>
        <ul>
          {this.poems.map((poem) => {
            return <li>{poem.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Poems
