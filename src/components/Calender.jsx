import React, { Component } from 'react';
import { Grid, Responsive } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios'

import 'react-datepicker/dist/react-datepicker.css';

class Calender extends Component {

  // state = { stuff: [] }

  constructor (props) {
    super(props)
    this.state = {
      // stuff: [],
      startDate: moment(),
      // id: null,
      // user_name: null,
      // first_name: null,
      // password: null,
      // created_at: null,
      // updated_at: null,
      // user_id: 0,
      did_make_bed: null,
      gratitude_1: null,
      gratitude_2: null,
      gratitude_3: null,
      daily_goal: null,
      goal_microtarget_1: null,
      goal_microtarget_2: null,
      goal_microtarget_3: null,
      had_breakfast: null,
      did_exercise: null,
      inspirational_quote: null,
      quote_author: null,
      journal_entry: null,
      lessons_learned: null,
      wins_brags: null,
      gratitude_4: null,
      gratitude_5: null,
      gratitude_6: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    let formatedDate = date.format('YYYY-MM-DD')
    this.setState({
      startDate: date
    });
    axios.get(`http://localhost:8000/routine/dayview?date=${formatedDate}&user_id=${this.props.user_id}`)
      .then(res => {
        let data = res.data.day.rows[0]
        console.log(data);
        // this.setState({stuff: res.data.result.rows})
        this.setState(
          { did_make_bed: data.did_make_bed,
            gratitude_1: data.gratitude_1,
            gratitude_2: data.gratitude_2,
            gratitude_3: data.gratitude_3,
            daily_goal: data.daily_goal,
            goal_microtarget_1: data.goal_microtarget_1,
            goal_microtarget_2: data.goal_microtarget_2,
            goal_microtarget_3: data.goal_microtarget_3,
            had_breakfast: data.had_breakfast,
            did_exercise: data.did_exercise,
            inspirational_quote: data.inspirational_quote,
            quote_author: data.quote_author,
            journal_entry: data.journal_entry,
            lessons_learned: data.lessons_learned,
            wins_brags: data.wins_brags,
            gratitude_4: data.gratitude_4,
            gratitude_5: data.gratitude_5,
            gratitude_6: data.gratitude_6
          }
          // if (!data.gratitude_1) {
          //   { did_make_bed: null,
          //     gratitude_1: null,
          //     gratitude_2: null,
          //     gratitude_3: null,
          //     daily_goal: null,
          //     goal_microtarget_1: null,
          //     goal_microtarget_2: null,
          //     goal_microtarget_3: null,
          //     had_breakfast: null,
          //     did_exercise: null,
          //     inspirational_quote: null,
          //     quote_author: null,
          //     journal_entry: null,
          //     lessons_learned: null,
          //     wins_brags: null,
          //     gratitude_4: null,
          //     gratitude_5: null,
          //     gratitude_6: null
          //   }
          // } else {
          //   { did_make_bed: data.did_make_bed,
          //     gratitude_1: data.gratitude_1,
          //     gratitude_2: data.gratitude_2,
          //     gratitude_3: data.gratitude_3,
          //     daily_goal: data.daily_goal,
          //     goal_microtarget_1: data.goal_microtarget_1,
          //     goal_microtarget_2: data.goal_microtarget_2,
          //     goal_microtarget_3: data.goal_microtarget_3,
          //     had_breakfast: data.had_breakfast,
          //     did_exercise: data.did_exercise,
          //     inspirational_quote: data.inspirational_quote,
          //     quote_author: data.quote_author,
          //     journal_entry: data.journal_entry,
          //     lessons_learned: data.lessons_learned,
          //     wins_brags: data.wins_brags,
          //     gratitude_4: data.gratitude_4,
          //     gratitude_5: data.gratitude_5,
          //     gratitude_6: data.gratitude_6
          //   }
          // }
        )
      })
      .catch(err => {
        console.log('error');
        console.log(err)
      })
    //axios.get('http://localhost:8000/routine', querystring.stringify({date: formatedDate}))
  }

  // handleChange = (e, { name, value }) => this.setState({ [name]: value })
  //
  // handleSubmit = () => {
  //   const {  } = this.state
  //
  //   this.props.onSubmit({
  //     // gratitude_1,
  //     // gratitude_2,
  //     // gratitude_3
  //   })
  // }

  // save the stuff to state next!!!
  // let stuffElements = this.state.stuff.map(thing => (
  //   <div>
  //     {thing.daily_goal} {thing.did_make_bed}
  //   </div>
  // ))

  render() {
    console.log(this.state)
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center'>
              <p>Please select a day to view.</p>
              <DatePicker
                placeholderText="Click to select a date"
                selected={this.state.startDate}
                onChange={this.handleChange}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Responsive>
    );
  }
}

export default Calender;
