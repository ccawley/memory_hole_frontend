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
                <Form.Group grouped>
                  <label>Did you make your bed?</label>
                  <Form.Field type='radio' label='Sure did!' control='input' value='t' onChange={this.props.onSubmit} />
                  <Form.Field type='radio' label='Whoops, I forgot.' control='input' value='f' onChange={this.props.onSubmit} />
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
