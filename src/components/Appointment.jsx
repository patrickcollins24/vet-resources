

const Appointment = ({appointment}) => {
    return (
        <div>
            <h3>{appointment.title}</h3>
            <p>{appointment.date}</p>
            <p>{appointment.time}</p>
            <p>{appointment.reminder}</p>
            <p>{appointment.type}</p>
        </div>
    )
}

export default Appointment
