import React from 'react'
import { Route, Link } from 'react-router-dom'

import Poem from "../components/Poem"

const Poems = ({poems, match}) => {
  return (
    <div>
      <h1>Poems</h1>
      <ul>
        {poems.map((poem) => <li key={poem.id}><Link to={match.url + '/' + poem.title.toLowerCase().split(" ").join("_")}>{poem.title}</Link></li>)}
      </ul>

      {poems.map((poem) => {
        let path = match.url + '/' + poem.title.toLowerCase().split(" ").join("_")
        return (
          <Route key={poem.id} path={path} render={() => <Poem poem={poem} />} />
        )
      })}
    </div>
  )
}

export default Poems
