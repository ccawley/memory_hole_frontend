import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MorningRoutine from './components/MorningRoutine';
import EveningRoutine from './components/EveningRoutine';
import Header from './components/NavBar';

import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="Container">
          <Header />
          <MorningRoutine />
          <EveningRoutine />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
