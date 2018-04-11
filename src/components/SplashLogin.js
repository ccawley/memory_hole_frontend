import React from 'react';
import { Button, Form, Responsive, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoginForm = () => (
  <Responsive {...Responsive.onlyMobile}>
    <Grid>
      <Grid.Row centered>
        <Grid.Column textAlign='center' width={15}>
          <h1>MemoryHole</h1>
          <Form>
            <Form.Field>
              <label>User Name:</label>
              <input placeholder='Please enter user name...' />
            </Form.Field>
            <Form.Field>
              <label>Password:</label>
              <input type='password' placeholder='Please enter password...' />
            </Form.Field>
            <p>New user?<Link to="/home"> Register Here</Link></p>
            <Button type='submit'>Log In</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Responsive>
)

export default LoginForm
