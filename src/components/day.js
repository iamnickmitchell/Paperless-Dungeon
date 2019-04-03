import React, { Component } from "react";
import { Link } from "react-router-dom";
class Day extends Component {
  render() {
    return (
      <div> <p className="footer-item logout-btn">
          <Link
            className="fas fa-sign-out-alt size2half logout-btn"
            style={{ textDecoration: "none" }}
            to="/logout"
          />
        </p>
      <div className="comingSoon">

        <h2>Coming Soon! That you for your patience.</h2>
        <p>Coming in version 1.0.0.0</p>
      </div></div>
    );
  }
}

export default Day;