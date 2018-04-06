import React, { Component } from 'react';
import { Responsive, Grid, Form } from 'semantic-ui-react';

function InspirationalQuote(props) {
  console.log(props);
  return (
    // <Responsive {...Responsive.onlyComputer}>
      <Grid>
        <Grid.Row centered>
          <Grid.Column textAlign='center' width={8} className='dailyCard'>
            <div>
              <p>{props.quote}</p>
              <p>~ {props.author}</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    // </Responsive>
  );
}

export default InspirationalQuote;
