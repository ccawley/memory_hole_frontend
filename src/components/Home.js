import React, { Component } from 'react';
import { Grid, Responsive } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center'>
              <h1>HOME</h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default Home;
