import React, { Component } from 'react';
import { Grid, Form, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class MorningGratitudes extends Component {

  state = { gratitude_1: '', gratitude_2: '', gratitude_3: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { gratitude_1, gratitude_2, gratitude_3 } = this.state

    this.props.onSubmit({
      gratitude_1,
      gratitude_2,
      gratitude_3
    })
  }

  render() {
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row style={{ marginTop: '10px' }} centered>
            <Grid.Column textAlign='center' width={13} className='dailyCard3'>
              <Form>
                <Form.Group grouped>
                  <h1>Now, think thankfully!</h1>
                  <h2>Take a moment to think about some things that you are grateful for. Briefly tell me about them below.</h2>
                  <Form.Input
                    placeholder='What are you thankful for today?'
                    name='gratitude_1'
                    value={this.state.gratitude_1}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    placeholder='What ELSE are you thankful for today?'
                    name='gratitude_2'
                    value={this.state.gratitude_2}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    placeholder='One more gratitude, you got this!'
                    name='gratitude_3'
                    value={this.state.gratitude_3}
                    onChange={this.handleChange}
                  />
                  <h4>Remember, being happy and grateful is a choice you make daily. Accept that you while you can't control everything, you CAN choose to give yourself the gift of being the happiest version of yourself that you can be. Thinking gratefully and positively will go a long way in acheiving this.</h4>
                  <Link to="/morning/dailyGoal"><Button type='submit' onClick={this.handleSubmit}>Next!</Button></Link>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default MorningGratitudes;
