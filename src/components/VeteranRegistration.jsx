import React from "react";
import LoginMessage from "./LoginMessage";

class VeteranRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      email: "",
      username: "",
      password: "",
      PasswordConfirm: "",
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
      this.state.FirstName,
      this.state.LastName,
      this.state.email,
      this.state.username,
      this.state.password,
      this.state.PasswordConfirm
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
            <div><h1>Veteran Registration</h1>
        </div>
        <div><h2>Please Fill out the following information</h2></div>
            <label>
            First Name:
            <input
              type="text"
              name="FirstName"
              placeholder="Your First Name"
              value={this.state.FirstName}
              onChange={(event) => {
                this._onChange("FirstName", event.target.value);
              }}
            />
          </label>

                <label>
                    Last Name:
                    <input
                        type="text"
                        name="LastName"
                        placeholder="Your LastName"
                        value={this.state.LastName}
                        onChange={(event) => {
                        this._onChange("LastName", event.target.value);
                        }}
                    />
                </label>

          <div>
                <label>
                    email:
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={this.state.email}
                        onChange={(event) => {
                        this._onChange("email", event.target.value);
                        }}
                    />
                </label>
          </div>
          <div>
                <label>
                    username:
                    <input
                        type="text"
                        name="username"
                        placeholder="Your username"
                        value={this.state.username}
                        onChange={(event) => {
                        this._onChange("username", event.target.value);
                        }}
                    />
                </label>
          </div>
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
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        name="PasswordConfirm"
                        placeholder="Confirm Password"
                        value={this.state.PasswordConfirm}
                        onChange={(event) => {
                        this._onChange("PasswordConfirm", event.target.value);
                        }}
                    />
                </label>
          </div>


          
          <button type="submit">Submit</button>
        </form>
        {!!this.state.serverResponse ? (
          <LoginMessage
            isValid={this.state.serverResponse.isValid}
            message={this.state.serverResponse.message}
          />
        ) : null}
      </>
    );
  }
}

export default VeteranRegistration;
