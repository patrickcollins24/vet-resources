

export default function VetReg() {
    






    return (
        <div>
        <h2>Veterans Registration</h2> 
        <form>
            <div>
                <label>First Name</label>
                <input type='text' placeholder='First Name'  />
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' placeholder='Last Name'  />
            </div>
            <div>
                <label>Mobile Phone#</label>
                <input type='number' placeholder=' Mobile Phone'  />
            </div>
            <div>
                <label>Email</label>
                <input type='text' placeholder='Email'  />
            </div>
            <div>
                <label>City, State</label>
                <input type='text' placeholder='City, State'  />
            </div>
            <div>
                <label>Zip Code</label>
                <input type='number' placeholder='zip code'  />
            </div>
            <div>
                <label>Username:</label>
                <input type='text' placeholder='username'  />
            </div>
            <div>
                <label>Password</label>
                <input type='password' placeholder='password'  />
            </div>
            <div>
                <label>Verify Password</label>
                <input type='text' placeholder='verify password' />
            </div>
            <div>
                <input type='submit' placeholder='Submit info'  />
            </div>
        </form>
        </div>
        
    )

}