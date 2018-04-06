import React from 'react';
import ReactDOM from 'react-dom';
import makeLoadable from 'src/makeLoadable';

const App = makeLoadable('./App.js');

ReactDOM.render(<App />, document.getElementById('root'));
