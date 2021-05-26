import React from 'react';
import './../styling/App.css';
import Header from './header/Header.js' 
import Footer from './footer/Footer.js'


import Playground from './Playground'

import { Provider } from 'react-redux'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'




// CONTAINS APP ITSELF, CONSISTING OF HEADER / CONTENT / FOOTER

export default function App({store}) {
  


  
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header />

      <Switch>
        <Route
          exact path = '/'
          render = { () => {
            return( <Redirect to = '/playground' /> )
          }}
        
        />

        <Route path='/playground' component={Playground} />
        


        {/*       COMING SOON          */}
        {/* 
          <Route path='/search' component={} />
          <Route path='/history' component={} />
          <Route path='/playlists' component={} />
          <Route path='/friends' component={} /> 
        */}
      </Switch>

      <Footer />
      </BrowserRouter>
    </Provider>
  )
}


// import React from 'react'
// import { Provider } from 'react-redux'
// import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'







