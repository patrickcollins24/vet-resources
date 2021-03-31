import './App.css';
import Appointments from './components/Appointments';
import Navbar from "./components/Navbar/Navbar";



export default function App() {
  return (

    <div className="App">
      <Navbar />
      <Appointments />
    </div>
  );
}

