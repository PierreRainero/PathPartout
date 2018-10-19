import React from "react";
import { Link } from "react-router-dom";

import AuthenticatorService from '../connection/AuthenticatorService';
import userStore from '../connection/userStore';

import 'purecss-sass/vendor/assets/stylesheets/purecss/_menus.scss'
import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids.scss'
import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids-responsive.scss'

import './NavigationBar.scss';

class NavigationBar extends React.Component {


    render() {
        let rightPart;
        if (AuthenticatorService.isLogged()) {
            rightPart = <div className="pure-u-1 pure-u-md-1-2">
                            <ul className="pure-menu-list">
                                <li className="pure-menu-item">
                                    <a href="#" className="pure-menu-link">
                                        <i className="fa fa-user-circle"></i>
                                        <span> {userStore.getState().connectedUser.email}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>;
        } else {
            rightPart = <div className="pure-u-1 pure-u-md-1-2">
                            <ul className="pure-menu-list">

                                <li className="pure-menu-item">
                                    <Link to="/login" className="pure-menu-link">
                                        Connexion
                                    </Link>
                                </li>
                                <li className="pure-menu-item">
                                    <a href="#" className="pure-menu-link">Inscription</a>
                                </li>
                            </ul>
                        </div>;
        }

        return (
            <div className="header">
                <div className="pure-menu pure-menu-horizontal pure-menu-fixed pathpartout-nav-menu">
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-2 text-left">
                            <Link className="pure-menu-heading" to="/">
                                Path'Partout
                            </Link>
                        </div>
                        {rightPart}
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationBar;