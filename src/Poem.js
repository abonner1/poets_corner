import React from 'react'

const Poem = ({ poem }) => {
  return (
    <li>
      <p>{poem.title} ({poem.publicationDate}) by {poem.author}</p>
      <p>{poem.about}</p>
    </li>
  )
}

export default Poem`
