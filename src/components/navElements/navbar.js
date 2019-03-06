import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/characters">Characters</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/day">Day</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/maps">Maps</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar