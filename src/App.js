import './App.css';
import Appointment from './components/Appointment';
import Navbar from "./components/Navbar/Navbar";



export default function App() {
  return (

    <div className="App">
      <Navbar />
      <Appointment />
    </div>
  );
}

