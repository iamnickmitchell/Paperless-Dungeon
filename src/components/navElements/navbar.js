import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class NavBar extends Component {
    render() {
        return (
            <footer className="footer">
                    <p className="footer-icon">
                        <Link className="fas fa-home size2half color-white iconFooter" style={{textDecoration: 'none'}} to="/"></Link>
                    </p>
                    <p className="footer-icon">
                        <Link className="fas fa-warehouse size2half color-white iconFooter" style={{textDecoration: 'none'}} to="/characters"></Link>
                    </p>
                    <p className="footer-icon">
                        <Link className="fas fa-cloud-sun size2half color-white iconFooter" style={{textDecoration: 'none'}} to="/day"></Link>
                    </p>
                    <p className="footer-icon">
                        <Link className="fas fa-map-marker-alt size2half color-white iconFooter" style={{textDecoration: 'none'}} to="/maps"></Link>
                    </p>
                    <p className="footer-icon">
                        <Link className="fas fa-store size2half color-white iconFooter" style={{textDecoration: 'none'}} to="/shop"></Link>
                    </p>
            </footer>
        )
    }
}

export default NavBar