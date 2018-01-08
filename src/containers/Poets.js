import React from 'react'
import { Route, Link } from 'react-router-dom'

import { createPoetPath } from '../helpers/routerHelpers'

import Poet from '../components/Poet'
import FilterPoets from '../components/FilterPoets'

const Poets = ({ poets, match, onChange }) =>  {
  return (
    <div>
      <h1>Poets</h1>
      <FilterPoets onChange={onChange} />
      <ul>
        {poets.map((poet) => {
          let path = createPoetPath(poet, match.url)
          return (
            <li key={poet.id}>
              <p><Link to={path}>{poet.firstName} {poet.lastName}</Link></p>
            </li>
          )
        })}
      </ul>
      {poets.map((poet) => {
        let path = createPoetPath(poet, match.url)
        return (
          <Route key={poet.id} path={path} render={() => <Poet poet={poet} />} />
        )
      })}
    </div>
  )
}

export default Poets
