import React, { Component } from "react";
import { Link } from "react-router-dom";
class Day extends Component {
  render() {
    return (
      <div className="dayPage">
        <p className="footer-item logout-btn">
          <Link
            className="fas fa-sign-out-alt size2half logout-btn"
            style={{ textDecoration: "none" }}
            to="/logout"
          />
        </p>
        <div className="weatherImageDiv">
          <img
            className="weatherImage"
            src={this.props.weather.weatherIcon}
            alt=""
          />
          <h1 className="weatherPtag">{this.props.weather.weather}</h1>
        </div>
      </div>
    );
  }
}
export default Day;

// https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png
