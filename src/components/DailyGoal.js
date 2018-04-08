import React, { Component } from 'react';
import { Grid, Form, TextArea, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class DailyGoal extends Component {

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
                  <h1>Next, set a goal.</h1>
                  <h2>When you crawl into bed tonight, what is the one thing you hope to have accomplished today?</h2>
                  <TextArea placeholder='What is your goal today?' rows={1} onSubmit={this.props.onSubmit} />
                  <h3>It's easier to acheive a goal if you break it down. What three steps will you take to reach your goal today?</h3>
                  <TextArea placeholder='What will you do to reach your goal?' rows={1} onSubmit={this.props.onSubmit} />
                  <TextArea rows={1} onSubmit={this.props.onSubmit} />
                  <TextArea rows={1} onSubmit={this.props.onSubmit} />
                  <h3>Allright! You can do that!</h3>
                  <Link to="/fuelYourDay"><Button type='submit'>Almost there!</Button></Link>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default DailyGoal;
