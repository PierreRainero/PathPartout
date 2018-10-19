import React from "react";
import PropTypes from 'prop-types';

import './Banner.scss';

class Banner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            middle: props.middle,
            background: props.background
        };
    }

    render() {
        return (
            <div className="banner relative-block">
                <h1 className={`banner-head ${this.state.middle? "banner-head-middle" : "banner-head-top"} ${this.state.background? "banner-as-background" : ""}`}>
                    { this.state.title }
                </h1>
            </div>
        );
    }
}

Banner.defaultProps = {
    title: '',
    middle: true,
    background: false
};

Banner.propTypes = {
    title: PropTypes.string,
    middle: PropTypes.bool,
    background: PropTypes.bool
};

export default Banner;