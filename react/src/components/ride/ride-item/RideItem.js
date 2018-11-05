import React from "react";

import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids.scss';
import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids-responsive.scss';
import './RideItem.scss';

class RideItem extends React.Component {

	convertInKm(valueInMeter) {
		return Math.round((valueInMeter / 1000) * 100) / 100;
	}

	render() {
		return (
			<div className="item pure-g">
				<div className="text-left pure-u-1 pure-u-md-3-4">
					<div className="title">
						{this.props.ride.name}
					</div>
					<div className="description">
						{this.props.ride.description}
					</div>
				</div>
				<div className="text-right pure-u-1 pure-u-md-1-4 hidden-lg">
					<span className="badge">{this.convertInKm(this.props.ride.getDistance())} km</span>
				</div>
			</div>
		);
	}

}

export default RideItem;