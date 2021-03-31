import Appointment from './Appointment';

const Appointments = ({appointments}) => {
    


    return (
        <>
            {appointments.map((appointment) => (
                <Appointment key={appointment.id} appointment={appointment} />
            ))} 
        </>
    )
}



export default Appointments
