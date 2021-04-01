import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Appointments from './components/Appointments';
import AddAppointment from './components/AddAppointment';





export default function App() {
  
  const [appointments, setAppointments]= useState([

    {
    id: 1,
    title: 'Va Clinic appointment',
    date: '05/25/2021',
    time: '8:00pm',
    reminder: true,
    type: 'medical'
},

    {
    id: 2,
    title: 'resume writing workshop',
    date: '06/24/2021',
    time: '10:00am',
    reminder: true,
    type: 'event'
},
    {
    id: 3,   
    title: 'take medicine',
    date: '03/31/2021',
    time: '8:00am',
    reminder: true,
    type: 'general'
},


])


const deleteAppointment = (id) => {
  setAppointments(appointments.filter((appointment => appointment.id !== id) ))
  
}


  return (

    <div className="App">
      <Navbar />
      <AddAppointment />
      {appointments.length > 0 ?<Appointments appointments={appointments} onDelete={deleteAppointment} /> : 'Add New Appointment'} 
    </div>
  );
}

