import React, { Component } from 'react';
import { Grid, Form, TextArea, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class EveningGratitudes extends Component {

  state = { gratitude4: '', gratitude5: '', gratitude6: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { gratitude4, gratitude5, gratitude6 } = this.state

    this.props.onSubmit({
      gratitude4,
      gratitude5,
      gratitude6
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
                  <h1>Think thankfully again!</h1>
                  <h2>Take a moment to think about some things that you are grateful for. Briefly tell me about them below.</h2>
                  <Form.Input
                    placeholder='What are you thankful for right now?'
                    name='gratitude4'
                    value={this.state.gratitude4}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    placeholder='What ELSE are you thankful for tonight?'
                    name='gratitude5'
                    value={this.state.gratitude5}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    placeholder='One more gratitude, you got this!'
                    name='gratitude6'
                    value={this.state.gratitude6}
                    onChange={this.handleChange}
                  />
                  <h4>Remember, being happy and grateful is a choice you make daily. Accept that you while you can't control everything, you CAN choose to give yourself the gift of being the happiest version of yourself that you can be. Thinking gratefully and positively will go a long way in acheiving this.</h4>
                  <Link to="/journal"><Button type='submit' onClick={this.handleSubmit}>Next!</Button></Link>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default EveningGratitudes;
