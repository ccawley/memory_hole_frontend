import React from 'react';
import { Button, Form, Responsive, Grid } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

const Register = ({ onSubmit }) => (
  <Responsive {...Responsive.onlyMobile}>
    <Grid>
      <Grid.Row centered>
        <Grid.Column textAlign='center' width={12}>
          <h1>MemoryHole</h1>
          <Form onSubmit={onSubmit}>
            <Form.Field>
              <label>User Name:</label>
              <input
                name='user_name'
                placeholder='Please enter user name...'
              />
            </Form.Field>
            <Form.Field>
              <label>First Name:</label>
              <input
                name='first_name'
                placeholder='Please enter user name...'
              />
            </Form.Field>
            <Form.Field>
              <label>Password:</label>
              <input
                name='password'
                type='password'
                placeholder='Please enter password...'
              />
            </Form.Field>
            <Button type='submit'>Register</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Responsive>
)

export default Register
