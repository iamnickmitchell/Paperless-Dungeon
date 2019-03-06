import { Route } from 'react-router-dom'
import React, { Component } from "react"
import Home from './home'
import Shop from './shop'
import Characters from './player'
import Maps from './maps'
import Day from './day'


class ApplicationViews extends Component {
    state = {
        // players: this.employeesFromAPI,
        // shop: this.locationsFromAPI,
        // map: this.animalsFromAPI
    }

    // componentDidMount(){
    //     const newState = {};
    //     fetch("http://localhost:8080/userItems?_expand=user&&_expand=item")
    //     .then(userItems = userItems.json())
    //     .then(parsedUserItems => {
    //         newState.userItems = parsedUserItems;
    //     return fetch("http://localhost:8080/items")
    //     }).then(items = items.json())
    //     .then(parsedItems => {
    //         newState.items = parsedItems;
    //         this.setState(newState)
    //     })
    // }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route path="/maps" render={(props) => {
                    return <Maps />
                }} />
                <Route path="/characters" render={(props) => {
                    return <Characters />
                }} />
                <Route path="/Shop" render={(props) => {
                    return <Shop />
                }} />
                <Route path="/Day" render={(props) => {
                    return <Day />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews