import React from "react";
import LoginMessage from "./LoginMessage";

class ProviderLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      serverResponse: null
    };
  }

  _onChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  _handleSubmit = (event) => {
    event.preventDefault();
    const serverResponse = this.props.handleSubmit(
      this.state.username,
      this.state.password
    );
    this.setState(
      {
        serverResponse
      },
      () => {
        console.log("server response is:", serverResponse);
      }
    );
  };

  render() {
    return (
      <>
        <form onSubmit={this._handleSubmit}>
            <div><h1>Provider Login</h1>
        </div>
        <div><h2>Register Here</h2>
        </div>
        <div><h2>Already Registered? Sign in Below</h2></div>
            <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Your Username"
              value={this.state.username}
              onChange={(event) => {
                this._onChange("username", event.target.value);
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
                        value={this.state.password}
                        onChange={(event) => {
                        this._onChange("password", event.target.value);
                        }}
                    />
                </label>
                
          </div>
          <button type="submit">Login</button>
        </form>
        {!!this.state.serverResponse ? (
          <LoginMessage
            isValid={this.state.serverResponse.isValid}
            message={this.state.serverResponse.message}
          />
        ) : null}
        <div><h2>Forgot Password?</h2></div>
      </>
    );
  }
}

export default ProviderLogin;
