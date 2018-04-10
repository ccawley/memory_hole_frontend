import React, { Component } from 'react';
import { Grid, Form, Checkbox, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class FuelYourDay extends Component {

  state = {didExercise: false, hadBreakfast: false}

  // handleChange = (e, { name, value }) => {
  //   this.setState({ [name]: value })
  // }

  handleExerciseChange = (e, { name, value }) => {
    this.setState({
      didExercise: !this.state.didExercise
    })
  }

  handleBreakfastChange = (e, { name, value }) => {
    this.setState({
      hadBreakfast: !this.state.hadBreakfast
    })
  }

  handleSubmit = (e) => {
    const { didExercise, hadBreakfast } = this.state

    this.props.onSubmit({
      didExercise,
      hadBreakfast
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
                      name='didExercise'
                      label='Yes'
                      control='input'
                      value='true'
                      checked={this.state.didExercise === true}
                      onChange={this.handleExerciseChange}
                    />
                  </Form.Field>
                  <h3>Did you exercise?</h3>
                  <Form.Field>
                    <Checkbox
                      toggle
                      name='hadBreakfast'
                      label='Yes'
                      control='input'
                      value='true'
                      checked={this.state.hadBreakfast === true}
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
