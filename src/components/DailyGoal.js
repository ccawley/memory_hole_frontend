import React, { Component } from 'react';
import { Grid, Form, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class DailyGoal extends Component {

  state = { daily_goal: '', goal_microtarget_1: '', goal_microtarget_2: '', goal_microtarget_3: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { daily_goal, goal_microtarget_1, goal_microtarget_2, goal_microtarget_3 } = this.state

    this.props.onSubmit({
      daily_goal,
      goal_microtarget_1,
      goal_microtarget_2,
      goal_microtarget_3
    })
  }

  render() {
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center' width={13} className='dailyCard'>
              <Form>
                <Form.Group grouped>
                  <h1>Next, set a goal.</h1>
                  <h2>When you crawl into bed tonight, what is the one thing you hope to have accomplished today?</h2>
                  <Form.Input
                    placeholder='What is your goal today?'
                    name='daily_goal'
                    value={this.state.daily_goal}
                    onChange={this.handleChange}
                  />
                  <h3>It's easier to acheive a goal if you break it down. What three steps will you take to reach your goal today?</h3>
                  <Form.TextArea
                    placeholder='Step 1'
                    name='goal_microtarget_1'
                    rows={1}
                    value={this.state.goal_microtarget_1}
                    onChange={this.handleChange}
                  />
                  <Form.TextArea
                    placeholder='Step 2...'
                    name='goal_microtarget_2'
                    rows={1}
                    value={this.state.goal_microtarget_2}
                    onChange={this.handleChange}
                  />
                  <Form.TextArea
                    placeholder='Step 3...'
                    name='goal_microtarget_3'
                    rows={1}
                    value={this.state.goal_microtarget_3}
                    onChange={this.handleChange}
                  />
                  <h3>Allright! You can do that!</h3>
                  <Link to="/morning/fuelYourDay"><Button type='submit' onClick={this.handleSubmit}>Almost there!</Button></Link>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default DailyGoal;
