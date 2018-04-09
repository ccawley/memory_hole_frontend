import React, { Component } from 'react';
import { Grid, Form, TextArea, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Lessons extends Component {

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
                  <h1>Did you learn today?</h1>
                  <h2>Now is your moment to reflect on your day and describe any lessons you learned. Were there opportunities where you feel like you could have done something differently?</h2>
                  <TextArea placeholder='What, if any, lessons did you learn today that you want to remember going forward?' rows={5} onSubmit={this.props.onSubmit} />
                  <h3>Remember, mistakes are only mistakes if you didn't learn anything from them.</h3>
                  <Link to="/wins&brags"><Button type='submit'>Next!</Button></Link>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default Lessons;
