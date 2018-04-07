import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// ---- LIST OF COMPONENTS ----
import NavBar from './components/NavBar'
import Bed from './components/Bed'
import InspirationalQuote from './components/InspirationalQuote'
import Gratitudes from './components/Gratitudes'

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
      let quote = await axios.get('http://localhost:8000/quote')
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
    this.setState(value)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="Container">
          <NavBar />
          <Route path='/firstVictory' render={props => (
            <Bed didMakeBed={this.state.didMakeBed} onSubmit={this.updateState} {...props} />
          )} />
          <Route path='/beMindful' render={props => (
            <InspirationalQuote quote={this.state.inspirationalQuote} author={this.state.quoteAuthor} {...props} />
          )} />
          <Route path='/gratitudes' render={props => (
            <Gratitudes {...props} />
          )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
