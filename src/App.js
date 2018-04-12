import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import MorningRoutine from './components/MorningRoutine';
import EveningRoutine from './components/EveningRoutine';
// import Header from './components/NavBar';
import LoginForm from './components/SplashLogin';
import Registration from './components/Registration';

import './App.css';
import axios from 'axios';

//not deployed
const baseURL = 'http://localhost:8000'

//deployed
// const baseURL = 'https://commit-m.herokuapp.com/'

class App extends Component {
  constructor() {
    super();
    this.state = {
      is_logged_in: false,
      user_id: null
    }
  }

  onLoginSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.user_name.value, e.target.password.value);
    // post req
    // set state with user_id from db
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
        this.setState({ user_id: result.data.id })
        this.props.history.push('/login')
      })
      .catch(console.error)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="Container">
          <Route path='/home' render={props => (
            <Home />
          )} />
          <Route path='/login' render={props => (
            <LoginForm onSubmit={this.onLoginSubmit} />
          )} />
          <Route path='/register' render={props => (
            <Registration onSubmit={this.onRegistrationSubmit} />
          )} />
          <Route path='/morning' render={props => (
            <MorningRoutine user_id={this.state.user_id} {...props} />
          )} />
          <Route path='/evening' render={props => (
            <EveningRoutine user_id={this.state.user_id} {...props} />
          )} />
          {/* {this.state.is_logged_in ?  : <LoginForm />} */}
        </div>
        {/* <div className="Container">
              {this.state.isLoggedIn ? (
                <LoginForm />
              ) : (
                <Header />
                <MorningRoutine />
                <EveningRoutine />
              )
            </div> */}
      </BrowserRouter>
    );
  }
}

export default App;
