import Appointment from './Appointment';

const Appointments = ({ appointments, onDelete }) => {
    


    return (
        <>
            {appointments.map((appointment) => (
                <Appointment key={appointment.id} appointment={appointment} onDelete={onDelete} />
            ))} 
        </>
    )
}



export default Appointments
