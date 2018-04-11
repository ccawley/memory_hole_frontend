import React from 'react';
import { Grid, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function AwakeMindfully(props) {

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
            <Link to="/morning/morningGratitudes"><Button>Next!</Button></Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Responsive>
  );
}

export default AwakeMindfully;
