import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class NavBar extends Component {
    render() {
        return (
            <div>
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
            <p className="footerLogo logo"> Paperless Dungeon <a href="https://gist.github.com/iamnickmitchell/9a7182422e510ca68ce431e09bfa27cf" target="_blank" rel="noopener noreferrer">v.1.0.8.2_alpha</a>  &#169;2019</p>
            </div>
        )
    }
}

export default NavBar