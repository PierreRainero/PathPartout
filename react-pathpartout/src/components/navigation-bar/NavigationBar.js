import React from "react";

import 'purecss-sass/vendor/assets/stylesheets/purecss/_menus.scss'
import './navigationBar.scss';

class NavigationBar extends React.Component {
    render() {
        return (
            <div class="header">
                <div class="pathpartout-nav-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                    <a class="pure-menu-heading float-left" href="">Path'Partout</a>

                    <ul class="pure-menu-list">
                        <li class="pure-menu-item"><a href="#" class="pure-menu-link">Connexion</a></li>
                        <li class="pure-menu-item"><a href="#" class="pure-menu-link">Inscription</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavigationBar;