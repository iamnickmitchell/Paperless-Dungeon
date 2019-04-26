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
import ShopPath from "../shop/shopPath"

const fetchURL = "https://dnd-web-tool.herokuapp.com";

class NavigationElements extends Component {
  state = {
    username: [],
    userItems: [],
    funds: [],
    items: [],
    playerLocation: [],
    playerLocationSize: [],
    playerLocationMap: "",
    maxCarry: "",
    currentWeight: "",
    groups: []
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

  carryRefresh = () => {
    const currentUserId = localStorage.getItem("logged-in")
    const newState = {};
    return apiManager.user(currentUserId)
      .then(user => {
        newState.maxCarry = user.maxCarry;
        newState.currentWeight = user.currentWeight;
      })
      .then(() => this.setState(newState));
  };

  itemsRefresh = () => {
    const newState = {};
    return fetch(`${fetchURL}/items`)
      .then(items => items.json())
      .then(items => {
        newState.items = items;
      })
      .then(() => this.setState(newState));
  };

  groupsRefresh = () => {
    const newState = {};
    return fetch(`${fetchURL}/groups`)
      .then(groups => groups.json())
      .then(groups => {
        newState.groups = groups;
      })
      .then(() => this.setState(newState));
  };

  locationRefresh = () => {
    const currentUserId = localStorage.getItem("logged-in")
    const newState = {};
    apiManager
      .playerLocations(currentUserId)
      .then(parsedplayerLocation => {
        newState.playerLocation = parsedplayerLocation.location.cityName;
        newState.playerLocationSize = parsedplayerLocation.location.citySizeId;
        newState.playerLocationMap = parsedplayerLocation.location.image;
        newState.playerLocationBiome = parsedplayerLocation.location.biome;
        newState.playerLocationOwner = parsedplayerLocation.location.ownedBy;
        newState.playerLocationRuler = parsedplayerLocation.location.ruler;
        newState.playerLocationArrival = parsedplayerLocation.arrivalTime;
      })
      .then(() => this.setState(newState));
  };

  refresh = () => {
    const currentUserId = localStorage.getItem("logged-in")
    const newState = {};
    return apiManager
      .user(currentUserId)
      .then(parsedUser => {
        newState.username = parsedUser.name;
        newState.maxCarry = parsedUser.maxCarry;
        newState.currentWeight = parsedUser.currentWeight;
      })
      .then(() =>
        apiManager.userItems(currentUserId).then(parsedUserItems => {
          newState.userItems = parsedUserItems;
        })
      )
      .then(() =>
        apiManager.user(currentUserId).then(parsedFunds => {
          newState.funds = parsedFunds.funds;
        })
      )
      .then(() =>
        apiManager.items().then(parsedItems => {
          newState.items = parsedItems;
        })
      )
      .then(() =>
        apiManager.playerLocations(currentUserId).then(parsedplayerLocation => {
          newState.playerLocation = parsedplayerLocation.location.cityName;
          newState.playerLocationSize =
            parsedplayerLocation.location.citySizeId;
          newState.playerLocationMap = parsedplayerLocation.location.image;
          newState.playerLocationBiome = parsedplayerLocation.location.biome;
          newState.playerLocationOwner = parsedplayerLocation.location.ownedBy;
          newState.playerLocationRuler = parsedplayerLocation.location.ruler;
          newState.playerLocationArrival = parsedplayerLocation.arrivalTime;
        })
      )
      .then(()=>
      apiManager.groups()
      .then(groups => {
        newState.groups = groups
        })
      )
      .then(() => this.setState(newState));
  };

  componentDidMount() {
    const currentUserId = localStorage.getItem("logged-in")
    const newState = {};
    return apiManager
      .user(currentUserId)
      .then(parsedUser => {
        newState.username = parsedUser.name;
        newState.maxCarry = parsedUser.maxCarry;
        newState.currentWeight = parsedUser.currentWeight;
      })
      .then(() =>
        apiManager.userItems(currentUserId).then(parsedUserItems => {
          newState.userItems = parsedUserItems;
        })
      )
      .then(() =>
        apiManager.user(currentUserId).then(parsedFunds => {
          newState.funds = parsedFunds.funds;
        })
      )
      .then(() =>
        apiManager.items().then(parsedItems => {
          newState.items = parsedItems;
        })
      )
      .then(() =>
        apiManager.playerLocations(currentUserId).then(parsedplayerLocation => {
          newState.playerLocation = parsedplayerLocation.location.cityName;
          newState.playerLocationSize =
            parsedplayerLocation.location.citySizeId;
          newState.playerLocationMap = parsedplayerLocation.location.image;
          newState.playerLocationBiome = parsedplayerLocation.location.biome;
          newState.playerLocationOwner = parsedplayerLocation.location.ownedBy;
          newState.playerLocationRuler = parsedplayerLocation.location.ruler;
          newState.playerLocationArrival = parsedplayerLocation.arrivalTime;
        })
      )
      .then(()=>
      apiManager.groups()
      .then(groups => {
        newState.groups = groups
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
                  playerLocationSizeName={this.state.playerLocationSizeName}
                  playerLocationBiome={this.state.playerLocationBiome}
                  playerLocationOwner={this.state.playerLocationOwner}
                  playerLocationRuler={this.state.playerLocationRuler}
                  playerLocationArrival={this.state.playerLocationArrival}
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
                  carryRefresh={this.carryRefresh}
                  maxCarry={this.state.maxCarry}
                  currentWeight={this.state.currentWeight}
                />
              );
            } else {
              return <PleaseLogin {...props} />;
            }
          }}
        />
        <Route
        exact
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
          path="/Shop/:shopId(\d+)/:shopName"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <ShopPath
                {...props}
                items={this.state.items}
                funds={this.state.funds}
                playerLocation={this.state.playerLocation}
                playerLocationSize={this.state.playerLocationSize}
                refresh={this.refresh}
                shopBuySellRefresh={this.shopBuySellRefresh}
                itemsRefresh={this.itemsRefresh}
                carryRefresh={this.carryRefresh}
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
            return <Register {...props} groups={this.state.groups} refresh={this.refresh} />;
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
            return <ItemCreate {...props} itemsRefresh={this.itemsRefresh} />;
          }}
        />
        <Route
          path="/reward-create"
          render={props => {
            return <ItemCreate {...props} itemsRefresh={this.itemsRefresh} />;
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
