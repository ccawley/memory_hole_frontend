import React, { Component } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function InspirationalQuote(props) {
  console.log(props);
  return (
    // <Responsive {...Responsive.onlyComputer}>
      <Grid>
        <Grid.Row centered>
          <Grid.Column textAlign='center' width={8} className='dailyCard'>
            <h1>Congrats! Now wake up with some chill time.</h1>
            <p>
              {/* You're off to a great start on this beautiful day.<br></br> */}
              Reward yourself by waking up for the next 10 minutes doing<br></br>something you enjoy that doesn't take much concentration.<br></br>
            </p>
            <p>
              Make a batch of coffee or some tea, take a hot shower.<br></br>Whatever helps you get in a good headspace and feeling happy.
            </p>
            <p>Here's an inspirational quote to ponder as you let your mind awake.</p>
            <p>{props.quote}</p>
            <p>~ {props.author} ~</p>
            <Link to="/gratitudes"><Button>Next!</Button></Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    // </Responsive>
  );
}

export default InspirationalQuote;
