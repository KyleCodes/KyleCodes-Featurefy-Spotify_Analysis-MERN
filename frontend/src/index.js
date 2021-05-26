import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import './index.css';
import App from './Components/App.js';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore()
  
  const root = document.getElementById('root')
  
  ReactDOM.render(<App store={ store } />, root)
})

