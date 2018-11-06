import React from "react";
import { Link } from "react-router-dom";

import AuthenticatorService from '../connection/AuthenticatorService';

import 'font-awesome/css/font-awesome.min.css';

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
                            <Link to="/profil" onClick={this.toggle}>
                                <i className="fa fa-user-circle"></i>
                                <span> Profil</span>
                            </Link>
                        </div >;
        } else {
            rightPart = <div className="nav-body">
                            <Link to="/login" onClick={this.toggle}>
                                Connexion
                            </Link>
                            <Link to="/registration" onClick={this.toggle}>
                                Inscription
                            </Link>
                        </div>;
        }

        return (
            <div className="topnav" id="navbar-container">
                <div className="nav-header">
                    <Link to="/" onClick={this.toggle}>
                        Path'Partout
                    </Link>
                </div>
                {rightPart}
                <a href="# " className="icon" onClick={this.toggle}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        );
    }
}

export default NavigationBar;