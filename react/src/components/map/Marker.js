import React from "react";

import './Marker.scss';

class Marker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        };
    }

    changeDisplay= ()=> {
        this.setState({clicked : !this.state.clicked});
    }

    render() {
        return (
            <div className="maker-container">
                <img src={require("../../assets/imgs/marker-green.png")}
                     className="pure-img marker clickable" alt="marker-img"
                     onClick={this.changeDisplay}
                />
                {
                    this.state.clicked?
                        <div className="box info-bulle">
                            <span className="right clickable rightCornerBtn" onClick={this.changeDisplay}><i className="fa fa-times "></i></span>
                            <h4 className="box-header info-title">{this.props.title}</h4>
                            <p className="box-content secondary-dark info-body">{this.props.body}</p>
                        </div>
                    : null
                }
            </div>
        );
    };
}

export default Marker;