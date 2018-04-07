import React, { Component } from 'react';
import { Grid, Form, Button, Radio } from 'semantic-ui-react';
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
      // <Responsive {...Responsive.onlyComputer}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center' width={8} className='dailyCard'>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group grouped>
                  <label>Did you make your bed?</label>
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
      // </Responsive>
    );
  }
}

export default Bed;
