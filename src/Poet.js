import React from 'react'

const Poet = ({ poet }) => {
  return (
    <li>
      <p>{poet.firstName} {poet.lastName}</p>
      <p>Born: {poet.birthDate} - Died: {poet.deathDate}</p>
      <p>{poet.bio}</p>
    </li>
  )
}

export default Poet
