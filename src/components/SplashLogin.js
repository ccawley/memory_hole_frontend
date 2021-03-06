import React from 'react';
import { Button, Form, Responsive, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// import './splashLogin.css'

const LoginForm = ({ onSubmit }) => (
  <div>
    <Responsive {...Responsive.onlyComputer}>
      <Grid>
        <Grid.Row style={{ marginTop: '125px' }} centered>
          <Grid.Column textAlign='center' width={4}>
            <h1 id='logo'>MemoryHole</h1>
            <Form onSubmit={onSubmit}>
              <Form.Field>
                <label>User Name:</label>
                <input
                  name='user_name'
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
              <p>New user?<Link to="/register"> Register Here</Link></p>
              <Button type='submit'>Log In</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Responsive>

    <Responsive {...Responsive.onlyTablet}>
      <Grid>
        <Grid.Row style={{ marginTop: '125px' }} centered>
          <Grid.Column textAlign='center' width={8}>
            <h1 id='logo'>MemoryHole</h1>
            <Form onSubmit={onSubmit}>
              <Form.Field>
                <label>User Name:</label>
                <input
                  name='user_name'
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
              <p>New user?<Link to="/register"> Register Here</Link></p>
              <Button type='submit'>Log In</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Responsive>

    <Responsive {...Responsive.onlyMobile}>
      <Grid>
        <Grid.Row style={{ marginTop: '125px' }} centered>
          <Grid.Column textAlign='center' width={10}>
            <h1 id='logo'>MemoryHole</h1>
            <Form onSubmit={onSubmit}>
              <Form.Field>
                <label>User Name:</label>
                <input
                  name='user_name'
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
              <p>New user?<Link to="/register"> Register Here</Link></p>
              <Button type='submit'>Log In</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Responsive>
  </div>
)

export default LoginForm
