import React, { Component } from "react";
import CharacterItems from "./character/characterItems";
import { Link } from "react-router-dom";

class Characters extends Component {
  state = {};
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
            <h1 className="display-4 color-white orange-background-player">{this.props.username}</h1>
            <p className="lead color-orange grey-background-player">
              Current Funds = {this.props.funds} credits
            </p>
            <hr className="my-4" />
            <h4 className="color-white blue-background-player">Items</h4>
            <p className="thin-line" />
            <div className="items">
              {this.props.userItems.map(item => (
                <CharacterItems
                  key={item.id}
                  item={item}
                  playerLocation={this.props.playerLocation}
                  shopBuySellRefresh={this.props.shopBuySellRefresh}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Characters;
