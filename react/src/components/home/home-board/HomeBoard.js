import React from "react";

import 'purecss-sass/vendor/assets/stylesheets/purecss/_base.scss';
import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids.scss';
import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids-responsive.scss';
import 'font-awesome/css/font-awesome.min.css';

import './HomeBoard.scss';

class HomeBoard extends React.Component {
    render() {
        return (
            <div>
                <div className="pure-g max-height-15">
                    <div className="pure-u-1 pure-u-md-2-3 pure-u-sd-1-1">
                        <div className="box box-left-primary">
                            &nbsp;&nbsp;Que vous soyez en vacances ou que vous ayez juste envie de décompresser, laissez vous tenter par <span className="text-bold">Path'Partout</span>.<br />
                            Une application <span className="text-bold">innovante</span> vous permettant de tracer vos <span className="text-bold">randonnées</span> ou vos <span className="text-bold">balades</span> en villes.
                            Partagez vos parcours avec vos amis et découvrez des nombreux lieux connus ou cachés.<br />
                            Créez vous un compte en quelques clics et commencez l'aventure gratuitement !
                    </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-3 hidden-md">
                        <div className="over-top">
                            <img src={require("../../../assets/imgs/iphone-optimized.png")} className="pure-img center" alt="smartphone-img" />
                        </div>
                    </div>
                </div>
                <div className="pure-g block-parent">
                    <div className="pure-u-1 pure-u-md-1-3 box box-top-secondary block-child">
                        <div className="pure-u">
                            <i className="box-img fa fa-map"></i>
                        </div>
                        <div className="pure-u-3-4">
                            <h4 className="box-header info-title">Tracer</h4>
                            <p className="box-content secondary-dark">
                                Faites vos trajets facilement et rapidement à l'aide de notre carte intéractive intégrée.
                            </p>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-3 box box-top-secondary block-child">
                        <div className="pure-u">
                            <i className="box-img fa fa-male"></i>
                        </div>
                        <div className="pure-u-3-4">
                            <h4 className="box-header">Promener</h4>
                            <p className="box-content secondary-dark">
                                Explorez des points d'intérêts autours de vous, changez vous les idées avec de longues randonnées.
                            </p>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-3 box box-top-secondary block-child">
                        <div className="pure-u">
                            <i className="box-img fa fa-share-alt"></i>
                        </div>
                        <div className="pure-u-3-4">
                            <h4 className="box-header">Partager</h4>
                            <p className="box-content secondary-dark">
                                Echangez vos trajets et vos découvertes avec vos amis ou avec le reste de la communauté.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeBoard;