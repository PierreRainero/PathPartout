import React from "react";

import userStore from '../connection/userStore';

import RideService from '../ride/RideService';

import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids.scss';
import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids-responsive.scss';
import 'font-awesome/css/font-awesome.min.css';

import './Profil.scss';

class Profil extends React.Component {
    render() {
        this.user = userStore.getState().connectedUser;
        return (
            <div className="container"> 
                <div className="box box-left-primary margin-top">
                    <div className="pure-u hidden-md">
                        <img src={require("../../assets/imgs/user-icon-optimized.png")} className="pure-img avatar" alt="user-img" />
                    </div>
                    <div className="pure-u-3-4">
                        <h4 className="box-header">{this.user.firstName} {this.user.lastName}</h4>
                        <div className="box-content secondary-dark breakable">
                            <p><i className="fa fa-envelope"></i><span> {this.user.email}</span></p>
                            <p><i className="fa fa-map"></i><span> {RideService.numberOfRide(userStore.getState().connectedUser)} trajets</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profil;