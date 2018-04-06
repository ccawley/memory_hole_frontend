import React, { Component } from 'react';

// ---- LIST OF COMPONENTS ----
import NavBar from './components/NavBar'
import Bed from './components/Bed'

import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      didMakeBed: false,
      inspirationalQuote: '',
      meditationActivity: '',
      gratitude1: '',
      gratitude2: '',
      gratitude3: '',
      dailyGoal: '',
      goalMicrotarget1: '',
      goalMicrotarget2: '',
      goalMicrotarget3: '',
      selfieUrl: '',
      hadBreakfast: false,
      didExercise: false,
    }
  }

  updateState = (value) => {
    this.setState({ didMakeBed: value })
  }

  render() {
    return (
      <div className="Container">
        <NavBar />
        <Bed didMakeBed={this.state.didMakeBed} onSubmit={this.updateState}/>
      </div>
    );
  }
}

export default App;
