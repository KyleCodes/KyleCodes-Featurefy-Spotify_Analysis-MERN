import React from 'react';
import './App.css';
import Header from './Header.js' 
import Footer from './Footer.js'
import PageContent from './PageContent'

// CONTAINS APP ITSELF, CONSISTING OF HEADER / CONTENT / FOOTER
export default function App() {

  return (
    <div id="app">
      <Header/>
      <PageContent/>
      <Footer/>
    </div>
  );

}










