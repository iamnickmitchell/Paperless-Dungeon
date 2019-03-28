import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShopTools from "./shop/shopTools";
import ShopWeapons from "./shop/shopWeapons";
import ShopFood from "./shop/shopFood";
import ShopClothing from "./shop/shopClothing";
import shopBuy from "./shop/shopBuy";

class Shop extends Component {

  state = {
    playerLocation: this.props.playerLocation,
    playerLocationSize: this.props.playerLocationSize,
    funds: this.props.funds,
    items: this.props.items
  }

  itemShopBuy(id, value) {
    shopBuy(id, value);
  }

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
        <div className="jumbotron shopDiv">
          <h3 className="color-white">
            {" "}
            {this.props.playerLocation} Shopping Center
          </h3>
          <p className="lead color-orange">
            Current Funds = {this.props.funds} credits
          </p>

          <hr className="my-4" />
          <h4 className="color-white">Hardware Store</h4>
          <p className="thin-line" />
          <div className="items">
            {this.props.items.map(items => (
              <ShopTools {...this.props} key={items.id} items={items} />
            ))}
          </div>
          <hr className="my-4" />
          <h4 className="color-white">Market</h4>
          <p className="thin-line" />
          <div className="items">
            {this.props.items.map(items => (
              <ShopFood {...this.props} key={items.id} items={items} />
            ))}
          </div>
          <hr className="my-4" />
          <h4 className="color-white">Tailor</h4>
          <p className="thin-line" />
          <div className="items">
            {this.props.items.map(items => (
              <ShopClothing {...this.props} key={items.id} items={items} />
            ))}
          </div>
          <hr className="my-4" />
          <h4 className="color-white">Weapons Shop</h4>
          <p className="thin-line" />
          <div className="items">
            {this.props.items.map(items => (
              <ShopWeapons
                refresh={this.props.refresh}
                itemShopBuy={this.itemShopBuy}
                key={items.id}
                items={items}
                playerLocationSize={this.props.playerLocationSize}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
