import React, { Component } from "react";
// import apiManager from "./ApiManager/apiManager";
import CharacterItems from "./character/characterItems"

const currentUserId = 1;

class Characters extends Component {
  state = {
    username: [],
    items: [],
    funds: []
  };

  componentDidMount() {
    fetch(`http://localhost:8080/users/${currentUserId}`)
    .then(user => user.json())
    .then(parsedUser => {const username = parsedUser.name
    this.setState({username})})
    fetch(`http://localhost:8080/userItems?userId=${currentUserId}&&_expand=item`)
    .then(items => items.json())
    .then(parsedItems => {const items = parsedItems
    this.setState({items})})
    fetch(`http://localhost:8080/playerFunds/${currentUserId}`)
    .then(playerFunds => playerFunds.json())
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
        <h4 className="color-white">Weapons</h4>
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
