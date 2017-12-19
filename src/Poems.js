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
            return (
              <li>
                <p>{poem.title} ({poem.publicationDate}) by {poem.author}</p>
                <p>{poem.about}</p>
              </li>)
          })}
        </ul>
      </div>
    )
  }
}

export default Poems
