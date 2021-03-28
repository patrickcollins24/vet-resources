import './App.css';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import { useState } from 'react';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import VetReg from './component/VetReg';


export default function App() {




  return (

    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/VetReg">
            <VetReg />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );

  

  

  
  
}

