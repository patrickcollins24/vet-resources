import {  useState } from 'react';

const AddAppointment = ({ onAdd }) => {
    const [, setTitle] =useState('')
    const [date, setDate] =useState('')
    const [time, setTime] =useState('')
    const [reminder, setReminder] =useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title) {
            alert('Please Enter Your Appointment')
            return
        }

        onAdd({ title, date, time, reminder })

        setTitle('')
        setDate('')
        setTime('')
        setReminder('')
    }


    return (
        <div>
            <form className="form-control" onSubmit={onSubmit}>
                <h2>Appointment</h2>
                <br/>
                <h3>Add Appointment</h3>
                <div>
                <label htmlFor='title'>
                    Title
                </label>
                <input type='text'  
                name='title' 
                placeholder='enter appointment' 
                onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                <label htmlFor='date'>
                    Date
                </label>
                <input type='date' 
                name='date' 
                placeholder='enter date'
                onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div>
                <label htmlFor='time'>
                    Time
                </label>
                <input type='text' 
                name='time'
                onChange={(e) => setTime(e.target.value)}/>
                </div>
                <div>
                    <label >
                        Reminder
                    </label>
                    <br/>
                    <select>
                        <option onChange={(e) => setReminder(e.target.value)}>text message</option>
                        <option onChange={(e) => setReminder(e.target.value)}>email</option>
                    </select>
                    </div>
                    <button className='form-btn' type='submit'>Add Appointment</button>
                    <div>
                        
                    </div>
            </form>
        </div>
    )
}

export default AddAppointment;
