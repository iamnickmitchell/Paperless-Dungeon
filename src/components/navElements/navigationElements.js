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
import ShopBlacksmith from "../shop/shopBlacksmith";
import ShopShop from "../shop/shopShop";
import ShopRestaurant from "../shop/shopRestaurant";
import ShopClothing2 from "../shop/shopClothing2";
import ShopTransportation from "../shop/shopTransportation";
import ShopBank2 from "../shop/shopBank2";
import ShopTavern2 from "../shop/shopTavern2";
import ShopHospital2 from "../shop/shopHospital2";
import ShopLibrary2 from "../shop/shopLibrary2";
import ShopFarm2 from "../shop/shopFarm2";
import ShopArmorer2 from "../shop/shopArmorer2";

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
      .then(items => items.json())
      .then(items => {
        newState.items = items;
      })
      .then(() => this.setState(newState));
  };

  locationRefresh = () => {
    const newState = {};
    apiManager
      .playerLocations()
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
          newState.playerLocationBiome = parsedplayerLocation.location.biome;
          newState.playerLocationOwner = parsedplayerLocation.location.ownedBy;
          newState.playerLocationRuler = parsedplayerLocation.location.ruler;
          newState.playerLocationArrival = parsedplayerLocation.arrivalTime;
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
          newState.playerLocationBiome = parsedplayerLocation.location.biome;
          newState.playerLocationOwner = parsedplayerLocation.location.ownedBy;
          newState.playerLocationRuler = parsedplayerLocation.location.ruler;
          newState.playerLocationArrival = parsedplayerLocation.arrivalTime;
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
          path="/Shop-blacksmith"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <ShopBlacksmith
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
          path="/Shop-shop"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <ShopShop
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
          path="/Shop-restaurant"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <ShopRestaurant
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
          path="/Shop-clothing"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <ShopClothing2
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
          path="/Shop-transportation"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <ShopTransportation
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
          path="/Shop-bank"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <ShopBank2
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
          path="/Shop-tavern"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <ShopTavern2
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
          path="/Shop-hospital"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <ShopHospital2
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
          path="/Shop-library"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <ShopLibrary2
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
          path="/Shop-farm"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <ShopFarm2
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
          path="/Shop-armorer"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <ShopArmorer2
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