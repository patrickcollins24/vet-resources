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





export default function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul> */}
        </nav>

        <Switch>
          <Route path="/login">
            <Navbar />
            <ProviderLogin />
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
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
    
  
  function Home() {
    return <h2>Home</h2>;
  }
  function Register() {
    return <h2>Registration</h2>;
  }
  function Login() {
    return <h2>Login</h2>;
  }
  function Users() {
    return <h2>Profile</h2>;
  }
  
  
//   const [appointments, setAppointments]= useState([

//     {
//     id: 1,
//     title: 'Va Clinic appointment',
//     date: '05/25/2021',
//     time: '8:00pm',
//     reminder: true,
//     type: 'medical'
// },

//     {
//     id: 2,
//     title: 'resume writing workshop',
//     date: '06/24/2021',
//     time: '10:00am',
//     reminder: true,
//     type: 'event'
// },
//     {
//     id: 3,   
//     title: 'take medicine',
//     date: '03/31/2021',
//     time: '8:00am',
//     reminder: true,
//     type: 'general'
// },


// ])

// //add
// const addAppointment = (appointment) => {
//   const id = Math.floor(Math.random() * 1000) + 1
//   const newAppointment = { id, ...appointment}
//   setAppointments([...appointment, newAppointment])
// }


// //delete
// const deleteAppointment = (id) => {
//   setAppointments(appointments.filter((appointment => appointment.id !== id) ))
  
// }


  // return (
  //   <div className="App">
  //     <Navbar />
  //     <AddAppointment onAdd={addAppointment} />
  //     {appointments.length > 0 ?<Appointments appointments={appointments} onDelete={deleteAppointment} /> : 'Add New Appointment'} 
  //   </div>
  // );


