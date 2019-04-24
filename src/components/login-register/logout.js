import React, { Component } from "react";

class Logout extends Component {
  handleLogout = e => {
    e.preventDefault();

    localStorage.removeItem('logged-in');
    this.props.history.push("/")
  };

  render() {
    return (
      <form className="playerPage" onSubmit={this.handleLogout} >
      <h1 className="h3 mb-3 font-weight-normal">Are you sure you want to logout?</h1>
      <p className="logout-btn-page2">
      <button type="submit" className="logout-btn2">Logout</button>
    </p>
    </form>
    );
  }
}

export default Logout;
