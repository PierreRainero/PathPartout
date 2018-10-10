import React from "react";

import 'purecss-sass/vendor/assets/stylesheets/purecss/_menus.scss'
import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids.scss'
import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids-responsive.scss'

import './NavigationBar.scss';

class NavigationBar extends React.Component {
    render() {
        return (
            <div class="header">
                <div class="pure-menu pure-menu-horizontal pure-menu-fixed pathpartout-nav-menu">
                    <div class="pure-g">
                        <div class="pure-u-1 pure-u-md-1-2 text-left">
                            <a class="pure-menu-heading" href="">Path'Partout</a>
                        </div>
                        <div class="pure-u-1 pure-u-md-1-2">
                            <ul class="pure-menu-list">
                                <li class="pure-menu-item"><a href="#" class="pure-menu-link">Connexion</a></li>
                                <li class="pure-menu-item"><a href="#" class="pure-menu-link">Inscription</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationBar;