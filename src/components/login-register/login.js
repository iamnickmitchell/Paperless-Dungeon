import React, { Component } from "react";
import apiManager from "../apiManager";

class Login extends Component {
  // Set initial state
  state = {
    usernameLogin: "",
    passwordLogin: "",
    error: ""
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
        if (
          login[i].name === this.state.usernameLogin &&
          login[i].password === this.state.passwordLogin
        ) {
          localStorage.setItem("logged-in", JSON.stringify(login[i].id));
          this.props.history.push("/");
          this.props.refresh();
        } else if (
          login[i].name === this.state.usernameLogin &&
          login[i].password !== this.state.passwordLogin
        ) {
          const error = "Whoops, wrong password!";
          this.setState({ error });
        }
      }
    })
  };

  render() {
    return (
      <div className="playerPage">
        <form className="loginForm" onSubmit={this.handleLogin}>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <p>
            <label htmlFor="inputUsername" hidden={true}>
              Username
            </label>
            <input
              onChange={this.handleFieldChange}
              type="text"
              id="usernameLogin"
              placeholder="Username"
              required=""
              autoFocus=""
            />
          </p>
          <p>
            <label htmlFor="inputPassword" hidden={true}>
              Password
            </label>
            <input
              onChange={this.handleFieldChange}
              type="password"
              id="passwordLogin"
              placeholder="Password"
              required=""
            />
          </p>
          <button type="submit" className="signIn">
            Sign in
          </button>
          <h4>{this.state.error}</h4>
        </form>
      </div>
    );
  }
}

export default Login;
