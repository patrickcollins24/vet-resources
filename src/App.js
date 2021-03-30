import React from "react";
import ProviderRegistration from "./components/ProviderRegistration";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        patrickcollins24: {
          password: "password"
        }
      }
    };
  }

  _checkCredentials = (username, password) => {
    console.log("checking credentials");
    const userObject = this.state.credentials[username];
    if (userObject && userObject.password === password) {
      return {
        isValid: true,
        message: "Login Successful"
      };
    } else {
      return {
        isValid: false,
        message: "Bad username or password"
      };
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Vet Resources</h1>
        </header>
        
        <ProviderRegistration handleSubmit={this._checkCredentials} />
        
        
      </div>
    );
  }
}

export default App
