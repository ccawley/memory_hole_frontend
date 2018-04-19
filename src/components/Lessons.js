import React, { Component } from 'react';
import { Grid, Form, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Lessons extends Component {

  state = { lessons_learned: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { lessons_learned } = this.state

    this.props.onSubmit({
      lessons_learned
    })
  }

  render() {
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row style={{ marginTop: '10px' }} centered>
            <Grid.Column textAlign='center' width={13} className='nightlyCard2'>
              <Form>
                <Form.Group grouped>
                  <h1>Did you learn today?</h1>
                  <h2>Now is your moment to reflect on your day and describe any lessons you learned. Were there opportunities where you feel like you could have done something differently?</h2>
                  <Form.TextArea
                    placeholder='What, if any, lessons did you learn today that you want to remember going forward?'
                    name='lessons_learned'
                    rows={5}
                    value={this.state.lessons_learned}
                    onChange={this.handleChange}
                  />
                  <h3>Remember, mistakes are only mistakes if you didn't learn anything from them.</h3>
                  <Link to="/evening/wins&brags"><Button type='submit' onClick={this.handleSubmit}>Next!</Button></Link>
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
