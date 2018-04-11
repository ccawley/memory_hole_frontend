import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
// import MorningRoutine from './components/MorningRoutine';
// import EveningRoutine from './components/EveningRoutine';
// import Header from './components/NavBar';
import LoginForm from './components/SplashLogin';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      is_logged_in: false
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="Container">
          {this.state.is_logged_in ? (<Home />) : (<LoginForm />)}
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
