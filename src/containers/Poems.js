import React from 'react'
import { Route, Link } from 'react-router-dom'

import { createPoemsPath } from '../helpers/routerHelpers'

import Poem from "../components/Poem"

const Poems = ({poems, match}) => {
  return (
    <div>
      <h1>Poems</h1>
      <ul>
        {poems.map((poem) => {
          let path = createPoemsPath(poem, match.url)
          return (
            <li key={poem.id}>
              <Link to={path}>{poem.title}</Link>
            </li>
          )
        })}
      </ul>

      {poems.map((poem) => {
        let path = createPoemsPath(poem, match.url)
        return (
          <Route key={poem.id} path={path} render={() => <Poem poem={poem} />} />
        )
      })}
    </div>
  )
}

export default Poems
