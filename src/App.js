import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MenuItems from 'react'
import Appointments from './components/Appointments';
import AddAppointment from './components/AddAppointment';
import VeteranPage from './components/VeteranPage';
import ProviderPage from './components/ProviderPage';
import ProviderLogin from './components/ProviderLogin';
import ProviderRegistration from './components/ProviderRegistration';
import ResourcesPage from './components/ResourcesPage';





export default function App() {
  const [user,setUser]=useState({});
  const [isloggedin,setIsloggedin]=useState(false);
  const [isadmin,setIsadmin]=useState(false);
  return (
    <Router>
       <Switch>
          <Route exact path="/">
            <Navbar />
            <ProviderLogin user={user} isloggedin={isloggedin} isadmin={isadmin}/>
          </Route>
          <Route path="/resources">
            <Navbar />
            <ResourcesPage />
          </Route>
          <Route path="/register">
            <Navbar />
            <ProviderRegistration />
          </Route>
          <Route path="/users">
            <Navbar />
            <ProviderPage />
          </Route>
          <Route path="/user">
          <Navbar />
          <VeteranPage />
          </Route>        
        </Switch>      
    </Router>
  );
 }