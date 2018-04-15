import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// ---- LIST OF COMPONENTS ----
import PicOfTheDay from './PicOfTheDay'
import Lessons from './Lessons'
import WinsBrags from './WinsBrags'
import EveningGratitudes from './EveningGratitudes'
import Journal from './Journal'

import axios from 'axios';

//not deployed
const baseURL = 'http://localhost:8000'

//deployed
// const baseURL = 'https://memory-hole.herokuapp.com/'

class EveningRoutine extends Component {
  constructor() {
    super();
    this.state = {
      //...need to figure out how to get/store user_id after login
      // user_id:
      // pic_of_the_day_url: null,
      lessons_learned: '',
      wins_brags: '',
      gratitude_4: '',
      gratitude_5: '',
      gratitude_6: '',
      journal_entry: '',
      // historical_quote: ''
    }
  }

  updateState = (value) => {
    this.setState(value)
  }

  updateFinalState = (value) => {
    this.setState(value, () => {
      this.postEveningData()
    })
  }

  postEveningData = () => {
    const postData = this.state
    // Use this hardcoded for development for now...
    postData.user_id = 1
    // Eventually use this.props.user_id in the axios request...
    axios.post(`${baseURL}/routine/evening`, postData)
      .then(res => {
        this.props.history.push('/home')
      })
      .catch(console.error)
  }

  render() {
    return (
      <div>
        <Route path='/evening/picOfTheDay' render={props => (
          <PicOfTheDay onSubmit={this.updateState} {...props} />
        )} />
        <Route path='/evening/lessons' render={props => (
          <Lessons onSubmit={this.updateState} {...props} />
        )} />
        <Route path='/evening/wins&brags' render={props => (
          <WinsBrags onSubmit={this.updateState} {...props} />
        )} />
        <Route path='/evening/eveningGratitudes' render={props => (
          <EveningGratitudes onSubmit={this.updateState} {...props} />
        )} />
        <Route path='/evening/journal' render={props => (
          <Journal onSubmit={this.updateFinalState} {...props} />
        )} />
      </div>
    );
  }
}

export default EveningRoutine;
