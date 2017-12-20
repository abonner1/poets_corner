import React from 'react'

const Poet = ({ poet }) => {
  return (
      <div>
        <h2>{poet.firstName} {poet.lastName}</h2>
        <p>Born: {poet.birthDate} - Died: {poet.deathDate}</p>
        <p>{poet.bio}</p>
      </div>
  )
}

export default Poet
