import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './fbInstance';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/base.scss';
import App from './components/App';

console.log(firebase);

ReactDOM.render(<App />, document.getElementById('root'));
