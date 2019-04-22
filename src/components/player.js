import React, { Component } from "react";
import CharacterItems from "./character/characterItems";
import { Link } from "react-router-dom";

class Characters extends Component {
  state = {
    playerName: "Nick",
    background:
      "Apollyon began his career as a guardian angel over a century ago. That path changed when the one he was trusted to guard turned to a life of crime. Without a job he fell into the role of an oathbreaker, bringing destruction to the world under the employ of Asmodeus. This relationship prospered and grew until he became a chosen of Asmodeus. Now he travels the planes completing quests as they are given, but unknown to everyone he has a secret quest of his own..."
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
              <p>
                (Weight: {this.props.currentWeight}/{this.props.maxCarry} lbs.)
              </p>
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
      </div>
    );
  }
}

export default Characters;
