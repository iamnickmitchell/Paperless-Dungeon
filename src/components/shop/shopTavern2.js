import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShopCards from "./shopCards";
import shopBuy from "./shopBuy";

class ShopTavern2 extends Component {
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
            {this.props.playerLocation} Tavern
          </h3>
          <p className="lead color-orange grey-background">
            Current Funds = {this.props.funds} gold
          </p>

          <p className="footer-icon color-orange">
            <Link
              className="far fa-arrow-alt-circle-left size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Back"
              to="/Shop"
            />
            {this.state.newItemButton}
            {this.state.newRewardButton}
            <Link
              className="fas fa-hammer size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Blacksmith"
              to="/Shop-blacksmith"
            />
            <Link
              className="fas fa-store-alt size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Shop"
              to="/Shop-shop"
            />
            <Link
              className="fas fa-drumstick-bite size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Restaurant"
              to="/Shop-restaurant"
            />
            <Link
              className="fas fa-hat-wizard size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Clothing"
              to="/Shop-clothing"
            />
            <Link
              className="fas fa-horse size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Transportation"
              to="/Shop-transportation"
            />
            <Link
              className="fas fa-building size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Bank"
              to="/Shop-bank"
            />
            <Link
              className="fas fa-beer size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Tavern"
              to="/Shop-tavern"
            />
            <Link
              className="fas fa-briefcase-medical size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Hospital"
              to="/Shop-hospital"
            />
            <Link
              className="fas fa-book-open size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Library"
              to="/Shop-library"
            />
            <Link
              className="fas fa-dog size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Farm"
              to="/Shop-farm"
            />
            <Link
              className="fas fa-shield-alt size2half color-white iconFooter"
              style={{ textDecoration: "none" }}
              title="Armorer"
              to="/Shop-armorer"
            />
          </p>
          <hr className="my-4" />
          <h4 className="color-white blue-background">{this.props.tavernNames}</h4>
          <p className="thin-line" />
          <div className="items">
            {this.props.items.map(items => (
              <ShopCards
                shopBuySellRefresh={this.props.shopBuySellRefresh}
                itemShopBuy={this.itemShopBuy}
                key={items.id}
                items={items}
                playerLocation={this.props.playerLocation}
                playerLocationSize={this.props.playerLocationSize}
                itemsRefresh={this.props.itemsRefresh}
                shopId={7}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ShopTavern2;