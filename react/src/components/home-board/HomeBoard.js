import React from "react";

import 'purecss-sass/vendor/assets/stylesheets/purecss/_base.scss';
import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids.scss';
import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids-responsive.scss';

import './HomeBoard.scss';

class HomeBoard extends React.Component {
    render() {
        return (
            <div>
                <div className="pure-g max-height-15">
                    <div className="pure-u-1 pure-u-md-2-3 pure-u-sd-1-1">
                        <div className="box box-left-primary">
                            &nbsp;&nbsp;Que vous soyez en vacances ou que vous ayez juste envie de décompresser, laissez vous tenter par <span className="text-bold">Path'Partout</span>.<br/>
                            Une application <span className="text-bold">innovante</span> vous permettant de tracer vos <span className="text-bold">randonnées</span> ou vos <span className="text-bold">balades</span> en villes rapidement et facilement.
                            <span className="text-bold">Partagez</span> vos parcours avec vos amis et découvrez des nombreux lieux connus ou cachés.<br/>
                            Créez vous un compte en quelques clics et commencez l'aventure !
                    </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-3 hidden-sd">
                        <div className="over-top">
                            <img src={require("../../assets/imgs/iphone-optimized.png")} className="pure-img" alt="smartphone-img" />
                        </div>
                    </div>
                </div>
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-3">
                        <div className="box box-top-secondary">
                            Coucou bob
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-3">
                        <div className="box box-top-secondary">
                            Coucou bob
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-3">
                        <div className="box box-top-secondary">
                            Coucou bob
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeBoard;