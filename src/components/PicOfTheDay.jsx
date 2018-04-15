import React, { Component } from 'react';
import { Grid, Form, TextArea, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ReactFileReader from 'react-file-reader';

class PicOfTheDay extends Component {

  state = { pic_of_the_day_url: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { pic_of_the_day_url } = this.state

    this.props.onSubmit({
      pic_of_the_day_url
    })
  }

  render() {
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center' width={13} className='dailyCard'>
              <Form>
                <Form.Group grouped>
                  <h1>Photo of the day.</h1>
                  <h2>A picture is worth a thousand words so upload one photo that you think would spark some memories if you were to look back on it years from now.</h2>
                  {/* <Input
                    type="file"
                    accept="image/*"
                    name='pic_of_the_day_url'
                    value={this.state.pic_of_the_day_url}
                    onChange={this.handleChange}
                  /> */}
                  <h3>Nice!</h3>
                  <Link to="/evening/lessons"><Button type='submit' onClick={this.handleSubmit}>Next</Button></Link>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default PicOfTheDay;
