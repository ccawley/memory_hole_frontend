import React, { Component } from 'react';
import { Grid, Form, TextArea, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Gratitudes extends Component {

  handleSubmit = (e, {value}) => {
    this.props.onSubmit(value)
  }

  render() {
    console.log(this.props);
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center' width={13} className='dailyCard'>
              <Form>
                <Form.Group grouped>
                  <h1>Morning Gratitudes</h1>
                  <h3>Take a moment to think about some things that you are grateful for. Briefly tell me about them below.</h3>
                  <TextArea autoHeight placeholder='What are you thankful for today?' rows={1} onSubmit={this.props.onSubmit} />
                  <TextArea autoHeight placeholder='What ELSE are you thankful for today?' rows={1} onSubmit={this.props.onSubmit} />
                  <TextArea autoHeight placeholder='One more gratitude, you got this!' rows={1} onSubmit={this.props.onSubmit} />
                  <h3>Remember, being happy and grateful is a choice you make daily. Only you can give yourself that gift so be the light you want to see in the world.</h3>
                  <Link to="/dailyGoal"><Button type='submit'>Next!</Button></Link>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default Gratitudes;
