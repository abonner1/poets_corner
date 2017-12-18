import React, { Component } from 'react';
import Poets from './Poets'
import { poets } from './data/poets'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Poets Corner</h1>
        <Poets poets={poets} />
      </div>
    );
  }
}

export default App;
