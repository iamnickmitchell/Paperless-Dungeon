import React, { Component } from "react";

class Shop extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h3 className="color-white">-Location Placeholder- Shopping Center</h3>
        {/* <p className="lead">Current Funds = {this.state.funds} credits</p> */}
        <hr className="my-4" />
        <h4 className="color-white">Weapons Shop</h4>
        <p className="thin-line"></p>
        <div className="items"><p>Weapon Name</p><p>Weapon Rarity</p><p>Weapon Cost</p></div>
        {/* {this.state.weapons.map(item => <ShopWeapons key={item.id} item={item} />)} */}
        <hr className="my-4" />
        <h4 className="color-white">Hardware Store</h4>
        <p className="thin-line"></p>
        <div className="items"><p>Item Name</p><p>Item Rarity</p><p>Item Cost</p></div>
        {/* {this.state.weapons.map(item => <ShopWeapons key={item.id} item={item} />)} */}
        <hr className="my-4" />
        <h4 className="color-white">Market</h4>
        <p className="thin-line"></p>
        <div className="items"><p>Food Name</p><p>Food Rarity</p><p>Food Cost</p></div>
        {/* {this.state.weapons.map(item => <ShopWeapons key={item.id} item={item} />)} */}
      </div>
    );
  }
}

export default Shop;
