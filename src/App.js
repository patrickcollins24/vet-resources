import './App.css';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import { useState } from 'react';
import Header from './component/Header';
import Home from './component/Home';
import VetReg from './component/VetReg';


export default function App() {




  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">VetReg</Link>
            </li>
            <li>
              <Link to="/">users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/VetReg">
            <VetReg />
          </Route>
          <Route path="/User">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );

  function Home() {
    return <h2>Home</h2>;
  }
  function VetReg() {
    return <h2>Registration</h2>;
  }
  function User() {
    return <h2>Profile</h2>;
  }
  
}

