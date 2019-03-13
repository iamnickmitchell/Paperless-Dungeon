import React, { Component } from "react";
import apiManager from "../apiManager";

class Login extends Component {
  // Set initial state
  state = {
    usernameLogin: "",
    passwordLogin: ""
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

    apiManager.login.then(login => {
      for (let i = 0; i < login.length; i++) {
        if (
          login[i].name === this.state.usernameLogin &&
          login[i].password === this.state.passwordLogin
        ) {
          localStorage.setItem("logged-in", JSON.stringify(login[i].id));
        }
      }
    });

    // localStorage.setItem(
    //     "dm",
    //     JSON.stringify(
    //       true
    //     )
    //   );
  };

  render() {
    return (
      <form className="mainPage" onSubmit={this.handleLogin}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername">Username</label>
        <input
          onChange={this.handleFieldChange}
          type="text"
          id="usernameLogin"
          placeholder="Username"
          required=""
          autoFocus=""
        />
        <label htmlFor="inputPassword">Password</label>
        <input
          onChange={this.handleFieldChange}
          type="password"
          id="passwordLogin"
          placeholder="Password"
          required=""
        />
        <button type="submit">Sign in</button>
      </form>
    );
  }
}

export default Login;
