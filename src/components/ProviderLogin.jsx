import React,{useState} from "react";
import LoginMessage from "./LoginMessage";

const ProviderLogin =()=> {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [signinerror,setSigninerror] = useState("");
  const [loginData,setLoginData] = useState("");   
  
  const _handleusername = (input) => {
    setUsername(input)
  };

  const _handlepassword = (input) => {
    setPassword(input)
  };

  const _handleSubmit = async(event) => {
    event.preventDefault();
    const loginData ={
      username: username,
      password: password,
    };

    const response = await fetch(`http://127.0.0.1:3003/users/login`,{
      method: "POST", 
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(loginData)
    });
    const resData = await response.json();
    console.log("server response is:", resData)
    if (resData.msg){
      setSigninerror(resData.msg)
    }
    else{
      
    }
  };

    return (
      <>
        <form onSubmit={event => _handleSubmit(event)}>
            <div><h1>Login</h1>
        </div>
        <div><h2>Sign in Below</h2></div>
            <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Your Username"
              value={username}
              onChange={(event) => {
                _handleusername(event.target.value);
              }}
            />
          </label>
            <div>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        placeholder="Your Password"
                        value={password}
                        onChange={(event) => {
                          _handlepassword(event.target.value);
                        }}
                    />
                </label>
                
          </div>
          <button type="submit">Login</button>
        </form>
        {/* {!!this.state.loginData ? (
          <LoginMessage
            isValid={this.state.loginData.isValid}
            message={this.state.loginData.message}
          />
        ) : null} */}
      </>
    );
  
}

export default ProviderLogin;
