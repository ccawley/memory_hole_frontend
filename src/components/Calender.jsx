import React, { Component } from 'react';
import { Grid, Responsive, Tab, Image, Accordion, Icon } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios'

import 'react-datepicker/dist/react-datepicker.css';

class Calender extends Component {
  constructor (props) {
    super(props)
    // this.state = { stuff: [] }
    this.state = {
      startDate: moment(),
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
      gratitude_6: null,
      pic_of_the_day_url: null,
      activeIndex: -1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.handleChange(this.state.startDate)
  }

  createPanes = () => {
    const { activeIndex } = this.state
    const panes = [
      { menuItem: 'Journal',
        pane: (
          <Tab.Pane key='journal'>
            <Image src={this.state.pic_of_the_day_url} size='medium' bordered centered />
            <p></p>
            <p>{this.state.inspirational_quote}</p>
            <p>~ {this.state.quote_author} ~</p>
            <p>{this.state.journal_entry}</p>
          </Tab.Pane>
        )
      },
      { menuItem: 'Gratitudes',
        pane: (
          <Tab.Pane key='gratitudes'>
            <h2>Today I was grateful for:</h2>
              <p>{this.state.gratitude_1}</p>
              <p>{this.state.gratitude_2}</p>
              <p>{this.state.gratitude_3}</p>
              <p>{this.state.gratitude_4}</p>
              <p>{this.state.gratitude_5}</p>
              <p>{this.state.gratitude_6}</p>
          </Tab.Pane>
        )
      },
      { menuItem: 'Reflections',
        pane: (
          <Tab.Pane key='reflections'>
            <h2>My Goal for the day:</h2>
              <p>{this.state.daily_goal}</p>
              <Accordion>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  Microtargets set:
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>- {this.state.goal_microtarget_1}</p>
                  <p>- {this.state.goal_microtarget_2}</p>
                  <p>- {this.state.goal_microtarget_3}</p>
                </Accordion.Content>
              </Accordion>
            <h2>Lessons Learned:</h2>
              <p>{this.state.lessons_learned}</p>
            <h2>Today I was proud of:</h2>
              <p>{this.state.wins_brags}</p>
          </Tab.Pane>
        )
      }
    ]
    this.panes = panes
  }

  handleChange(date) {
    let formatedDate = date.format('YYYY-MM-DD')
    this.setState({
      startDate: date
    });
    axios.get(`http://localhost:8000/routine/dayview?date=${formatedDate}&user_id=${this.props.user_id}`)
      .then(res => {
        let data = res.data.day.rows[0]
        // console.log(data);
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
            gratitude_6: data.gratitude_6,
            pic_of_the_day_url: data.pic_of_the_day_url
          }
        )
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
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
    // console.log(this.state)
    this.createPanes()
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row centered style={{ marginTop: '30px' }}>
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
          <Grid.Row centered>
            <Grid.Column textAlign='center'>
              <Tab panes={this.panes} renderActiveOnly={false} />
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Responsive>
    );
  }
}

export default Calender;
