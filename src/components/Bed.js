import React, { Component } from 'react';
import { Grid, Form, Button, Radio, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Bed extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = (e) => {
    // console.log('submit?', this.props);
    this.props.onSubmit({ didMakeBed: this.state.value })
    // this.props.history.go('/quote')
  }

  render() {
    console.log(this.props);
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center' width={13} className='dailyCard'>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group grouped>
                  <h1>Good Morning!</h1>
                  <h2>Start your day with your first victory, I promise it will be easy...</h2>
                  <h2>Make your bed!</h2>
                  <p>
                    Cornerstone habits such as this may seem small but they can have a snowball effect that grows and grows into ever bigger accomplishments!
                  </p>
                  <p>
                    "If you make your bed every morning, you will have accomplished the first task of the day. It will give you a small sense of pride, and it will encourage you to do another task and another and another."<br></br>
                    ~ Naval Admiral William McRaven ~
                  </p>
                  <h2>So, did you make your bed?</h2>
                  <Form.Field>
                    <Radio
                      label='Sure did!'
                      control='input'
                      value='true'
                      checked={this.state.value === 'true'}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label='Whoops, I forgot.'
                      control='input'
                      value='false'
                      checked={this.state.value === 'false'}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Link to="/quote"><Button onClick={this.handleSubmit} type='submit'>Next!</Button></Link>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default Bed;
