import React, { Component } from 'react';

// ---- LIST OF COMPONENTS ----
import Bed from './components/Bed'

import './App.css';
import axios from 'axios';

class App extends Component {

  state={
    bed: false
  }

  updateState = (value) => {
    this.setState({ bed: value })
  }

  render() {
    console.log('app rerender');
    return (
      <div className="Container">
        <h1>MemoryHole</h1>
        <Bed bed={this.state.bed} onSubmit={this.updateState}/>
      </div>
    );
  }
}

export default App;
