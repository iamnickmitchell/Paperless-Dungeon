import React, { Component } from "react";
class Home extends Component {

  render() {
    return (
      <div className="space-background-two">
      <div className="mainPage">
        <h2>Hello Adventurers!</h2>
        <p className="lead">
          This tool is intended to help automate the grunt work of your
          campaign.
        </p>
        <hr className="my-4" />
        <p>
        As a player you can: Purchase, view, and sell items. View your current location's overview map and some basic stats about it. See the days weather and what day your group is currently on.
        </p>
      </div>
      {this.props.loadingScreen}
      {/* <div id="three-container"></div>
      <div id="instructions">
      Search for locations, cities, items, or species.
      </div> */}
      </div>
    );
  }
}
export default Home;