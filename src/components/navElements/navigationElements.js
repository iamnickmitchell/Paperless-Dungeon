import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "../home";
import Shop from "../shop";
import Characters from "../player";
import Maps from "../maps";
import Day from "../day";
import ItemCreate from "../shop/shopCreateItem";
import ItemEdit from "../shop/shopEditItem";
import Login from "../login-register/login";
import Logout from "../login-register/logout";
import Register from "../login-register/register";
import PleaseLogin from "../login-register/please-login";
import apiManager from "../apiManager";

const fetchURL = "http://localhost:8080";

class NavigationElements extends Component {
  state = {
    username: [],
    userItems: [],
    funds: [],
    items: [],
    playerLocation: [],
    playerLocationSize: [],
    playerLocationMap: ""
  };

  shopBuySellRefresh = () => {
    const newState = {};
    const currentUserId = localStorage.getItem("logged-in");
    return fetch(`${fetchURL}/userItems?userId=${currentUserId}&_expand=item`)
      .then(userItems => userItems.json())
      .then(parsedUserItems => {
        newState.userItems = parsedUserItems;
      })
      .then(() =>
        fetch(`${fetchURL}/users/${currentUserId}`)
          .then(user => user.json())
          .then(parsedFunds => {
            newState.funds = parsedFunds.funds;
          })
      )
      .then(() => this.setState(newState));
  };

  itemsRefresh = () => {
    const newState = {};
    return fetch(`${fetchURL}/items`)
      .then(location => location.json())
      .then(location => {
        newState.playerLocation = location;
      })
      .then(() => this.setState(newState));
  };

  locationRefresh = () => {
    const newState = {}
    apiManager.playerLocations().then(parsedplayerLocation => {
      newState.playerLocation = parsedplayerLocation.location.cityName;
      newState.playerLocationSize =
        parsedplayerLocation.location.citySizeId;
      newState.playerLocationMap = parsedplayerLocation.location.image;
    })
  .then(() => this.setState(newState));
  };

  refresh = () => {
    const newState = {};
    const currentUserId = localStorage.getItem("logged-in");
    return fetch(`${fetchURL}/users/${currentUserId}`)
      .then(user => user.json())
      .then(parsedUser => {
        newState.username = parsedUser.name;
      })
      .then(() =>
        fetch(`${fetchURL}/userItems?userId=${currentUserId}&&_expand=item`)
          .then(userItems => userItems.json())
          .then(parsedUserItems => {
            newState.userItems = parsedUserItems;
          })
      )
      .then(() =>
        fetch(`${fetchURL}/users/${currentUserId}`)
          .then(user => user.json())
          .then(parsedFunds => {
            newState.funds = parsedFunds.funds;
          })
      )
      .then(() =>
        fetch(`${fetchURL}/items`)
          .then(items => items.json())
          .then(parsedItems => {
            newState.items = parsedItems;
          })
      )
      .then(() =>
        apiManager.playerLocations().then(parsedplayerLocation => {
          newState.playerLocation = parsedplayerLocation.location.cityName;
          newState.playerLocationSize =
            parsedplayerLocation.location.citySizeId;
          newState.playerLocationMap = parsedplayerLocation.location.image;
        })
      )
      .then(() => this.setState(newState));
  };

  componentDidMount() {
    const newState = {};
    return apiManager
      .user()
      .then(parsedUser => {
        newState.username = parsedUser.name;
      })
      .then(() =>
        apiManager.userItems().then(parsedUserItems => {
          newState.userItems = parsedUserItems;
        })
      )
      .then(() =>
        apiManager.user().then(parsedFunds => {
          newState.funds = parsedFunds.funds;
        })
      )
      .then(() =>
        apiManager.items().then(parsedItems => {
          newState.items = parsedItems;
        })
      )
      .then(() =>
        apiManager.playerLocations().then(parsedplayerLocation => {
          newState.playerLocation = parsedplayerLocation.location.cityName;
          newState.playerLocationSize =
            parsedplayerLocation.location.citySizeId;
          newState.playerLocationMap = parsedplayerLocation.location.image;
        })
      )
      .then(() => this.setState(newState));
  }

  isAuthenticated = () => localStorage.getItem("logged-in") !== null;

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        <Route
          path="/maps"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <Maps
                  playerLocationMap={this.state.playerLocationMap}
                  playerLocation={this.state.playerLocation}
                  playerLocationSize={this.state.playerLocationSize}
                  locationRefresh={this.locationRefresh}
                />
              );
            } else {
              return <PleaseLogin />;
            }
          }}
        />
        <Route
          exact
          path="/characters"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <Characters
                  {...props}
                  username={this.state.username}
                  userItems={this.state.userItems}
                  funds={this.state.funds}
                  playerLocation={this.state.playerLocation}
                  shopBuySellRefresh={this.shopBuySellRefresh}
                />
              );
            } else {
              return <PleaseLogin {...props} />;
            }
          }}
        />
        <Route
          path="/Shop"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <Shop
                  {...props}
                  items={this.state.items}
                  funds={this.state.funds}
                  playerLocation={this.state.playerLocation}
                  playerLocationSize={this.state.playerLocationSize}
                  refresh={this.refresh}
                  shopBuySellRefresh={this.shopBuySellRefresh}
                  itemsRefresh={this.itemsRefresh}
                />
              );
            } else {
              return <PleaseLogin />;
            }
          }}
        />
        <Route
          path="/Day"
          render={props => {
            if (this.isAuthenticated()) {
              return <Day />;
            } else {
              return <PleaseLogin />;
            }
          }}
        />
        <Route
          path="/login"
          render={props => {
            return <Login {...props} refresh={this.refresh} />;
          }}
        />
        <Route
          path="/register"
          render={props => {
            return <Register {...props} />;
          }}
        />
        <Route
          path="/logout"
          render={props => {
            return <Logout {...props} />;
          }}
        />
        <Route
          path="/item-create"
          render={props => {
            return <ItemCreate itemsRefresh={this.itemsRefresh} />;
          }}
        />
        <Route
          path="/item-edit"
          render={props => {
            return (
              <ItemEdit
                {...this.props}
                {...props}
                itemsRefresh={this.itemsRefresh}
                editItems={this.props.editItems}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default NavigationElements;
