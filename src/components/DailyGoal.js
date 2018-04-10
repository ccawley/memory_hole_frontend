import React, { Component } from 'react';
import { Grid, Form, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class DailyGoal extends Component {

  state = { dailyGoal: '', goalMicrotarget1: '', goalMicrotarget2: '', goalMicrotarget3: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { dailyGoal, goalMicrotarget1, goalMicrotarget2, goalMicrotarget3 } = this.state

    this.props.onSubmit({
      dailyGoal,
      goalMicrotarget1,
      goalMicrotarget2,
      goalMicrotarget3
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
                    name='dailyGoal'
                    value={this.state.dailyGoal}
                    onChange={this.handleChange}
                  />
                  <h3>It's easier to acheive a goal if you break it down. What three steps will you take to reach your goal today?</h3>
                  <Form.TextArea
                    placeholder='Step 1'
                    name='goalMicrotarget1'
                    rows={1}
                    value={this.state.goalMicrotarget1}
                    onChange={this.handleChange}
                  />
                  <Form.TextArea
                    placeholder='Step 2...'
                    name='goalMicrotarget2'
                    rows={1}
                    value={this.state.goalMicrotarget2}
                    onChange={this.handleChange}
                  />
                  <Form.TextArea
                    placeholder='Step 3...'
                    name='goalMicrotarget3'
                    rows={1}
                    value={this.state.goalMicrotarget3}
                    onChange={this.handleChange}
                  />
                  <h3>Allright! You can do that!</h3>
                  <Link to="/fuelYourDay"><Button type='submit' onClick={this.handleSubmit}>Almost there!</Button></Link>
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
