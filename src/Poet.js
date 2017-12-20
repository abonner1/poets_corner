import React from 'react'
import { Link } from 'react-router-dom'

const Poet = ({ poet, url }) => {
  return (
    <li>
      <p><Link to={`${url}/edmund_spenser`}>{poet.firstName} {poet.lastName}</Link></p>
      <p>Born: {poet.birthDate} - Died: {poet.deathDate}</p>
      <p>{poet.bio}</p>
    </li>
  )
}

export default Poet
