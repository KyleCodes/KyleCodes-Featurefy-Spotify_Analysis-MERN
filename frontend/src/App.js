import React from 'react';
import './App.css';
import Header from './Header.js' 
import Sidebar from './Sidebar.js'
import Analysis from './Analysis'

function App() {
  return (
    <div className="app">
      <Header></Header>

      <div className="page-content">

        <Sidebar></Sidebar>

        <Analysis></Analysis>


      </div>

    </div>
  );
}

export default App;



/*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/

