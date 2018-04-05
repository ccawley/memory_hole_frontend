import React, { Component } from 'react';

// ---- LIST OF COMPONENTS ----
import Bed from './components/Bed'

import './App.css';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <h1>MemoryHole</h1>
        <Bed />
      </div>
    );
  }
}

export default App;
