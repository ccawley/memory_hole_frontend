import React, { Component } from 'react';
import { Grid, Form, Radio, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class FuelYourDay extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = (e) => {
    this.props.onSubmit({ didMakeBed: this.state.value })
  }

  render() {
    console.log(this.props);
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center' width={13} className='dailyCard'>
              <Form>
                <Form.Group grouped>
                  <h1>Finally, fuel your day!</h1>
                  <h3>You can't have your best possible day on an empty stomach so make sure you fuel your body with some food!</h3>
                  <h3>Another way to set yourself up for having a great day would be to take 20 minutes and get some healthy activity in. Treat that body of yours right, it's the only one you've got!</h3>
                  <h3>Did you have breakfast?</h3>
                  <Form.Field>
                    <Radio toggle
                      control='input'
                      value='true'
                      checked={this.state.value === 'true'}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <h3>Did you exercise?</h3>
                  <Form.Field>
                    <Radio toggle
                      control='input'
                      value='true'
                      checked={this.state.value === 'true'}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Link to="/home"><Button type='submit'>Cool, now get out there!</Button></Link>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default FuelYourDay;
