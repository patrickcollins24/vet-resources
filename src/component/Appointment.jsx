

const Appointment = () => {


    return (
        <div>
            <form>
                <h2>Appointment</h2>
                <br/>
                <h3>Add Appointment</h3>
                <div>
                <label htmlFor='title'>
                    Title
                </label>
                <input type='text' placeholder='enter appointment'/>
                </div>
                <label htmlFor='title'>
                    Date
                </label>
                <input type='date' name='date'/>
                <label htmlFor='title'>
                    Time
                </label>
                <input type='text' name='time'/>
                <div>
                    <label >
                        Reminder
                    </label>
                    <br/>
                    <select>
                    <option>text message</option>
                    <option>email</option>
                    </select>
                    </div>
                    <button className='form-btn' type='submit'>Add Appointment</button>
                
            </form>
        </div>
    )
}

export default Appointment
