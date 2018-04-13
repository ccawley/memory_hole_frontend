import React, { Component } from 'react';
import { Grid, Responsive, Header, Segment } from 'semantic-ui-react';
import Skycons from 'react-skycons';
// const SkyIcons = require('react-skycons');
const DateFormat = require('dateformat');
const Now = new Date();

class Home extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center' width={14}>
              <div>
                <Header as='h2' attached>
                  Hello {this.props.firstName}
                </Header>
                <Header as='h3' attached>
                  {DateFormat(Now, "dddd, mmmm dS, yyyy")}
                </Header>
                <Segment attached>
                  <h3>{`Currently: ${this.props.currTemp} High: ${this.props.highTemp}`}</h3>
                  <Skycons
                    color='black'
                    icon={this.props.weatherIcon}
                    autoplay={true}
                  />
                  <p>Summary: {this.props.dayForecast}</p>
                  <p><small>https://darksky.net/poweredby/</small></p>
                </Segment>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default Home;
