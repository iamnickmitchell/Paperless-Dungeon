import React, { Component } from "react";
import CharacterItems from "./character/characterItems"
import apiManager from "./apiManager";

class Characters extends Component {
  state = {
    username: [],
    items: [],
    funds: []
  };

  componentDidMount() {
    apiManager.user
    .then(parsedUser => {const username = parsedUser.name
    this.setState({username})})
    apiManager.userItems
    .then(parsedUserItems => {const items = parsedUserItems
    this.setState({items})})
    apiManager.user
    .then(parsedFunds => {const funds = parsedFunds.funds
    this.setState({funds})})
  }

  // componentWillReceiveProps(nextProps) {
  //   this.state.items.length !== nextProps.items.legth ? this.setState({nextProps.items})
  // }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4 color-white">{this.state.username}</h1>
        <p className="lead">Current Funds = {this.state.funds} credits</p>
        <hr className="my-4" />
        <h4 className="color-white">Items</h4>
        <p className="thin-line"></p>
        <div className="items"><p>Name</p><p>Damage Dice</p><p>Accuracy</p></div>
        {this.state.items.map(item => <CharacterItems key={item.id} item={item} />)}
        {/* <Table>
          this.state.items.map(i => <item item={i} />)
          </Table> */}
      </div>
    );
  }
}

export default Characters;
