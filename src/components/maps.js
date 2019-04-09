import React, { Component } from "react";
import { Link } from "react-router-dom";
import changeLocation from "./maps/changeLocation";

class Maps extends Component {
  state = {
    locationCode: []
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };



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
              src={this.props.playerLocationMap}
              alt="Error: Map not found"
              className="zoom"
            />
          </div>
          <h2 className="grey-background">{this.props.playerLocation}</h2>
          <p className="tan-background">
            Location Size: {this.props.playerLocationSizeName}
          </p>
          <p className="tan-background">
            Environment: {this.props.playerLocationBiome}
          </p>
          <p className="tan-background">
            Owned By: {this.props.playerLocationOwner}
          </p>
          <p className="tan-background">
            Ruled By: {this.props.playerLocationRuler}
          </p>
          <p className="blue-background">
            Player Arrival Date: {this.props.playerLocationArrival}
          </p>

          <div className="green-background">
           <p className="thin-line" />
            <form className="">
              <p>
                <label htmlFor="inputLocationCode" />
                <input
                  onChange={this.handleFieldChange}
                  type="text"
                  id="locationCode"
                  placeholder="Location Code"
                  required=""
                  autoFocus=""
                  autoComplete="off"
                />
              </p>
            </form>

            <button
              size="small"
              id="changeLocationButton"
              onClick={() => {
                changeLocation(
                  this.state.locationCode,
                  this.props.locationRefresh
                );
              }}
            >
              Change Location
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Maps;
