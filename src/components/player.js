import React, { Component } from "react";
import CharacterItems from "./character/characterItems";
import { Link } from "react-router-dom";

class Characters extends Component {
  state = {
  };

  weightLimits = () => {
    if (this.props.currentWeight < this.props.maxCarry / 2) {
      const normal = (
        <p className="lightWeight">
          (Weight: {this.props.currentWeight}/{this.props.maxCarry} lbs.)
        </p>
      );
      return normal;
    } else if (this.props.currentWeight <= this.props.maxCarry) {
      const slow = (
        <p className="heavyWeight">
          (Weight: {this.props.currentWeight}/{this.props.maxCarry} lbs.)
        </p>
      );
      return slow;
    } else if (this.props.currentWeight > this.props.maxCarry) {
      const stopped = (
        <p className="maxWeight">
          (Weight: {this.props.currentWeight}/{this.props.maxCarry} lbs.)
        </p>
      );
      return stopped;
    }
  };

  render() {
    return (
      <div className="playerPage">
        <p className="footer-item logout-btn">
          <Link
            className="fas fa-sign-out-alt size2half logout-btn"
            style={{ textDecoration: "none" }}
            to="/logout"
          />
        </p>
        <div className="playerDiv">
          <div className="jumbotron">
            <h1 className="display-4 color-white orange-background-player">
              {this.props.username}
            </h1>
            <p className="lead color-orange grey-background-player">
              Current Funds = {this.props.funds} gold
            </p>
            <hr className="my-4" />
            <h4 className="color-white blue-background-player">
              Items{" "}
              {/* <p className="weight">
                (Weight: {this.props.currentWeight}/{this.props.maxCarry} lbs.)
              </p> */}
              {this.weightLimits()}
            </h4>
            <p className="thin-line" />
            <div className="items">
              {this.props.userItems.map(item => (
                <CharacterItems
                  key={item.id}
                  item={item}
                  playerLocation={this.props.playerLocation}
                  shopBuySellRefresh={this.props.shopBuySellRefresh}
                  carryRefresh={this.props.carryRefresh}
                />
              ))}
            </div>

            {/* <hr className="my-4" />
            <h4 className="color-white blue-background-player">Background:</h4>
            <div className="items grey-background">
              <p>{this.state.background}</p>
            </div>
            <hr className="my-4" />
            <h4 className="color-white blue-background-player">Stats:</h4>
            <div className="items grey-background">
              <h5>Player Name: {this.state.playerName}</h5>
            </div>
            <hr className="my-4" /> */}
          </div>
        </div>
        {this.props.loadingScreen}
      </div>
    );
  }
}

export default Characters;
