
import React, { Component } from "react";

const locationImage = "Tatooine.jpeg"

class Maps extends Component {
  render() {
    return (
      <div className="mainPage">
        <div className="mapsDiv">
        <img src={require(`./maps/mapImages/${locationImage}`)} alt="Whoops"></img>
        </div>
      </div>
    );
  }
}

export default Maps;