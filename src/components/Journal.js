import React, { Component } from 'react';
import { Grid, Form, TextArea, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Journal extends Component {

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
                  <h1>Jog down some memories!</h1>
                  <h2>Well, another day is in the books. If you look back on this day 10 years from now what could you put in words that would help spark some memories of what today was like?</h2>
                  <TextArea placeholder='Tell me about your day...' rows={5} onSubmit={this.props.onSubmit} />
                  <h3>Nice!</h3>
                  <Link to="/home"><Button type='submit'>Home</Button></Link>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default Journal;
