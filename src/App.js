import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// ---- LIST OF COMPONENTS ----
import Header from './components/NavBar'
import Bed from './components/Bed'
import InspirationalQuote from './components/InspirationalQuote'
import Gratitudes from './components/Gratitudes'
import DailyGoal from './components/DailyGoal'
import FuelYourDay from './components/FuelYourDay'
//import SideBar from './components/SideBar'
import Lessons from './components/Lessons'
import WinsBrags from './components/WinsBrags'

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
      // handle empty quote requests or missing authors first...
      if (quote.data.quoteAuthor === "") {
        console.log('no author', quote.data);
        this.setState({
          inspirationalQuote: quote.data.quoteText,
          quoteAuthor: 'Unknown'
        })
      } else if (quote.data.quoteText === "" && quote.data.quoteAuthor === "") {
        console.log('bad quote', quote.data);
        this.setState({
          inspirationalQuote: '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
          quoteAuthor: 'Albert Einstein'
        })
      } else {
        this.setState({
          inspirationalQuote: quote.data.quoteText,
          quoteAuthor: quote.data.quoteAuthor
        })
      }
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
          <Header />
          <Route path='/firstVictory' render={props => (
            <Bed didMakeBed={this.state.didMakeBed} onSubmit={this.updateState} {...props} />
          )} />
          <Route path='/beMindful' render={props => (
            <InspirationalQuote quote={this.state.inspirationalQuote} author={this.state.quoteAuthor} {...props} />
          )} />
          <Route path='/gratitudes' render={props => (
            <Gratitudes {...props} />
          )} />
          <Route path='/dailyGoal' render={props => (
            <DailyGoal {...props} />
          )} />
          <Route path='/fuelYourDay' render={props => (
            <FuelYourDay {...props} />
          )} />
          <Route path='/lessons' render={props => (
            <Lessons {...props} />
          )} />
          <Route path='/wins&brags' render={props => (
            <WinsBrags {...props} />
          )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
