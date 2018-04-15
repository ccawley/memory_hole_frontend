import React, { Component } from 'react';
import { Grid, Responsive, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Skycons from 'react-skycons';
const DateFormat = require('dateformat');
const Now = new Date();

// Swap when connected to internet or deploy ----------------------------------
class Home extends Component {

  renderWeather = () => {
    return (
      <div>
        <h2>Hello {this.props.firstName}</h2>
        <h3>{DateFormat(Now, "dddd, mmmm dS, yyyy")}</h3>
        <h3>{`Currently: ${this.props.currTemp} - High: ${this.props.highTemp}`}</h3>
        <Skycons
          color='black'
          icon={this.props.weatherIcon}
          autoplay={true}
        />
        <p>Summary: {this.props.dayForecast}</p>
        <p><small>https://darksky.net/poweredby/</small></p>
        <div>
          <Link to="/morning/firstVictory">
            <Button attached='left'>Start Morning</Button>
          </Link>
          <Link to="/evening/picOfTheDay">
            <Button attached='right'>Start Evening</Button>
          </Link>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center' width={14}>
              { this.props.dayForecast ? this.renderWeather() : null}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

// Swap when offline ----------------------------------------------------------
// class Home extends Component {
//
//   state = {
//     firstName: 'Curtis',
//     dayForecast: 'Cloudy with a chance of meatballs. Raining spagooter later this evening.',
//     currTemp: 45,
//     highTemp: 58,
//     weatherIcon: 'PARTLY_CLOUDY_DAY',
//
//   }
//
//   renderWeather = () => {
//     return (
//       <div>
//         <h2>Hello {this.state.firstName}</h2>
//         <h3>{DateFormat(Now, "dddd, mmmm dS, yyyy")}</h3>
//         <h3>{`Currently: ${this.state.currTemp} - High: ${this.state.highTemp}`}</h3>
//         <Skycons
//           color='black'
//           icon={this.state.weatherIcon}
//           autoplay={true}
//         />
//         <p>Summary: {this.state.dayForecast}</p>
//         <p><small>https://darksky.net/poweredby/</small></p>
//         <div>
//           <Link to="/morning/firstVictory">
//             <Button attached='left'>Start Morning</Button>
//           </Link>
//           <Link to="/evening/lessons">
//             <Button attached='right'>Start Evening</Button>
//           </Link>
//         </div>
//       </div>
//     )
//   }
//
//   render() {
//     return (
//       <Responsive {...Responsive.onlyMobile}>
//         <Grid>
//           <Grid.Row centered>
//             <Grid.Column textAlign='center' width={14}>
//               {this.renderWeather()}
//             </Grid.Column>
//           </Grid.Row>
//         </Grid>
//       </Responsive>
//     );
//   }
// }

export default Home;
