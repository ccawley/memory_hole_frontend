import React, { Component } from 'react';
import { Responsive, Grid, Form } from 'semantic-ui-react';

class Bed extends Component {

  handleChange = (e, {value}) => {
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
                <Form.Group>
                  <label>Did you make your bed?</label>
                  <Form.Radio label='Sure did!' value='t' onChange={this.handleChange} />
                  <Form.Radio label='Whoops, I forgot.' value='f' onChange={this.props.onSubmit} />
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      // </Responsive>
    );
  }
}

export default Bed;
