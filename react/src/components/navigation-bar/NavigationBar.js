import React from "react";

import 'purecss-sass/vendor/assets/stylesheets/purecss/_menus.scss'
import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids.scss'
import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids-responsive.scss'

import './NavigationBar.scss';

class NavigationBar extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="pure-menu pure-menu-horizontal pure-menu-fixed pathpartout-nav-menu">
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-2 text-left">
                            <a className="pure-menu-heading" href="">Path'Partout</a>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2">
                            <ul className="pure-menu-list">
                                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Connexion</a></li>
                                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Inscription</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationBar;