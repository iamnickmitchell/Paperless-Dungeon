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

        <h2>Coming Soon!</h2>
      </div></div>
    );
  }
}

export default Day;
