import React from 'react'
import { Route, Link } from 'react-router-dom'

import { createPath } from './helpers'

import Poet from './Poet'

const Poets = ({ poets, match }) =>  {
  return (
    <div>
      <h1>Poets</h1>
      <ul>
        {poets.map((poet) => {
          let path = createPath(poet, match.url)
          return (
            <li key={poet.id}>
              <p><Link to={path}>{poet.firstName} {poet.lastName}</Link></p>
            </li>
          )
        })}
      </ul>
      {poets.map((poet) => {
        let path = createPath(poet, match.url)
        return (
          <Route key={poet.id} path={path} render={() => <Poet poet={poet} />} />
        )
      })}
    </div>
  )
}

export default Poets
