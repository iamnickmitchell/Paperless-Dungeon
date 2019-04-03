import React, { Component } from "react";
import apiManager from "../apiManager";

class ItemEdit extends Component {
  state = {
    name: this.props.location.state.name,
    statOne: this.props.location.state.statOne,
    statTwo: this.props.location.state.statTwo,
    description: this.props.location.state.description,
    image: this.props.location.state.image,
    itemTypeId: this.props.location.state.itemTypeId,
    itemRarityId: this.props.location.state.itemRarityId,
    value: this.props.location.state.value,
    legal: this.props.location.state.legal,
    error: "",
    success: "",
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
  handleLogin = e => {
    e.preventDefault();

    const fetchURL = "http://localhost:8080";
    fetch(`${fetchURL}/items`)
      .then(item => item.json())
      .then(item => {
        for (let i = 0; i < item.length; i++) {
          if (item[i].name === this.state.usernameCreate) {
            const error =
              "This item already exists! Try naming it something else.";
            this.setState({ error });
          } else {
            const success =
              "Congratulations, a new item has been made! You can view it in the shop.";
            this.setState({ success });
          }
        }
      });
    const editItem = {
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
    const id = this.props.location.state.id
    if (this.state.success !== null) {
      apiManager.itemEdit(editItem, id)
      .then(()=>this.props.itemsRefresh())
      .then(()=>this.props.history.push("/shop"))
    }
  };

  render() {
    return (
      <div className="space-background createPage">
      <form className="createItems" onSubmit={this.handleLogin}>
        <h1 className="h3 mb-3 font-weight-normal color-orange">Create an Item</h1>
        <p>
          <label htmlFor="inputUsername"></label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="name"
            placeholder="Name"
            required=""
            autoFocus=""
            autoComplete="off"
            value={this.state.name}
          />
        </p>
        <p>
          <label htmlFor="inputPassword"></label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="statOne"
            placeholder="First Stat:"
            required=""
            autoComplete="off"
            value={this.state.statOne}
          />
        </p>
        <p>
          <label htmlFor="inputPassword"></label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="statTwo"
            placeholder="Second Stat."
            required=""
            autoComplete="off"
            value={this.state.statTwo}
          />
        </p>
        <p>
          <label htmlFor="inputPassword"></label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="description"
            placeholder="Description"
            required=""
            autoComplete="off"
            value={this.state.description}
          />
        </p>
        <p>
          <label htmlFor="inputPassword"></label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="image"
            placeholder="Image"
            required=""
            autoComplete="off"
            value={this.state.image}
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
            value={this.state.value}
          />
        </p>
        <p>
        <label></label>
          <select value={this.state.itemRarityId} id="itemRarityId" onChange={this.handleFieldChange}>
            <option defaultValue="1">Common</option>
            <option value="2">Uncommon</option>
            <option value="3">Rare</option>
            <option value="4">Very-Rare</option>
            <option value="5">Legendary</option>
          </select>
        </p>
        <p>
        <label></label>
          <select value={this.state.itemTypeId} id="itemTypeId" onChange={this.handleFieldChange}>
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
        <button className="submit" type="submit">Save Edit</button>
        <h4>{this.state.error}</h4>
        <h4>{this.state.success}</h4>
        <h4>{this.state.shop}</h4>
      </form></div>
    );
  }
}

export default ItemEdit;
