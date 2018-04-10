import React, { Component } from 'react';
import { Grid, Form, Checkbox, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class FuelYourDay extends Component {

  state = {did_exercise: false, had_breakfast: false}

  // handleChange = (e, { name, value }) => {
  //   this.setState({ [name]: value })
  // }

  handleExerciseChange = (e, { name, value }) => {
    this.setState({
      did_exercise: !this.state.did_exercise
    })
  }

  handleBreakfastChange = (e, { name, value }) => {
    this.setState({
      had_breakfast: !this.state.had_breakfast
    })
  }

  handleSubmit = (e) => {
    const { did_exercise, had_breakfast } = this.state

    this.props.onSubmit({
      did_exercise,
      had_breakfast
    })
  }

  render() {
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center' width={13} className='dailyCard'>
              <Form>
                  <h1>Finally, fuel your day!</h1>
                  <h3>You can't have your best possible day on an empty stomach so make sure you fuel your body with some food!</h3>
                  <h3>Another way to set yourself up for having a great day would be to take 20 minutes and get some healthy activity in. Treat that body of yours right, it's the only one you've got!</h3>
                  <h3>Did you have breakfast?</h3>
                  <Form.Field>
                    <Checkbox
                      toggle
                      name='did_exercise'
                      label='Yes'
                      control='input'
                      value='true'
                      checked={this.state.did_exercise === true}
                      onChange={this.handleExerciseChange}
                    />
                  </Form.Field>
                  <h3>Did you exercise?</h3>
                  <Form.Field>
                    <Checkbox
                      toggle
                      name='had_breakfast'
                      label='Yes'
                      control='input'
                      value='true'
                      checked={this.state.had_breakfast === true}
                      onChange={this.handleBreakfastChange}
                    />
                  </Form.Field>
                  <Link to="/home"><Button type='submit' onClick={this.handleSubmit}>Cool, now get out there!</Button></Link>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default FuelYourDay;
