import React from 'react';
import { Button, Form, Responsive, Grid } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

const Register = ({ onSubmit }) => (
  <div>
    <Responsive {...Responsive.onlyComputer}>
      <Grid>
        <Grid.Row style={{ marginTop: '100px' }} centered>
          <Grid.Column textAlign='center' width={4}>
            <h1 id='logo'>MemoryHole</h1>
            <Form onSubmit={onSubmit}>
              <Form.Field>
                <label>User Name:</label>
                <input
                  name='user_name'
                  placeholder='Please enter a user name...'
                />
              </Form.Field>
              <Form.Field>
                <label>First Name:</label>
                <input
                  name='first_name'
                  placeholder='Please enter your first name...'
                />
              </Form.Field>
              <Form.Field>
                <label>Password:</label>
                <input
                  name='password'
                  type='password'
                  placeholder='Please enter a password...'
                />
              </Form.Field>
              <Button type='submit'>Register</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Responsive>

    <Responsive {...Responsive.onlyTablet}>
      <Grid>
        <Grid.Row style={{ marginTop: '100px' }} centered>
          <Grid.Column textAlign='center' width={8}>
            <h1 id='logo'>MemoryHole</h1>
            <Form onSubmit={onSubmit}>
              <Form.Field>
                <label>User Name:</label>
                <input
                  name='user_name'
                  placeholder='Please enter a user name...'
                />
              </Form.Field>
              <Form.Field>
                <label>First Name:</label>
                <input
                  name='first_name'
                  placeholder='Please enter your first name...'
                />
              </Form.Field>
              <Form.Field>
                <label>Password:</label>
                <input
                  name='password'
                  type='password'
                  placeholder='Please enter a password...'
                />
              </Form.Field>
              <Button type='submit'>Register</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Responsive>

    <Responsive {...Responsive.onlyMobile}>
      <Grid>
        <Grid.Row style={{ marginTop: '100px' }} centered>
          <Grid.Column textAlign='center' width={10}>
            <h1 id='logo'>MemoryHole</h1>
            <Form onSubmit={onSubmit}>
              <Form.Field>
                <label>User Name:</label>
                <input
                  name='user_name'
                  placeholder='Please enter a user name...'
                />
              </Form.Field>
              <Form.Field>
                <label>First Name:</label>
                <input
                  name='first_name'
                  placeholder='Please enter your first name...'
                />
              </Form.Field>
              <Form.Field>
                <label>Password:</label>
                <input
                  name='password'
                  type='password'
                  placeholder='Please enter a password...'
                />
              </Form.Field>
              <Button type='submit'>Register</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Responsive>
  </div>
)

export default Register
