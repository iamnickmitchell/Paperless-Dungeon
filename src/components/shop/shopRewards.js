import React, { Component } from "react";
import apiManager from "../apiManager";

class RewardCreate extends Component {
  state = {
    itemName: "",
    itemId: 0,
    recipientsName: "",
    recipientsId: 0,
    rewardId: 0,
    rewardType: "gold",
    error: "",
    success: null,
    print: ``
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleClick = e => {
    e.preventDefault();
    const gold = (
      <p>
        <label />
        <select id="itemId" onChange={this.handleFieldChange}>
          <option defaultValue="309">--> Select Reward Amount:</option>
          <option value="309">1 Gold</option>
          <option value="310">5 Gold</option>
          <option value="311">100 Gold</option>
          <option value="312">500 Gold</option>
          <option value="313">1000 Gold</option>
          <option value="314">2000 Gold</option>
          <option value="315">5000 Gold</option>
          <option value="316">10000 Gold</option>
        </select>
      </p>
    );
    const item = (
      <p>
        <label htmlFor="inputPassword" />
        <input
          onChange={this.handleFieldChange}
          type="text"
          id="itemName"
          placeholder="Item's Name"
          required=""
          autoComplete="off"
        />
      </p>
    );
    const both = (
      <div>
        <p>
          <label />
          <select id="itemId" onChange={this.handleFieldChange}>
            <option defaultValue="309">--> Select Reward Amount:</option>
            <option value="309">1 Gold</option>
            <option value="310">5 Gold</option>
            <option value="311">100 Gold</option>
            <option value="312">500 Gold</option>
            <option value="313">1000 Gold</option>
            <option value="314">2000 Gold</option>
            <option value="315">5000 Gold</option>
            <option value="316">10000 Gold</option>
          </select>
        </p>
        <p>
          <label htmlFor="inputPassword" />
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="itemName"
            placeholder="Item's Name"
            required=""
            autoComplete="off"
          />
        </p>
      </div>
    );
    if (this.state.rewardType === "gold") {
      this.setState({ print: gold });
    } else if (this.state.rewardType === "item") {
      this.setState({ print: item });
    } else if (this.state.rewardType === "both") {
      this.setState({ print: both });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const fetchURL = "https://dnd-web-tool.herokuapp.com";
    fetch(`${fetchURL}/items`)
      .then(item => item.json())
      .then(item => {
        for (let i = 0; i < item.length; i++) {
          if (item[i].name === this.state.itemName) {
            this.setState({ itemId: item[i].id });
            console.log(item[i].id);
            // this.setState({ success: "Item Sent" });
          } else {
          }
        }
      }).then(()=>
      fetch(`${fetchURL}/users`)
      .then(users => users.json())
      .then(user => {
        for (let i = 0; i < user.length; i++) {
          if (user[i].name === this.state.recipientsName) {
            this.setState({ recipientsId: user[i].id });
            console.log(user[i].id);
            this.setState({ success: "Item Sent" });
          } else {}
        }
      })
      )
      .then(() => {
        var d = new Date(),
          currentTime =
            [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
            " " +
            [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
        const giveItem = {
          userId: this.state.recipientsId,
          itemId: this.state.itemId,
          boughtTime: currentTime,
          bought: `Reward from userId:${localStorage.getItem(
            "logged-in"
          )}`,
          soldTime: null,
          sold: null
        };
        if (this.state.success !== null) {
          console.log(giveItem);
          apiManager
            .rewardItemCreate(giveItem)
            .then(() => this.props.itemsRefresh())
            .then(() => this.props.history.push("/shop"));
        }
      });
  };

  render() {
    return (
      <div className="space-background createPage">
        <form className="createItems" onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal color-white">
            Send Reward
          </h1>
          <p>
            <label htmlFor="inputItemName" />
            <input
              onChange={this.handleFieldChange}
              type="text"
              id="recipientsName"
              placeholder="Recipient's Name"
              required=""
              autoFocus=""
              autoComplete="off"
            />
          </p>
          <p>
            <label />
            <select id="rewardType" onChange={this.handleFieldChange}>
              <option defaultValue="gold">--> Select Reward Type:</option>
              <option value="gold">Gold</option>
              <option value="item">Item</option>
              <option value="both">Item and Gold</option>
            </select>

            <button className="rewardSubmit" onClick={this.handleClick}>
              Change
            </button>
          </p>
          {this.state.print}
          <button className="submit" type="submit">
            Create Item
          </button>
          <h4>{this.state.error}</h4>
          <h4>{this.state.success}</h4>
          <h4>{this.state.shop}</h4>
        </form>
      </div>
    );
  }
}
export default RewardCreate;
