import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import VisiblePoets from './VisiblePoets'

import Home from './Home'
import Poems from './Poems'
import { poems } from './data'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/poets" >Poets</Link></li>
          <li><Link to="/poems" >Poems</Link></li>

          <hr/>

          <Route exact path="/" component={Home} />
          <Route path="/poets" render={({ match }) => (
            <VisiblePoets match={match} />
          )} />
          <Route path="/poems" render={() => (
            <Poems poems={poems} />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
