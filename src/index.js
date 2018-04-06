import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import makeLoadable from 'src/makeLoadable';

const App = makeLoadable({ path: './App.js' });

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
