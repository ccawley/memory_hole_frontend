import React, { Component } from 'react';
import { Grid, Form, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function InspirationalQuote(props) {
  // handle bad quote requests or missing authors...
  // if (props.author === '') props.author = 'Unknown'
  // if (props.quote === '' && props.author === '') {
  //   props.quote = '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”'
  //   props.author = 'Albert Einstein'
  // }

  return (
    <Responsive {...Responsive.onlyMobile}>
      <Grid>
        <Grid.Row centered>
          <Grid.Column textAlign='center' width={13} className='dailyCard'>
            <h1>You're crushing it!</h1>
            <h2>Now, take 10 minutes to give your brain some morning love. Allow it wake up slowly and mindfully.</h2>
            <p>
              Make a batch of coffee or some tea, show some love to your four legged friend or sit and meditate. Whatever helps you get in a good headspace and feeling happy is fanastic!
            </p>
            <h3>Let this quote be an inspiration for your day.</h3>
            <h3>{props.quote}</h3>
            <h3>~ {props.author} ~</h3>
            <Link to="/gratitudes"><Button>Next!</Button></Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Responsive>
  );
}

export default InspirationalQuote;
