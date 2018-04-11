import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// ---- LIST OF COMPONENTS ----
import FirstVictory from './FirstVictory'
import AwakeMindfully from './AwakeMindfully'
import MorningGratitudes from './MorningGratitudes'
import DailyGoal from './DailyGoal'
import FuelYourDay from './FuelYourDay'

import axios from 'axios';

//not deployed
const baseURL = 'http://localhost:8000'

//deployed
// const baseURL = 'https://commit-m.herokuapp.com/'

class MorningRoutine extends Component {
  constructor() {
    super();
    this.state = {
      //...need to figure out how to get/store user_id after login
      // user_id:
      // date: '',
      did_make_bed: false,
      inspirational_quote: '',
      quote_author: '',
      // meditation_activity: '',
      gratitude_1: '',
      gratitude_2: '',
      gratitude_3: '',
      daily_goal: '',
      goal_microtarget_1: '',
      goal_microtarget_2: '',
      goal_microtarget_3: '',
      // selfie_Url: '',
      had_breakfast: false,
      did_exercise: false
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
          inspirational_quote: quote.data.quoteText,
          quote_author: 'Unknown'
        })
      } else if (quote.data.quoteText === "" && quote.data.quoteAuthor === "") {
        console.log('bad quote', quote.data);
        this.setState({
          inspirational_quote: '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
          quote_author: 'Albert Einstein'
        })
      } else {
        this.setState({
          inspirational_quote: quote.data.quoteText,
          quote_author: quote.data.quoteAuthor
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

  updateFinalState = (value) => {
    this.setState(value, () => {
      this.postMorningData()
    })
  }

  postMorningData = () => {
    const postData = this.state
    // Use this hardcoded for development for now...
    postData.user_id = 1
    // Eventually use this.props.user_id in the axios request...
    axios.post(`${baseURL}/routine/morning`, postData)
      .then(res => {
        console.log('Stuff')
        this.props.history.push('/home')
      })
      .catch(console.error)
  }

  render() {
    return (
      <div>
        <Route path='/morning/firstVictory' render={props => (
          <FirstVictory didMakeBed={this.state.did_make_bed} onSubmit={this.updateState} {...props} />
        )} />
        <Route path='/morning/beMindful' render={props => (
          <AwakeMindfully quote={this.state.inspirational_quote} author={this.state.quote_author} {...props} />
        )} />
        <Route path='/morning/morningGratitudes' render={props => (
          <MorningGratitudes onSubmit={this.updateState} {...props} />
        )} />
        <Route path='/morning/dailyGoal' render={props => (
          <DailyGoal onSubmit={this.updateState} {...props} />
        )} />
        <Route path='/morning/fuelYourDay' render={props => (
          <FuelYourDay onSubmit={this.updateFinalState} {...props} />
        )} />
      </div>
    );
  }
}

export default MorningRoutine;
