import { useState } from 'react';

function isRequired(val) {
    return val.length > 0 ? '' : 'cannot be empty';
}


export default function VetReg() {
    const [userInfo, setUserInfo] = useState('');
    const [errors, setErrors] = useState([]);


    function validate(validation) {
        setErrors(validation.map(errorsFor => errors(userInfo)))
    }

    
        
    

    return (
        
        <form className="input-form" >

            <div>
            <h2>Veterans Registration</h2> 
            <div>
                <label className='' htmlFor=''>First Name</label>
                <input type='text' 
                name='firstName' 
                placeholder='First Name' 
                value={userInfo} 
                onChange={e => setUserInfo(e.target.value)} />
            </div>
            <div>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' name='lastName' placeholder='Last Name' value={userInfo} onChange={e => setUserInfo(e.target.value)} />
            </div>
            <div>
                <label htmlFor='mobilePhone'>Mobile Phone#</label>
                <input type='number' name='mobilPhone' placeholder=' Mobile Phone' value={userInfo} onChange={e => setUserInfo(e.target.value)} />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' placeholder='Email' value={userInfo} onChange={e => setUserInfo(e.target.value)} />
            </div>
            <div>
                <label htmlFor='city'>City</label>
                <input type='text' name='city' placeholder='City' value={userInfo} onChange={e => setUserInfo(e.target.value)} />
            </div>
            <div>
                <label htmlFor='state'>State</label>
                <input type='text' name='state' placeholder='State' value={userInfo} onChange={e => setUserInfo(e.target.value)} />
            </div>
            <div>
                <label htmlFor=''>Zip Code</label>
                <input type='number' name='zipCode' placeholder='zip code'  value={userInfo} onChange={e => setUserInfo(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username' placeholder='username' value={userInfo} onChange={e => setUserInfo(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' placeholder='password' value={userInfo} onChange={e => setUserInfo(e.target.value)} />
            </div>
            <div>
                <label htmlFor='password2'>Verify Password</label>
                <input type='text' name='password2' placeholder='verify password' value={userInfo} onChange={e => setUserInfo(e.target.value)} />
            </div>
            <div>
                <button  className='input-btn' type='submit'>Register  </button>
            </div>
            </div>

        </form>

        
    )}

