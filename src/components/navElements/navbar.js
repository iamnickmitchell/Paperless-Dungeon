import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class NavBar extends Component {
    render() {
        return (
            <footer className="footer">
                    <p className="">
                        <Link className="fas fa-home size2half color-white iconFooter" style={{textDecoration: 'none'}} to="/"></Link>
                    </p>
                    <p className="nav-item">
                        <Link className="fas fa-users size2half color-white iconFooter" style={{textDecoration: 'none'}} to="/characters"></Link>
                    </p>
                    <p className="nav-item">
                        <Link className="fas fa-cloud-sun size2half color-white iconFooter" style={{textDecoration: 'none'}} to="/day"></Link>
                    </p>
                    <p className="nav-item">
                        <Link className="fas fa-globe size2half color-white iconFooter" style={{textDecoration: 'none'}} to="/maps"></Link>
                    </p>
                    <p className="nav-item">
                        <Link className="fas fa-shopping-cart size2half color-white iconFooter" style={{textDecoration: 'none'}} to="/shop"></Link>
                    </p>
            </footer>
        )
    }
}

export default NavBar