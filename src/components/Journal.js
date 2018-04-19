import React, { Component } from 'react';
import { Grid, Form, TextArea, Button, Responsive } from 'semantic-ui-react';

class Journal extends Component {

  state = { journal_entry: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { journal_entry } = this.state

    this.props.onSubmit({
      journal_entry
    })
  }

  render() {
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row style={{ marginTop: '10px' }} centered>
            <Grid.Column textAlign='center' width={13} className='nightlyCard5'>
              <Form>
                <Form.Group grouped>
                  <h1>Jog down some memories!</h1>
                  <h2>Well, another day is in the books. If you look back on this day 10 years from now what could you put in words that would help spark some memories of what today was like?</h2>
                  <TextArea
                    placeholder='Tell me about your day...'
                    name='journal_entry'
                    rows={5}
                    value={this.state.journal_entry}
                    onChange={this.handleChange}
                  />
                  <h3>Nice!</h3>
                  <Button type='submit' onClick={this.handleSubmit}>Home</Button>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default Journal;
