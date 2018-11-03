import React from "react";
import { Link } from "react-router-dom";

import AuthenticatorService from '../connection/AuthenticatorService';

import './NavigationBar.scss';

class NavigationBar extends React.Component {
    toggle(e) {
        var navbarNativeElement = document.getElementById("navbar-container");
        if (navbarNativeElement.className === "topnav") {
            navbarNativeElement.className += " responsive";
        } else {
            navbarNativeElement.className = "topnav";
        }
    }

    render() {
        let rightPart;
        if (AuthenticatorService.isLogged()) {
            rightPart = <div className="nav-body">
                            <Link to="/rides" onClick={this.toggle}>
                                <i className="fa fa-map"></i>
                                <span> Trajets</span>
                            </Link>
                            <a href="#" >
                                <i className="fa fa-user-circle"></i>
                                <span> Profil</span>
                            </a>
                        </div >;
        } else {
            rightPart = <div className="nav-body">
                            <Link to="/login" onClick={this.toggle}>
                                Connexion
                            </Link>
                            <a href="#">Inscription</a>
                        </div>;
        }

        return (
            <div className="topnav" id="navbar-container">
                <div className="nav-header">
                    <Link to="/">
                        Path'Partout
                </Link>
                </div>
                {rightPart}
                <a href="javascript:void(0);" className="icon" onClick={this.toggle}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        );
    }
}

export default NavigationBar;