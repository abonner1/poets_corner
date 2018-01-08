import React from 'react'

const Poem = ({ poem }) => {
  return (
    <div>
      <h2>{poem.title} ({poem.publicationDate}) by {poem.author}</h2>
      <p>{poem.about}</p>
    </div>
  )
}

export default Poem
