import React, { Component } from "react";
import apiManager from "../apiManager";
import { Link } from "react-router-dom";

class Register extends Component {
  // Set initial state
  state = {
    usernameCreate: "",
    passwordCreate: "",
    funds: 0,
    dm: false,
    groupId: 1,
    error: "",
    success: "",
    loginButton: ``
  };

  toggleChange = () => {
    this.setState({
      dm: !this.state.dm
    });
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // Simplistic handler for login submit
  handleLogin = e => {
    e.preventDefault();

    apiManager.login().then(login => {
      for (let i = 0; i < login.length; i++) {
        if (login[i].name === this.state.usernameCreate) {
          const error = "This character already exists! Try a different name.";
          this.setState({ error });
        } else {
          const success =
            "Congratulations, a new account has been made! You can now log in.";
          this.setState({ success });
          const loginButton = (
            <p className="footer-item">
              <Link
                className="fas fa-sign-in-alt size2half"
                style={{ textDecoration: "none" }}
                to="/login"
              />
            </p>
          );
          this.setState({ loginButton });
        }
      }
    });
    const createUser = {
      name: this.state.usernameCreate,
      dm: this.state.dm,
      password: this.state.passwordCreate,
      funds: this.state.funds,
      groupId: this.state.groupId
    };
    if (this.state.success !== null) {
      apiManager.register(createUser);
    }
  };

  render() {
    return (
      <form className="mainPage" onSubmit={this.handleLogin}>
        <h1 className="h3 mb-3 font-weight-normal">Create a Character</h1>
        <p>
          <label htmlFor="inputUsername">Character Name: </label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="usernameCreate"
            placeholder="Username"
            required=""
            autoFocus=""
          />
        </p>
        <p>
          <label htmlFor="inputPassword">Password: </label>
          <input
            onChange={this.handleFieldChange}
            type="password"
            id="passwordCreate"
            placeholder="Password"
            required=""
          />
        </p>
        <p>
        <label>Starting Funds:</label>
        <input
          onChange={this.handleFieldChange}
          type="number"
          id="funds"
          placeholder="funds"
          required=""
        />
        </p>
        <p>
        <label>DM:</label>
          <input
            name="dm"
            type="checkbox"
            checked={this.state.dm}
            onChange={this.toggleChange}
          />
          </p>
        <button type="submit">Create New Character</button>
        <h4>{this.state.error}</h4>
        <h4>{this.state.success}</h4>
        <h4>{this.state.loginButton}</h4>
      </form>
    );
  }
}

export default Register;
