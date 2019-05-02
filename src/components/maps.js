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
          <h2 className="grey-background-player map-arrow-div">
            <p>{this.props.playerLocation}</p><p><i className="fas fa-sort-up map-scroll-arrow"></i></p>
          </h2>
          <p className="tan-background color-black font-maps-p">
            Environment: {this.props.playerLocationBiome}
          </p>
          <p className="tan-background color-black font-maps-p">
            Owned By: {this.props.playerLocationOwner}
          </p>
          <p className="tan-background color-black font-maps-p">
            Ruled By: {this.props.playerLocationRuler}
          </p>
          <h5 className="blue-background font-maps-h5">
            Player Arrival Date:
          </h5>
          <p className="blue-background font-maps-p">Game Day: {this.props.groupDay}</p>
          <p className="blue-background font-maps-p">
            Real Time: {this.props.playerLocationArrival}
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
        {this.props.loadingScreen}
      </div>
    );
  }
}

export default Maps;
