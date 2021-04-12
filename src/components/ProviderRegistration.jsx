import { useState } from 'react';
import LoginMessage from "./LoginMessage";

const ProviderRegistration = () => {
  const [provider, setProvider] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const _handleProvider = (input) => {
    setProvider(input)
  };
  const _handleFirstName = (input) => {
    setFirstName(input)
  };
  const _handleLastName = (input) => {
    setLastName(input)
  };
  const _handleEmail = (input) => {
    setEmail(input)
  };
  const _handleUsername = (input) => {
    setUsername(input)
  };
  const _handlePassword = (input) => {
    setPassword(input)
  };

const _handleSubmit = async(event) => {
    event.preventDefault();
    const registerData = {
      provider: provider,
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: username,
      password: password,

    };
  

    const response = await fetch(`http://127.0.0.1:3003/users/register`,{
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(registerData)
    });
    const resData = await response.json();
    console.log("server response is:", resData)


  };


    return (
      <>
        <div className='container'>

        <form className='add-form' onSubmit={_handleSubmit}>
            <div><h1>Registration</h1>
        </div>
        <div className='form-control'><h2>Please Fill out the following information</h2></div>
        <div className='form-control'>
                <label>
                    Provider? Click here:
                    <input
                        type="checkbox"
                        name="Provider?"
                        placeholder="Provider?"
                        onChange={_handleProvider} 
                    />
                </label>
                <br/>
          </div>         
        <div className='form-control'>
            <label>
            First Name:
            <input
              type="text"
              name="FirstName"
              placeholder="Your First Name"
              value={firstName}
              onChange={(event) => {
              _handleFirstName(event.target.value);
              }}
            />
          </label>
          </div>
          <br/>
                <div className='form-control'>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="LastName"
                        placeholder="Your LastName"
                        value={lastName}
                        onChange={(event) => {
                        _handleLastName(event.target.value);
                        }}
                    />
                </label>
                </div>
                <br/>

          <div className='form-control'>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(event) => {
                        _handleEmail(event.target.value);
                        }}
                    />
                </label>
                <br/>
          </div>
          <div className='form-control'>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        placeholder="Your username"
                        value={username}
                        onChange={(event) => {
                        _handleUsername(event.target.value);
                        }}
                    />
                </label>
                <br/>
          </div>
          <div className='form-control'>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        placeholder="Your Password"
                        value={password}
                        onChange={(event) => {
                        _handlePassword(event.target.value);
                        }}
                    />
                </label>
                <br/>
              
          </div>
          <button type="submit">Submit</button>
          
          
        </form>
        {/* {!!this.state.serverResponse ? (
          <LoginMessage
            isValid={this.state.serverResponse.isValid}
            message={this.state.serverResponse.message}
          />
        ) : null} */}
        </div>
      </>
    );
  }


export default ProviderRegistration;
