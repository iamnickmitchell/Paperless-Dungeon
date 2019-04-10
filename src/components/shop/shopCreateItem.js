import React, { Component } from "react";
import apiManager from "../apiManager";
import { isNullOrUndefined } from "util";

class ItemCreate extends Component {
  state = {
    name: "",
    statOne: "",
    statTwo: "",
    description: "https://www.dndbeyond.com/",
    image: "https://i1.wp.com/thefrontline.org.uk/wp-content/uploads/2018/10/placeholder.jpg?fit=1600%2C900&ssl=1",
    itemTypeId: 1,
    itemRarityId: 1,
    value: 0,
    legal: true,
    error: "",
    success: "",
    shop: ``
  };

  toggleChange = () => {
    this.setState({
      legal: !this.state.legal
    });
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };


  handleLogin = e => {
    e.preventDefault();

    const fetchURL = "http://localhost:8080";
    fetch(`${fetchURL}/items`)
      .then(item => item.json())
      .then(item => {
        for (let i = 0; i < item.length; i++) {
          if (item[i].name === this.state.name) {
            const error =
              "This item already exists! Try naming it something else.";
            this.setState({ error });
          } else if(item[i].name === this.state.name){
            const success =
              "Congratulations, a new item has been made! You can view it in the shop.";
            this.setState({ success });
          }
        }
      })
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
    if (this.state.success !== isNullOrUndefined) {
      apiManager.itemCreate(createItem)
      .then(()=>this.props.itemsRefresh())
      .then(()=>this.props.history.push("/shop"))
    }
  };

  render() {
    return (
      <div className="space-background createPage">
      <form className="createItems" onSubmit={this.handleLogin}>
        <h1 className="h3 mb-3 font-weight-normal color-white">Create an Item</h1>
        <p>
          <label htmlFor="inputUsername"></label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="name"
            placeholder="Item Name"
            required=""
            autoFocus=""
            autoComplete="off"
          />
        </p>
        <p>
          <label htmlFor="inputPassword"></label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="statOne"
            placeholder="Item's first stat"
            required=""
            autoComplete="off"
          />
        </p>
        <p>
          <label htmlFor="inputPassword"></label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="statTwo"
            placeholder="Item's second stat"
            required=""
            autoComplete="off"
          />
        </p>
        <p>
          <label htmlFor="inputPassword"></label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="description"
            placeholder="Description: Insert URL to external web page or leave blank."
            required=""
            autoComplete="off"
          />
        </p>
        <p>
          <label htmlFor="inputPassword"></label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="image"
            placeholder="Image: Insert URL to image or leave blank."
            required=""
            autoComplete="off"
          />
        </p>
        <p>
          <label></label>
          <input
            onChange={this.handleFieldChange}
            type="number"
            id="value"
            placeholder="Item Cost"
            required=""
            autoComplete="off"
          />
        </p>
        <p>
        <label></label>
          <select id="itemRarityId" onChange={this.handleFieldChange}>
            <option defaultValue="1">--> Select Item Rarity:</option>
            <option value="1">Common</option>
            <option value="2">Uncommon</option>
            <option value="3">Rare</option>
            <option value="4">Very-Rare</option>
            <option value="5">Legendary</option>
          </select>
        </p>
        <p>
        <label></label>
          <select id="itemTypeId" onChange={this.handleFieldChange}>
            <option defaultValue="1">--> Select Item Type:</option>
            <option value="1">Weapon</option>
            <option value="2">Tool</option>
            <option value="3">Food</option>
            <option value="4">Clothing</option>
            <option value="5">Transportation</option>
            <option value="6">Property</option>
            <option value="7">Hirelings</option>
            <option value="8">Medicine</option>
            <option value="9">Scrolls, Tomes, and Books</option>
            <option value="10">Animals</option>
            <option value="11">Armor</option>
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
        <button className="submit" type="submit">Create Item</button>
        <h4>{this.state.error}</h4>
        <h4>{this.state.success}</h4>
        <h4>{this.state.shop}</h4>
      </form></div>
    );
  }
}

export default ItemCreate;