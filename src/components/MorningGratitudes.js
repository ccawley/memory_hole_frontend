import React, { Component } from 'react';
import { Grid, Form, TextArea, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class MorningGratitudes extends Component {

  state = { gratitude1: '', gratitude2: '', gratitude3: '' }

  handleChange = (e, { gratitude1, value }) => this.setState({ [gratitude1]: value })

  handleSubmit = () => {
    const { gratitude1, gratitude2, gratitude3 } = this.state

    this.props.onSubmit({
      gratitude1: this.state.gratitude1,
      gratitude2: this.state.gratitude2,
      gratitude3: this.state.gratitude3,
    })
    // this.setState({ submittedName: name, submittedEmail: email })
  }

  // handleSubmit = (e) => {
  //   console.log('submit?', this.props);
  //   this.props.onSubmit ({
  //     gratitude1: this.state.value,
  //     gratitude2: this.state.value,
  //     gratitude3: this.state.value
  //   })
  //   // this.props.history.go('/quote')
  // }

  render() {
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center' width={13} className='dailyCard'>
              <Form>
                <Form.Group grouped>
                  <h1>Now, think thankfully!</h1>
                  <h2>Take a moment to think about some things that you are grateful for. Briefly tell me about them below.</h2>
                  <Form.Input
                    placeholder='What are you thankful for today?'
                    rows={1}
                    name='gratitude1'
                    value={gratitude1}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    placeholder='What ELSE are you thankful for today?'
                    rows={1}
                    name='gratitude2'
                    value={gratitude2}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    placeholder='One more gratitude, you got this!'
                    rows={1}
                    name='gratitude3'
                    value={gratitude3}
                    onChange={this.handleChange}
                  />
                  <h4>Remember, being happy and grateful is a choice you make daily. Accept that you while you can't control everything, you CAN choose to give yourself the gift of being the happiest version of yourself that you can be. Thinking gratefully and positively will go a long way in acheiving this.</h4>
                  <Link to="/dailyGoal"><Button onClick={this.handleSubmit} type='submit'>Next!</Button></Link>
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
