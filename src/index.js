import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, withRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const RouterApp = withRouter(App)

ReactDOM.render(<BrowserRouter><RouterApp/></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
