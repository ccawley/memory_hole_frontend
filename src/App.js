import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import MorningRoutine from './components/MorningRoutine';
import EveningRoutine from './components/EveningRoutine';
import Header from './components/NavBar';
import LoginForm from './components/SplashLogin';
import Registration from './components/Registration';
import Calender from './components/Calender';

import './App.css';
import axios from 'axios';

//not deployed
const baseURL = 'http://localhost:8000'

//deployed
// const baseURL = 'https://commit-m.herokuapp.com/'

class App extends Component {
  constructor() {
    super();

    // ---------------------------swap for deployed----------------------------
    this.state = {
      is_logged_in: false,
      user_id: null,
      user_name: null,
      first_name: null,
      currTemp: 0,
      dayForecast: '',
      weatherIcon: '',
      highTemp: 0,
      loginError: ''
    }
  }
    // ---------------------------swap when developing-------------------------
  //   this.state = {
  //     is_logged_in: true,
  //     user_id: 1,
  //     user_name: 'Busey',
  //     first_name: 'Gary',
  //     currTemp: 0,
  //     dayForecast: null,
  //     weatherIcon: 'CLOUDY',
  //     highTemp: 0
  //   }
  // }

  onLoginSubmit = (e) => {
    e.preventDefault()
    // set state with user_id from db
    const postData = {
      user_name: e.target.user_name.value,
      password: e.target.password.value
    }

    axios.post(`${baseURL}/user/login`, postData)
      .then(result => {
      // set state with user_id from db..
        this.setState({
          is_logged_in: true,
          user_id: result.data.id,
          user_name: result.data.user_name,
          first_name: result.data.first_name
        })
        this.props.history.push('/home')
      })
      .catch(err => {
        // This catches an incorrect login but now need to pass that state to my splashLogin component and show it to the user.
        console.log(err.response.data.error);
        this.setState({ loginError: err.response.data.error })
      });
  }

  onRegistrationSubmit = (e) => {
    e.preventDefault()

    const postData = {
      user_name: e.target.user_name.value,
      first_name: e.target.first_name.value,
      password: e.target.password.value
    }

    axios.post(`${baseURL}/user/createUser`, postData)
      .then(result => {
          // set state with user_id from db..
          // this.setState({ user_id: result.data.id })
        this.props.history.push('/login')
      })
      .catch(console.error)
  }

  componentDidMount() {
    this.getCoords()
    this.getWeather()
  }

  getWeather = (latitude, longitude) => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${'6240cc42aaad1d910992a699a33d5d0a'}/${latitude},${longitude}`, {headers: {'x-requested-with': 'curl'}})
      .then(res => {
        // console.log(res)
        this.setState({
          currTemp: res.data.currently.temperature,
          dayForecast: res.data.hourly.summary,
          weatherIcon: res.data.hourly.icon.split('-').join('_').toUpperCase(),
          highTemp: res.data.daily.data[0].temperatureMax
        })
      })
      .catch(console.error)
  }

  getCoords = () => {
    // navigator.geolocation.getCurrentPosition(getCoor, errorCoor, {maximumAge:60000, timeout:5000, enableHighAccuracy:true});
    navigator.geolocation.getCurrentPosition(position => {
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude
      this.getWeather(latitude, longitude)
    },err => {
      // console.log(err)
      this.getWeather(47.6, -122.33)
    }, {maximumAge:60000, timeout:100, enableHighAccuracy:true})
  }

  logout = () => {
    // localStorage.removeItem('token')
    console.log("clicked logout app.js");
    this.setState({ is_logged_in: false})
    window.location.replace('/login')
  }

  render() {
    return (
      <div className="Container">
        { this.state.is_logged_in ? <Header logout={this.logout} /> : null}
        <Route path='/home' render={props => (
          <Home
            firstName={this.state.first_name}
            currTemp={this.state.currTemp}
            highTemp={this.state.highTemp}
            dayForecast={this.state.dayForecast}
            weatherIcon={this.state.weatherIcon}
            {...props}
          />
        )} />
        <Route path='/login' render={props => (
          <LoginForm
            onSubmit={this.onLoginSubmit}
            {...props}
          />
        )} />
        <Route path='/register' render={props => (
          <Registration onSubmit={this.onRegistrationSubmit} {...props} />
        )} />
        <Route path='/morning' render={props => (
          <MorningRoutine user_id={this.state.user_id} {...props} />
        )} />
        <Route path='/evening' render={props => (
          <EveningRoutine user_id={this.state.user_id} {...props} />
        )} />
        <Route path='/calender' render={props => (
          <Calender user_id={this.state.user_id} {...props} />
        )} />
      </div>

    );
  }
}

export default App;
