import React from "react";
import LoginMessage from "./LoginMessage";

class ProviderRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      email: "",
      City: "",
      State: "",
      ZipCode: "",
      username: "",
      password: "",
      PasswordConfirm: "",
      ProviderCode: "",
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
      this.state.PhoneNumber,
      this.state.email,
      this.state.City,
      this.state.State,
      this.state.ZipCode,
      this.state.username,
      this.state.password,
      this.state.PasswordConfirm,
      this.state.ProviderCode
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
            <div><h1>Registration</h1>
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
          <br/>

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
                <br/>

          <div>
                <label>
                    Phone Number:
                    <input
                        type="text"
                        name="PhoneNumber"
                        placeholder="Your Phone Number"
                        value={this.state.PhoneNumber}
                        onChange={(event) => {
                        this._onChange("PhoneNumber", event.target.value);
                        }}
                    />
                </label>
                <br/>
                <label>
                    Email:
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
                <br/>
          </div>
          <div>
                <label>
                    City:
                    <input
                        type="text"
                        name="City"
                        placeholder="Your City"
                        value={this.state.City}
                        onChange={(event) => {
                        this._onChange("City", event.target.value);
                        }}
                    />
                </label>
                <br/>
                <label>
                    State:
                    <input
                        type="text"
                        name="State"
                        placeholder="Your State"
                        value={this.state.State}
                        onChange={(event) => {
                        this._onChange("State", event.target.value);
                        }}
                    />
                </label>
                <br/>
                <label>
                    Zip Code:
                    <input
                        type="text"
                        name="ZipCode"
                        placeholder="Your ZipCode"
                        value={this.state.ZipCode}
                        onChange={(event) => {
                        this._onChange("ZipCode", event.target.value);
                        }}
                    />
                </label>
                <br/>
          </div>
          <div>
                <label>
                    Username:
                    <input
                        type="text"
                        name="password"
                        placeholder="Your username"
                        value={this.state.username}
                        onChange={(event) => {
                        this._onChange("username", event.target.value);
                        }}
                    />
                </label>
                <br/>
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
                <br/>
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
                <br/>
          </div>
          <button type="submit">Submit</button>
          <div>
                <label>
                    Provider? Click here:
                    <input
                        type="checkbox"
                        name="Provider?"
                        placeholder="Provider?"
                        onChange={this.handleChange} 
                    />
                </label>
                <br/>
          </div>         
          
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

export default ProviderRegistration;
