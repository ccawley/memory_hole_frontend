import React, { Component } from 'react';
import { Grid, Form, Button, Checkbox, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class FirstVictory extends Component {

  state = {did_make_bed: false}

  handleBedChange = (e, { name, value }) => {
    this.setState({
      did_make_bed: !this.state.did_make_bed
    })
  }

  handleSubmit = (e) => {
    const { did_make_bed } = this.state

    this.props.onSubmit({
      did_make_bed
    })
  }

  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyComputer}>
          <Grid>
            <Grid.Row style={{ marginTop: '10px' }} centered>
              <Grid.Column textAlign='center' width={13} className='dailyCard1'>
                <Form>
                  <Form.Group grouped>
                    <h1>Good Morning!</h1>
                    <h2>Start your day with your first victory, I promise it will be easy...</h2>
                    <h2>Make your bed!</h2>
                    <p>
                      Cornerstone habits such as this may seem small but they can have a snowball effect that grows and grows into ever bigger accomplishments!
                    </p>
                    <p>
                      "If you make your bed every morning, you will have accomplished the first task of the day. It will give you a small sense of pride, and it will encourage you to do another task and another and another."<br></br>
                      ~ Naval Admiral William McRaven ~
                    </p>
                    <h3>So, did you make your bed?</h3>
                    <Form.Field>
                      <Checkbox
                        toggle
                        name='did_make_bed'
                        label='Aw yeah!'
                        control='input'
                        value='true'
                        checked={this.state.did_make_bed === true}
                        onChange={this.handleBedChange}
                      />
                    </Form.Field>
                    <Link to="/morning/beMindful"><Button style={{ marginTop: '10px'}} type='submit' onClick={this.handleSubmit}>Next!</Button></Link>
                  </Form.Group>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>

        <Responsive {...Responsive.onlyTablet}>
          <Grid>
            <Grid.Row style={{ marginTop: '10px' }} centered>
              <Grid.Column textAlign='center' width={13} className='dailyCard1'>
                <Form>
                  <Form.Group grouped>
                    <h1>Good Morning!</h1>
                    <h2>Start your day with your first victory, I promise it will be easy...</h2>
                    <h2>Make your bed!</h2>
                    <p>
                      Cornerstone habits such as this may seem small but they can have a snowball effect that grows and grows into ever bigger accomplishments!
                    </p>
                    <p>
                      "If you make your bed every morning, you will have accomplished the first task of the day. It will give you a small sense of pride, and it will encourage you to do another task and another and another."<br></br>
                      ~ Naval Admiral William McRaven ~
                    </p>
                    <h3>So, did you make your bed?</h3>
                    <Form.Field>
                      <Checkbox
                        toggle
                        name='did_make_bed'
                        label='Aw yeah!'
                        control='input'
                        value='true'
                        checked={this.state.did_make_bed === true}
                        onChange={this.handleBedChange}
                      />
                    </Form.Field>
                    <Link to="/morning/beMindful"><Button style={{ marginTop: '10px'}} type='submit' onClick={this.handleSubmit}>Next!</Button></Link>
                  </Form.Group>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>

        <Responsive {...Responsive.onlyMobile}>
          <Grid>
            <Grid.Row style={{ marginTop: '10px' }} centered>
              <Grid.Column textAlign='center' width={13} className='dailyCard1'>
                <Form>
                  <Form.Group grouped>
                    <h1>Good Morning!</h1>
                    <h2>Start your day with your first victory, I promise it will be easy...</h2>
                    <h2>Make your bed!</h2>
                    <p>
                      Cornerstone habits such as this may seem small but they can have a snowball effect that grows and grows into ever bigger accomplishments!
                    </p>
                    <p>
                      "If you make your bed every morning, you will have accomplished the first task of the day. It will give you a small sense of pride, and it will encourage you to do another task and another and another."<br></br>
                      ~ Naval Admiral William McRaven ~
                    </p>
                    <h3>So, did you make your bed?</h3>
                    <Form.Field>
                      <Checkbox
                        toggle
                        name='did_make_bed'
                        label='Aw yeah!'
                        control='input'
                        value='true'
                        checked={this.state.did_make_bed === true}
                        onChange={this.handleBedChange}
                      />
                    </Form.Field>
                    <Link to="/morning/beMindful"><Button style={{ marginTop: '10px'}} type='submit' onClick={this.handleSubmit}>Next!</Button></Link>
                  </Form.Group>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>

      </div>

    );
  }
}

export default FirstVictory;
