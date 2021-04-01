import { useState } from 'react';
import './App.css';
import Appointments from './components/Appointments';
import Navbar from "./components/Navbar/Navbar";
import { FormProvider } from 'react-hook-form';



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


  return (

    <div className="App">
      <Navbar />
      <Appointments appointments={appointments} />
    </div>
  );
}

