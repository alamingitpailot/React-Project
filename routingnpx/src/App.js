import React, { Component } from 'react'

import './App.css';
import About from './components/pages/About';
import { BrowserRouter as Router,Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Route>
        <div>
          <h1>Header</h1>

          <Router exact path='/' render={props => (

            <div>
                <h1>Home Page</h1>
              <a href="/about">Go to About Page</a>
            </div>  
            

          )}/>

          <Router path='/About' component={About} />
          
        </div>
    </Route>
    )
  }
}
export default App;

 
