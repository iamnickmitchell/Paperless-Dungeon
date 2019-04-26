import React, { Component } from "react";
import { Link } from "react-router-dom";
import shopBuy from "./shop/shopBuy";

class Shop extends Component {
  state = {
    playerLocation: this.props.playerLocation,
    playerLocationSize: this.props.playerLocationSize,
    funds: this.props.funds,
    items: this.props.items,
    newItemButton: ``,
    newRewardButton: ``
  };

  itemShopBuy(id, value) {
    shopBuy(id, value);
  }

  componentDidMount() {
    const fetchURL = "https://dnd-web-tool.herokuapp.com";
    let currentUserId = localStorage.getItem("logged-in");
    let newItemButton = ``;
    let newRewardButton = ``;
    if (currentUserId !== null) {
      return fetch(`${fetchURL}/users/${currentUserId}`)
        .then(user => user.json())
        .then(user => {
          if (user.dm === true) {
            newItemButton = (
              <Link
                className="fas fa-pen-square size2half color-white iconFooter"
                style={{ textDecoration: "none" }}
                to="/item-create"
              />
            );
            newRewardButton = (
              <Link
                className="fas fa-coins size2half color-white iconFooter"
                style={{ textDecoration: "none" }}
                to="/reward-create"
              />
            );
          } else {
          }
        })
        .then(() => this.setState({ newItemButton }))
        .then(() => this.setState({ newRewardButton }));
    }
  }

  render() {
    return (
      <div className="space-background">
        <p className="footer-item logout-btn">
          <Link
            className="fas fa-sign-out-alt size2half logout-btn"
            style={{ textDecoration: "none" }}
            to="/logout"
          />
        </p>
        <div className="jumbotron shopDiv">
          <h3 className="color-black orange-background">
            {" "}
            {this.props.playerLocation}
          </h3>
          <p className="lead color-orange grey-background">
            Current Funds = {this.props.funds} gold
          </p>

          <p className="footer-icon color-orange">
            {this.state.newItemButton}
            {this.state.newRewardButton}
            <Link
              className="fas fa-hammer size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Blacksmith"
              to="/Shop/1/Blacksmith"
            />
            <Link
              className="fas fa-store-alt size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Shop"
              to="/Shop/2/Shop"
            />
            <Link
              className="fas fa-drumstick-bite size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Restaurant"
              to="/Shop/3/Restaurant"
            />
            <Link
              className="fas fa-hat-wizard size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Clothing"
              to="/Shop/4/Clothing"
            />
            <Link
              className="fas fa-horse size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Transportation"
              to="/Shop/5/Transportation"
            />
            <Link
              className="fas fa-building size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Bank"
              to="/Shop/6/Bank"
            />
            <Link
              className="fas fa-beer size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Tavern"
              to="/Shop/7/Tavern"
            />
            <Link
              className="fas fa-briefcase-medical size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Hospital"
              to="/Shop/8/Hospital"
            />
            <Link
              className="fas fa-book-open size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Library"
              to="/Shop/9/Library"
            />
            <Link
              className="fas fa-dog size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Farm"
              to="/Shop/10/Farm"
            />
            <Link
              className="fas fa-shield-alt size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Armorer"
              to="/Shop/11/Armorer"
            />
          </p>
        </div>
      </div>
    );
  }
}

export default Shop;
