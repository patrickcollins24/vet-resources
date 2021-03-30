import './App.css';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import { useState } from 'react';
import Home from './component/Home';
import About from './component/About';
import Appointment from './component/Appointment';



export default function App() {

  const [inputInfo, setInputInfo]= useState({
    firstName: '',
    lastName: '',
    mobilePhone: '',
    city: '',
    state: '',
    zipCode: '',
    username: '',
    password: '',
    password2: '',
  });
  




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
            <Appointment />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );

  

  

  
  
}

