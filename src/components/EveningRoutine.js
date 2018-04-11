import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// ---- LIST OF COMPONENTS ----
import Lessons from './Lessons'
import WinsBrags from './WinsBrags'
import EveningGratitudes from './EveningGratitudes'
import Journal from './Journal'

// import axios from 'axios';

//not deployed
// const baseURL = 'http://localhost:8000'

//deployed
// const baseURL = 'https://memory-hole.herokuapp.com/'

class MorningRoutine extends Component {
  constructor() {
    super();
    this.state = {
      //...need to figure out how to get/store user_id after login
      // user_id:
      // pic_of_the_day_url: '',
      lessons_learned: '',
      wins_brags: '',
      gratitude_4: '',
      gratitude_5: '',
      gratitude_6: '',
      journal_entry: '',
      // historical_quote: ''
    }
  }

  componentDidMount() {

  }

  updateState = (value) => {
    this.setState(value)
  }

  // updateFinalState = (value) => {
  //   this.setState(value, () => {
  //     this.EveningData()
  //   })
  // }

  // postEveningData = () => {
  //   console.log('we here', this.state);
  //   axios.post(`${baseURL}/routines/evening`, this.state)
  //     .then(res => {
  //       console.log('Stuff')
  //     })
  //     .catch(console.error)
  // }

  render() {
    return (
      <div>
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
          <Journal onSubmit={this.updateState} {...props} />
        )} />
      </div>
    );
  }
}

export default MorningRoutine;
