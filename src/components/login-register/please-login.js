import React, { Component } from "react";
import { Link } from "react-router-dom";

class PleaseLogin extends Component {
  render() {
    return (
      <div className="mainPage">
        <h2>You aren't logged in!</h2>
        <p className="lead">
          Please log-in to an existing character account or create a new one.
        </p>
        <hr className="my-4" />
        <p className="footer-icon">
          <Link
            className="fas fa-user size2half color-white iconFooter"
            style={{ textDecoration: "none" }}
            to="/login"
          />{" "}
          Login
        </p>

        <p className="footer-icon">
          <Link
            className="fas fa-plus size2half color-white iconFooter"
            style={{ textDecoration: "none" }}
            to="/register"
          />{" "}
          New Character
        </p>

      </div>
    );
  }
}

export default PleaseLogin;
