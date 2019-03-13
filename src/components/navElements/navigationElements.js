import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "../home";
import Shop from "../shop";
import Characters from "../player";
import Maps from "../maps";
import Day from "../day";
import Login from "../login-register/login";
import Register from "../login-register/register"
import PleaseLogin from "../login-register/please-login"

class NavigationElements extends Component {
  state = {};

  isAuthenticated = () => localStorage.getItem("logged-in") !== null

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
                  <Maps />
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
                <Characters />
              );
            } else {
              return <PleaseLogin />;
            }
          }}
        />
        <Route
          path="/Shop"
          render={props => {
            if (this.isAuthenticated()) {
                return (
                  <Shop />
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
                return (
                  <Day />
                );
              } else {
                return <PleaseLogin />;
              }
          }}
        />
        <Route
          path="/login"
          render={props => {
            return <Login />;
          }}
        />
        <Route
          path="/register"
          render={props => {
            return <Register />;
          }}
        />
      </div>
    );
  }
}

export default NavigationElements;
