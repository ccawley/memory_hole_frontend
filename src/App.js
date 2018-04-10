import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// ---- LIST OF COMPONENTS ----
import Header from './components/NavBar'
import FirstVictory from './components/FirstVictory'
import AwakeMindfully from './components/AwakeMindfully'
import MorningGratitudes from './components/MorningGratitudes'
import DailyGoal from './components/DailyGoal'
import FuelYourDay from './components/FuelYourDay'
//import SideBar from './components/SideBar'
import Lessons from './components/Lessons'
import WinsBrags from './components/WinsBrags'
import EveningGratitudes from './components/EveningGratitudes'
import Journal from './components/Journal'

import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // date: '',
      didMakeBed: false,
      inspirationalQuote: '',
      quoteAuthor: '',
      // meditationActivity: '',
      gratitude1: '',
      gratitude2: '',
      gratitude3: '',
      dailyGoal: '',
      goalMicrotarget1: '',
      goalMicrotarget2: '',
      goalMicrotarget3: '',
      // selfieUrl: '',
      hadBreakfast: false,
      didExercise: false,
      // picOfTheDayUrl: '',
      lessonsLearned: '',
      winsBrags: '',
      gratitude4: '',
      gratitude5: '',
      gratitude6: '',
      journalEntry: '',
      // historicalQuote: '',
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
            <FirstVictory didMakeBed={this.state.didMakeBed} onSubmit={this.updateState} {...props} />
          )} />
          <Route path='/beMindful' render={props => (
            <AwakeMindfully quote={this.state.inspirationalQuote} author={this.state.quoteAuthor} {...props} />
          )} />
          <Route path='/morningGratitudes' render={props => (
            <MorningGratitudes onSubmit={this.updateState} {...props} />
          )} />
          <Route path='/dailyGoal' render={props => (
            <DailyGoal onSubmit={this.updateState} {...props} />
          )} />
          <Route path='/fuelYourDay' render={props => (
            <FuelYourDay onSubmit={this.updateState} {...props} />
          )} />
          <Route path='/lessons' render={props => (
            <Lessons onSubmit={this.updateState} {...props} />
          )} />
          <Route path='/wins&brags' render={props => (
            <WinsBrags onSubmit={this.updateState} {...props} />
          )} />
          <Route path='/eveningGratitudes' render={props => (
            <EveningGratitudes onSubmit={this.updateState} {...props} />
          )} />
          <Route path='/journal' render={props => (
            <Journal onSubmit={this.updateState} {...props} />
          )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
