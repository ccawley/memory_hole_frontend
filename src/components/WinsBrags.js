import React, { Component } from 'react';
import { Grid, Form, TextArea, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class WinsBrags extends Component {

  state = { wins_brags: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { wins_brags } = this.state

    this.props.onSubmit({
      wins_brags
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
                  <h1>Now, brag about yourself!</h1>
                  <h2>Give yourself some credit, you deserve it. Go on, what wins did you have today? Go ahead and brag about yourself!</h2>
                  <TextArea
                    placeholder='What are you proud of yourself today for...'
                    name='wins_brags'
                    rows={5}
                    value={this.state.wins_brags}
                    onChange={this.handleChange}
                  />
                  <h3>Positive reinforcement will allow you to be happier, more confident and more loving of yourself.</h3>
                  <Link to="/eveningGratitudes"><Button type='submit' onClick={this.handleSubmit}>Next!</Button></Link>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default WinsBrags;
