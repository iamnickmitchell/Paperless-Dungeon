import React, { Component } from "react";
import apiManager from "../apiManager";
import { Link } from "react-router-dom";

class ItemCreate extends Component {
  state = {
    userName: "",
    itemName: "",
    userId: "",
    itemId: "",
    rewardFunds: "",
    itemSelect: "",
    wealthSelect: "",
    errorItem: "",
    successItem: "",
    errorUser: "",
    successUser: "",
    shop: ``
  };

  toggleChange = () => {
    this.setState({
      legal: !this.state.legal
    });
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // Simplistic handler for login submit
  handleLoginItem = e => {
    e.preventDefault();

    const fetchURL = "http://localhost:8080";
    fetch(`${fetchURL}/items`)
      .then(item => item.json())
      .then(item => {
        for (let i = 0; i < item.length; i++) {
          if (item[i].name !== this.state.itemName) {
            const errorItem =
              "This item doesn't exists! Make sure you are tying the Item name exactly as it is in the shop.";
            this.setState({ errorItem });
          } else {
            const successItem =
              "Item is able to be sent.";
            this.setState({ successItem });
            const shop = (
              <p className="footer-item">
                <Link
                  className="far fa-shopping-cart size2half color-orange"
                  style={{ textDecoration: "none" }}
                  to="/shop"
                />
              </p>
            );
            this.setState({ shop });
          }
        }
      });
    const createItem = {
      name: this.state.name,
      statOne: this.state.statOne,
      statTwo: this.state.statTwo,
      description: this.state.description,
      image: this.state.image,
      itemTypeId: this.state.itemTypeId,
      itemRarityId: this.state.itemRarityId,
      value: this.state.value,
      legal: this.state.legal,
      userId: localStorage.getItem("logged-in")
    };
    if (this.state.success !== null) {
      apiManager.itemCreate(createItem)
      .then(()=>this.props.itemsRefresh())
    }
  };

  render() {
    return (
      <form className="mainPage" onSubmit={this.handleLoginItem}>
        <h1 className="h3 mb-3 font-weight-normal">Create an Item</h1>
        <p>
          <label htmlFor="inputUsername">Name: </label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="name"
            placeholder="Datapad"
            required=""
            autoFocus=""
          />
        </p>
        <p>
          <label htmlFor="inputPassword">First Stat: </label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="statOne"
            placeholder="A space tablet"
            required=""
          />
        </p>
        <p>
          <label htmlFor="inputPassword">Second Stat: </label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="statTwo"
            placeholder="Able to get information."
            required=""
          />
        </p>
        <p>
          <label htmlFor="inputPassword">Description: </label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="description"
            placeholder="Insert URL to external web page or leave blank."
            required=""
          />
        </p>
        <p>
          <label htmlFor="inputPassword">Image: </label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="image"
            placeholder="Insert URL to image or leave blank."
            required=""
          />
        </p>
        <p>
          <label>Value: </label>
          <input
            onChange={this.handleFieldChange}
            type="number"
            id="value"
            placeholder="Item Cost"
            required=""
          />
        </p>
        <p>
        <label>Item Rarity: </label>
          <select id="itemRarityId" onChange={this.handleFieldChange}>
            <option defaultValue="1">Common</option>
            <option value="2">Uncommon</option>
            <option value="3">Rare</option>
            <option value="4">Very-Rare</option>
            <option value="5">Legendary</option>
          </select>
        </p>
        <p>
        <label>Item Type: </label>
          <select id="itemTypeId" onChange={this.handleFieldChange}>
            <option defaultValue="1">Weapon</option>
            <option value="2">Tool</option>
            <option value="3">Food</option>
            <option value="4">Clothing</option>
            <option value="5">Hirelings, Vehicles, and Property</option>
          </select>
        </p>
        <p>
          <label>Legal:</label>
          <input
            name="legal"
            type="checkbox"
            checked={this.state.legal}
            onChange={this.toggleChange}
          />
        </p>
        <button type="submit">Create Item</button>
        <h4>{this.state.error}</h4>
        <h4>{this.state.success}</h4>
        <h4>{this.state.shop}</h4>
      </form>
    );
  }
}

export default ItemCreate;