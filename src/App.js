import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'
import Poets from './Poets'
import { poets } from './data/poets'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/poets" >Poets</Link></li>

          <hr/>

          <Route exact path="/" component={Home} />
          <Route path="/poets" render={() => (
            <Poets poets={poets} />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
