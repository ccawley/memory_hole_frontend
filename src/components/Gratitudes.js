import React, { Component } from 'react';
import { Grid, Form, TextArea, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Gratitudes extends Component {

  handleSubmit = (e, {value}) => {
    this.props.onSubmit(value)
  }

  render() {
    console.log(this.props);
    return (
      // <Responsive {...Responsive.onlyComputer}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center' width={8} className='dailyCard'>
              <Form>
                <Form.Group grouped>
                  <h1>Daily Gratitudes</h1>
                  <p>Take a moment to think about some things that you are grateful for then enter them below.</p>
                  <TextArea autoHeight placeholder='What are you thankful for today?' rows={1} onSubmit={this.props.onSubmit} />
                  <TextArea autoHeight placeholder='What else are you thankful for today?' rows={1} onSubmit={this.props.onSubmit} />
                  <TextArea autoHeight placeholder='One more, you got this!' rows={1} onSubmit={this.props.onSubmit} />
                  <Button type='submit'>Next!</Button>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      // </Responsive>
    );
  }
}

export default Gratitudes;
