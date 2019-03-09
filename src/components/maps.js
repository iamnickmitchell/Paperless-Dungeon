import React, { Component } from "react";

class Maps extends Component {
  render() {
    return (
      <div className="mainPage">
        <div className="mapsDiv">
        <img src={require("./maps/mapImages/Tatooine.jpeg")} alt="Whoops"></img>
        </div>
      </div>
    );
  }
}

export default Maps;
