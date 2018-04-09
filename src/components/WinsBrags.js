import React, { Component } from 'react';
import { Grid, Form, TextArea, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class WinsBrags extends Component {

  handleSubmit = (e, {value}) => {
    this.props.onSubmit(value)
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
                  <TextArea placeholder='What are you proud of yourself today for...' rows={5} onSubmit={this.props.onSubmit} />
                  <h3>Positive reinforcement will allow you to be happier, more confident and more loving of yourself.</h3>
                  <Link to="/eveningGratitudes"><Button type='submit'>Next!</Button></Link>
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
