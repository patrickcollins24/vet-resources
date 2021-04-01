import { FaTimes } from 'react-icons/fa';

const Appointment = ({ appointment, onDelete }) => {

    
    return (
        <div className='appointment'> 
            <h3>
                {appointment.title}{''} 
                <FaTimes 
                style={{color:
                'black', cursor: 'pointer'}}
                onClick={() =>{appointment.id}} />
            <p>{appointment.date}</p>
        </h3>
        </div>
    )
}

export default Appointment
