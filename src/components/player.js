import React, { Component } from "react";
import CharacterItems from "./character/characterItems";
import { Link } from "react-router-dom";

class Characters extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <p className="footer-item logout-btn">
          <Link
            className="fas fa-sign-out-alt size2half logout-btn"
            style={{ textDecoration: "none" }}
            to="/logout"
          />
        </p>
        <div className="playerDiv">
          <div className="jumbotron">
            <h1 className="display-4 color-white">{this.props.username}</h1>
            <p className="lead color-orange">Current Funds = {this.props.funds} credits</p>
            <hr className="my-4" />
            <h4 className="color-white">Items</h4>
            <p className="thin-line" />
            <div className="items">
            {this.props.userItems.map(item => (
              <CharacterItems key={item.id} item={item} />
            ))}</div>
            {/* <Table>
          this.state.items.map(i => <item item={i} />)
          </Table> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Characters;