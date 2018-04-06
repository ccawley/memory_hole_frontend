import React, { Component } from 'react';

// ---- LIST OF COMPONENTS ----
import NavBar from './components/NavBar'
import Bed from './components/Bed'
import InspirationalQuote from './components/InspirationalQuote'

import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      didMakeBed: false,
      inspirationalQuote: '',
      quoteAuthor: '',
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

  componentDidMount() {
    this.getQuote()
  }

  getQuote = async () => {
    try {
      let quote = await axios.get('http://localhost:3000/quote')
      this.setState({
        inspirationalQuote: quote.data.quoteText,
        quoteAuthor: quote.data.quoteAuthor
      })
    }
    catch (err) {
      console.error(err)
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
        <InspirationalQuote quote={this.state.inspirationalQuote} author={this.state.quoteAuthor}/>
      </div>
    );
  }
}

export default App;
