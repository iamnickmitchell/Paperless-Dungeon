import React, { Component } from "react";
import {Link} from "react-router-dom";

const locationImage = "Tatooine.jpeg";

class Maps extends Component {
  render() {
    return (
      <div className="mapPage">
      <p className="footer-item logout-btn">
          <Link
            className="fas fa-sign-out-alt size2half logout-btn"
            style={{ textDecoration: "none" }}
            to="/logout"
          />
        </p>
      <div className="mainPage2">
        <div className="mapsDiv">
          <img
            src={require(`./maps/mapImages/${locationImage}`)}
            alt="Whoops"
          />
        </div>
      </div>
      </div>
    );
  }
}

export default Maps;
